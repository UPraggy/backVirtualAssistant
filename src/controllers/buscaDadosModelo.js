const wss = require('../../websocket'); // Importa o wss
const {dados} = require('./carregaModelo')
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
const filtraDataModeloMuseu = require('./filtraDataModeloMuseu')

// WebSocket para comunicação em tempo real
wss.on('connection', (ws) => {
    console.log('🟢 Novo cliente conectado');
    
    ws.on('message', (message) => {
        message = JSON.parse(message);
        
        switch (message.action) {
            case 'question':
                // Verificar se o classificador já sabe a resposta
                const tokens = tokenizer.tokenize(removerStopwords(message.data.toLowerCase()));
                console.log(tokens)
                let categoria = global.classifier.classify(tokens);

                categoria = [categoria.split('_')[0], categoria.split('_').slice(1).join('_')]
                if(categoria[0] == 'museu'){
                    let resultado = filtraDataModeloMuseu({data: dados[categoria[0]], chave: categoria[1], pergunta: message.data})
                    ws.send(JSON.stringify({
                        action: 'responseQuestion',  
                        data: JSON.stringify(resultado)    
                    }));
                }else{
                    ws.send(JSON.stringify({
                        action: 'responseQuestion',  
                        data: {NADAENCONTRADO: "Nada Encontrado"} //   
                    }));
                }
                
              break;
        }
       
    });
});