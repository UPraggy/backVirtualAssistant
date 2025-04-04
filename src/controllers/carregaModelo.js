const natural = require('natural');
const fs = require('fs');

// Carregar JSON de palavras-chave
let dados = {};
function carregarDados() {
    try {
        dados = {}
        const rawDataMuseu = fs.readFileSync('./src/static/museuData.json');
        dados = {museu: JSON.parse(rawDataMuseu)};
        console.log('📂 Dados carregados com sucesso!');
    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
    }
}
carregarDados();


const modeloPath = './src/static/modelo.json';
let treinaModelo = ''

// Verifica se o arquivo do modelo existe
if (fs.existsSync(modeloPath)) {
    // Lê o conteúdo do arquivo
    const modeloContent = fs.readFileSync(modeloPath, 'utf8');
    let modelo;

    try {
        modelo = JSON.parse(modeloContent);
    } catch (err) {
        console.error('Erro ao analisar o arquivo modelo.json:', err);
        modelo = { classifications: {}, totalDocuments: 0 }; // Usa um modelo vazio se o arquivo estiver corrompido
    }

    // Verifica se o modelo está no formato esperado
    if (!modelo.classifications || !modelo.totalDocuments) {
        console.error('Modelo inválido. Criando um novo classificador.');
        global.classifier = new natural.BayesClassifier(); // Cria um novo classificador

    } else {
        // Carrega o modelo
        natural.BayesClassifier.load(modeloPath, null, (err, loadedClassifier) => {
            if (err) {
                console.error('Erro ao carregar o modelo:', err);
                global.classifier = new natural.BayesClassifier(); // Cria um novo classificador em caso de erro
            } else {
                console.log('🤖 Modelo carregado com sucesso!');
                global.classifier = loadedClassifier; // Define globalmente para reutilizar
            }
        });
    }
} else {
    console.log('⚠️ Nenhum modelo encontrado. Criando um novo classificador.');
    global.classifier = new natural.BayesClassifier(); // Cria um novo classificador
    
}

treinaModelo = require('./treinaModelo')()


module.exports = {dados, classifier, treinaModelo}