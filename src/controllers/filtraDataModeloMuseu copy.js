
function filtraDataModeloMuseu({data, chave, pergunta = null}) {
    console.log(chave)
    // console.log(Object.keys(data))
    const MuseuKeys = Object.keys(data)
    let listaFilteredSpaces = []

    switch (chave) {
        case 'lista':
            return MuseuKeys;
        case 'lista_gratuitos':
            for (let i = 0; i < MuseuKeys.length; i++) {
                if (data[MuseuKeys[i]].preco === "Entrada gratuita") {
                    listaFilteredSpaces.push(data[MuseuKeys[i]])
                }
            }
            return {listaFilteredSpaces: listaFilteredSpaces};
        case 'lista_pagos':
            
            for (let i = 0; i < MuseuKeys.length; i++) {
                if (data[MuseuKeys[i]].preco !== "Entrada gratuita") {
                    listaFilteredSpaces.push(data[MuseuKeys[i]])
                }
            }
            return {listaFilteredSpaces: listaFilteredSpaces};
        case 'lista_horario_funcionamento':
            console.log("PERGUNTA")
            console.log(pergunta)
            console.log(extrairDiaEHoraDaPergunta(pergunta))
            let { dia, hora} = extrairDiaEHoraDaPergunta(pergunta)
            listaFilteredSpaces = listarMuseusAbertos({museus: data, dia, hora}) 
            return {listaFilteredSpaces: listaFilteredSpaces};
        case 'lista_horario_funcionamento_agora':
            return {listaFilteredSpaces: listarMuseusAbertos({museus: data, diaAtual: true})};
        case 'lista_horario_funcionamento_dias_de_semana':
            return {listaFilteredSpaces: listarMuseusAbertosDiasUteis(data)};
        case 'lista_horario_funcionamento_fins_de_semana':
            return {listaFilteredSpaces: listarMuseusAbertosFimDeSemana(data)};
        default: //Se não encontrar 3 vezes, ele manda o texto de sujestões
            return {NADAENCONTRADO: "Nada Encontrado"};
    }
}


/*
quais museus estão abertos as 8:30
quais museus estão abertos as 9 horas
quais museus estão abertos aos fins de semana
museu aberto agora
*/

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function extrairDiaEHoraDaPergunta(pergunta) {
    const diasSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    const regexDia = new RegExp(`(${diasSemana.join("|")})`, "i");
    const regexHora = /\d{1,2}\s*(h|:)?\s*\d{0,2}\s*(horas|h)?/i;

    // Normaliza a pergunta removendo acentos e convertendo para minúsculas
    const perguntaNormalizada = removerAcentos(pergunta.toLowerCase());

    // Extrai o dia da semana da pergunta
    const diaMatch = perguntaNormalizada.match(regexDia);
    const dia = diaMatch ? diaMatch[1].toLowerCase() : null;

    // Extrai o horário da pergunta
    const horaMatch = perguntaNormalizada.match(regexHora);
    const hora = horaMatch ? horaMatch[0] : null;

    return { dia, hora };
}

function normalizarDia(dia) {
    return dia.replace('-feira', '').toLowerCase();
}

function normalizarHora(hora) {
    if (!hora) return null;

    // Remove espaços extras e padroniza a entrada
    const horaNormalizada = hora.trim().toLowerCase().replace(/\s*(horas|h)\s*/g, '').replace(':', 'h');

    // Expressão regular para capturar horas e minutos corretamente
    const match = horaNormalizada.match(/^(\d{1,2})h?(\d{2})?$/);

    if (!match) return null; // Retorna null para valores inválidos

    let horas = parseInt(match[1], 10);
    let minutos = match[2] ? parseInt(match[2], 10) : 0;

    // Validação de limites (24h e minutos válidos)
    if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59) return null;

    return horas * 60 + minutos;
}

function listarMuseusAbertos({museus, diaSemana = null, horaAtual = null, diaAtual = false}) {
    const diasSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];

    // Normaliza o dia da semana
    const diaFormatado = diaSemana ? normalizarDia(removerAcentos(diaSemana)) : diasSemana[new Date().getDay()];

    // Obtém a hora atual caso `horaAtual` seja null
    if (horaAtual === null) {
        const agora = new Date();
        const horas = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');
        horaAtual = `${horas}h${minutos}`; // Formato "HHhMM"
    }

    // Filtra os museus com horários válidos
    const museusFiltrados = Object.entries(museus).filter(([nome, info]) => {
        if (!Array.isArray(info.horario) || info.horario.length === 0) {
            return false; // Ignora museus sem horários válidos
        }

        // Verifica se o museu está aberto no dia e horário especificados
        return info.horario.some(horario => {
            const diaInicioIndex = diasSemana.indexOf(horario.diaInicio);
            const diaFinalIndex = diasSemana.indexOf(horario.diaFinal);
            const diaAtualIndex = diasSemana.indexOf(diaFormatado);

            console.log("NOVO DIA");
            console.log(nome)
            console.log("Dia Início:", horario.diaInicio, "Dia Fim:", horario.diaFinal, "Dia Atual:", diaFormatado);
            const diaValido = diaAtualIndex >= diaInicioIndex && diaAtualIndex <= diaFinalIndex;

            // Verifica o horário, se fornecido
            if (horaAtual !== null) {
                // console.log("ANTIGA HORA");
                // console.log("Início:", horario.inicio, "Fim:", horario.fim, "Hora Atual:", horaAtual);

                const inicio = normalizarHora(horario.inicio);
                const fim = normalizarHora(horario.fim);
                const horaFormatada = normalizarHora(horaAtual);

                console.log("NOVA HORA");
                console.log(nome)
                console.log("Início:", inicio, "Fim:", fim, "Hora Atual:", horaFormatada);
                const horaValida = horaFormatada >= inicio && horaFormatada < fim;
                console.log(diaValido, horaValida)
                return (!diaAtual || diaValido) && horaValida;
            }

            return (!diaAtual || diaValido);
        });
    });

    // Retorna apenas os nomes dos museus abertos
    return museusFiltrados;
}
// 
function listarMuseusAbertosDiasUteis(museus) {
    const diasUteis = ["segunda", "terça", "quarta", "quinta", "sexta"];

    return Object.entries(museus).filter(([nome, info]) => {
        if (!Array.isArray(info.horario) || info.horario.length === 0) {
            return false; // Ignora museus sem horários válidos
        }

        // Verifica se o museu está aberto em pelo menos um dia útil
        return info.horario.some(horario => {
            const diaInicioIndex = diasUteis.indexOf(horario.diaInicio);
            const diaFinalIndex = diasUteis.indexOf(horario.diaFinal);
            return diaInicioIndex !== -1 || diaFinalIndex !== -1;
        });
    }) // Retorna apenas os nomes dos museus
}

function listarMuseusAbertosFimDeSemana(museus) {
    const fimDeSemana = ["sábado", "domingo"];

    return Object.entries(museus).filter(([nome, info]) => {
        if (!Array.isArray(info.horario) || info.horario.length === 0) {
            return false; // Ignora museus sem horários válidos
        }

        // Verifica se o museu está aberto em pelo menos um dia do fim de semana
        return info.horario.some(horario => {
            const diaInicioIndex = fimDeSemana.indexOf(horario.diaInicio);
            const diaFinalIndex = fimDeSemana.indexOf(horario.diaFinal);
            return diaInicioIndex !== -1 || diaFinalIndex !== -1;
        });
    }) // Retorna apenas os nomes dos museus
}

module.exports = filtraDataModeloMuseu;