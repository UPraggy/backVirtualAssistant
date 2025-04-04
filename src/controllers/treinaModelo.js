let treinaModeloMuseu = require('./TeinoModelo/treinaModeloMuseu')
const modeloPath = './src/static/modelo.json';

const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

const stopwords = [ 
    'quais', 'existem', 'em', 'de', 'para', 'tem', 'mais', 'a', 'o', 'e', 'na', 'nos', 'aos', 'da', 'do', 'dos'
  ];
  
  const removerStopwords = (texto) => {
    // Normalizar texto e remover pontuações
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove acentos
    texto = texto.replace(/[?.,!]/g, ''); // Remove pontuação
    
    // Substituir "BH" e "Belo Horizonte" por um termo único
    texto = texto.replace(/\bbh\b/gi, 'Belo_Horizonte');
    texto = texto.replace(/belo horizonte/gi, 'Belo_Horizonte');
  
    // Dividir texto em palavras
    let palavras = texto.split(' ');
  
    // Filtrar palavras que não são stopwords e garantir que "Belo_Horizonte" fique na frase
    let palavrasFiltradas = palavras.filter(word => !stopwords.includes(word.toLowerCase()) || word === 'Belo_Horizonte');
  
    return palavrasFiltradas.join(' ');
  };
  

function treinaAssistente () {
    
    let blocodePerguntas = []

    blocodePerguntas = [...treinaModeloMuseu]
    // .forEach((val)=>{
    // global.classifier.addDocument(val.pergunta, val.palavraChave);
    // })

    const blockSize = 50; // Tamanho do bloco de perguntas por vez
    for (let i = 0; i < blocodePerguntas.length; i += blockSize) {
        const block = blocodePerguntas.slice(i, i + blockSize);
        block.forEach((val) => {
            const tokens = tokenizer.tokenize(removerStopwords(val.pergunta.toLowerCase()));
            console.log(tokens)
            global.classifier.addDocument(tokens, val.palavraChave);
        });
        global.classifier.train(); // Treina após cada bloco
    }

    global.classifier.save(modeloPath, (err) => {
        if (err) {
            console.error('Erro ao salvar o modelo:', err);
        } else {
            console.log('✅ Modelo treinado e salvo com sucesso!');
        }
    });
}

module.exports = () => {
    treinaAssistente(global.classifier)
    return {museu: treinaModeloMuseu};
}