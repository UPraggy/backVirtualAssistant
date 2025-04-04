
const exemploPesquisaMuseu = [
    // MUSEUS
    {pergunta: "Quais museus existem em belo horizonte ?", palavraChave: "museu_lista"},
    {pergunta: "lista de museus.", palavraChave: "museu_lista"},
    {pergunta: "lista de museus", palavraChave: "museu_lista"},
    {pergunta: "me mostre uma lista de museus.", palavraChave: "museu_lista"},
    {pergunta: "quais museus tem em bh?", palavraChave: "museu_lista"},
    {pergunta: "museus em belo horizonte.", palavraChave: "museu_lista"},
    {pergunta: "quais são os museus de belo horizonte?", palavraChave: "museu_lista"},
    {pergunta: "quais museus posso visitar em belo horizonte?", palavraChave: "museu_lista"},
    {pergunta: "quais são os museus disponíveis em bh?", palavraChave: "museu_lista"},
    {pergunta: "quais museus posso encontrar em belo horizonte?", palavraChave: "museu_lista"},
    //...


    // GRATUIDADE
    
    {pergunta: "Quais museus em BH têm entrada gratuita?", palavraChave: "museu_lista_gratuitos"},
    {pergunta: "qual são os museus gratuitos em belo horizonte?", palavraChave: "museu_lista_gratuitos"},
    {pergunta: "me mostre uma lista de museus gratuitos.", palavraChave: "museu_lista_gratuitos"},
    {pergunta: "qual museus tem em bh que são gratuitos?", palavraChave: "museu_lista_gratuitos"},
    {pergunta: "museus gratuitos em belo horizonte.", palavraChave: "museu_lista_gratuitos"},
    {pergunta: "qual são os museus gratuitos de belo horizonte?", palavraChave: "museu_lista_gratuitos"},
    {pergunta: "qual museus posso visitar de graça em belo horizonte?", palavraChave: "museu_lista_gratuitos"},
    {pergunta: "qual são os museus gratuitos disponíveis em bh?", palavraChave: "museu_lista_gratuitos"},
    {pergunta: "qual museus gratuitos posso encontrar em belo horizonte?", palavraChave: "museu_lista_gratuitos"},
    {pergunta: "lista de museus gratuitos.", palavraChave: "museu_lista_gratuitos"},

    // PAGOS
    {pergunta: "quais são os museus pagos em belo horizonte?", palavraChave: "museu_lista_pagos"},
    {pergunta: "me mostre uma lista de museus pagos.", palavraChave: "museu_lista_pagos"},
    {pergunta: "quais museus tem em bh que são pagos?", palavraChave: "museu_lista_pagos"},
    {pergunta: "museus pagos em belo horizonte.", palavraChave: "museu_lista_pagos"},
    {pergunta: "qual são os museus pagos de belo horizonte?", palavraChave: "museu_lista_pagos"},
    {pergunta: "qual museus posso visitar pagando em belo horizonte?", palavraChave: "museu_lista_pagos"},
    {pergunta: "qual são os museus pagos disponíveis em bh?", palavraChave: "museu_lista_pagos"},
    {pergunta: "qual museus pagos posso encontrar em belo horizonte?", palavraChave: "museu_lista_pagos"},
    {pergunta: "lista de museus pagos.", palavraChave: "museu_lista_pagos"},


















    //BAIRROS



    // CENTRO
    {pergunta: "quais museus ficam no centro de bh?", palavraChave: "museu_lista_Bairro_Centro"},
    {pergunta: "me mostre museus localizados no centro.", palavraChave: "museu_lista_Bairro_Centro"},
    {pergunta: "lista de museus no centro de belo horizonte.", palavraChave: "museu_lista_Bairro_Centro"},
    {pergunta: "tem algum museu no centro de bh?", palavraChave: "museu_lista_Bairro_Centro"},

    // FUNCIONÁRIOS
    {pergunta: "quais museus ficam no funcionários de bh?", palavraChave: "museu_lista_Bairro_Funcionarios"},
    {pergunta: "me mostre museus localizados no funcionários.", palavraChave: "museu_lista_Bairro_Funcionarios"},
    {pergunta: "lista de museus no funcionários de belo horizonte.", palavraChave: "museu_lista_Bairro_Funcionarios"},
    {pergunta: "tem algum museu no funcionários de bh?", palavraChave: "museu_lista_Bairro_Funcionarios"},

    // PAMPULHA
    {pergunta: "quais museus ficam na pampulha de bh?", palavraChave: "museu_lista_Bairro_Pampulha"},
    {pergunta: "me mostre museus localizados na pampulha.", palavraChave: "museu_lista_Bairro_Pampulha"},
    {pergunta: "lista de museus na pampulha de belo horizonte.", palavraChave: "museu_lista_Bairro_Pampulha"},
    {pergunta: "tem algum museu na pampulha de bh?", palavraChave: "museu_lista_Bairro_Pampulha"},

    // CIDADE JARDIM
    {pergunta: "quais museus ficam na cidade jardim de bh?", palavraChave: "museu_lista_Bairro_Cidade_Jardim"},
    {pergunta: "me mostre museus localizados na cidade jardim.", palavraChave: "museu_lista_Bairro_Cidade_Jardim"},
    {pergunta: "lista de museus na cidade jardim de belo horizonte.", palavraChave: "museu_lista_Bairro_Cidade_Jardim"},
    {pergunta: "tem algum museu na cidade jardim de bh?", palavraChave: "museu_lista_Bairro_Cidade_Jardim"},

    // LOURDES
    {pergunta: "quais museus ficam em lourdes de bh?", palavraChave: "museu_lista_Bairro_Lourdes"},
    {pergunta: "me mostre museus localizados em lourdes.", palavraChave: "museu_lista_Bairro_Lourdes"},
    {pergunta: "lista de museus em lourdes de belo horizonte.", palavraChave: "museu_lista_Bairro_Lourdes"},
    {pergunta: "tem algum museu em lourdes de bh?", palavraChave: "museu_lista_Bairro_Lourdes"},

    // SANTA INES
    {pergunta: "quais museus ficam em santa inês de bh?", palavraChave: "museu_lista_Bairro_Santa_Ines"},
    {pergunta: "me mostre museus localizados em santa inês.", palavraChave: "museu_lista_Bairro_Santa_Ines"},
    {pergunta: "lista de museus em santa inês de belo horizonte.", palavraChave: "museu_lista_Bairro_Santa_Ines"},
    {pergunta: "tem algum museu em santa inês de bh?", palavraChave: "museu_lista_Bairro_Santa_Ines"},

    // OURO PRETO
    {pergunta: "quais museus ficam em ouro preto de bh?", palavraChave: "museu_lista_Bairro_Ouro_Preto"},
    {pergunta: "me mostre museus localizados em ouro preto.", palavraChave: "museu_lista_Bairro_Ouro_Preto"},
    {pergunta: "lista de museus em ouro preto de belo horizonte.", palavraChave: "museu_lista_Bairro_Ouro_Preto"},
    {pergunta: "tem algum museu em ouro preto de bh?", palavraChave: "museu_lista_Bairro_Ouro_Preto"},

    // SANTA TEREZA
    {pergunta: "quais museus ficam em santa tereza de bh?", palavraChave: "museu_lista_Bairro_Santa_Tereza"},
    {pergunta: "me mostre museus localizados em santa tereza.", palavraChave: "museu_lista_Bairro_Santa_Tereza"},
    {pergunta: "lista de museus em santa tereza de belo horizonte.", palavraChave: "museu_lista_Bairro_Santa_Tereza"},
    {pergunta: "tem algum museu em santa tereza de bh?", palavraChave: "museu_lista_Bairro_Santa_Tereza"},

    // FLORESTA
    {pergunta: "quais museus ficam na floresta de bh?", palavraChave: "museu_lista_Bairro_Floresta"},
    {pergunta: "me mostre museus localizados na floresta.", palavraChave: "museu_lista_Bairro_Floresta"},
    {pergunta: "lista de museus na floresta de belo horizonte.", palavraChave: "museu_lista_Bairro_Floresta"},
    {pergunta: "tem algum museu na floresta de bh?", palavraChave: "museu_lista_Bairro_Floresta"},

    // SÃO JOSE
    {pergunta: "quais museus ficam em são josé de bh?", palavraChave: "museu_lista_Bairro_Sao_Jose"},
    {pergunta: "me mostre museus localizados em são josé.", palavraChave: "museu_lista_Bairro_Sao_Jose"},
    {pergunta: "lista de museus em são josé de belo horizonte.", palavraChave: "museu_lista_Bairro_Sao_Jose"},
    {pergunta: "tem algum museu em são josé de bh?", palavraChave: "museu_lista_Bairro_Sao_Jose"},

    // NOVA SUISSA
    {pergunta: "quais museus ficam na nova suíssa de bh?", palavraChave: "museu_lista_Bairro_Nova_Suissa"},
    {pergunta: "me mostre museus localizados na nova suíssa.", palavraChave: "museu_lista_Bairro_Nova_Suissa"},
    {pergunta: "lista de museus na nova suíssa de belo horizonte.", palavraChave: "museu_lista_Bairro_Nova_Suissa"},
    {pergunta: "tem algum museu na nova suíssa de bh?", palavraChave: "museu_lista_Bairro_Nova_Suissa"},

    // SANTA LUCIA
    {pergunta: "quais museus ficam em santa lúcia de bh?", palavraChave: "museu_lista_Bairro_Santa_Lucia"},
    {pergunta: "me mostre museus localizados em santa lúcia.", palavraChave: "museu_lista_Bairro_Santa_Lucia"},
    {pergunta: "lista de museus em santa lúcia de belo horizonte.", palavraChave: "museu_lista_Bairro_Santa_Lucia"},
    {pergunta: "tem algum museu em santa lúcia de bh?", palavraChave: "museu_lista_Bairro_Santa_Lucia"},






    

    // EXTRA
    {pergunta: "Qual museu fala sobre moda?", palavraChave: "museu_extra_Museu da Moda - MUMO"},
    {pergunta: "Há museus em BH que têm atividades para crianças?", palavraChave: "museu_extra_Museu dos Brinquedos"},
    {pergunta: "Qual museu é mais adequado para visitar com a família?", palavraChave: "museu_extra_Museu Histórico Abílio Barreto"},
    {pergunta: "Quais museus oferecem visitas guiadas em BH?", palavraChave: "museu_extra_Espaço do Conhecimento UFMG"},
    {pergunta: "Onde posso fazer uma visita guiada em BH?", palavraChave: "museu_extra_Centro Cultural Banco do Brasil Belo Horizonte"},
    {pergunta: "Qual é o museu mais antigo de BH?", palavraChave: "museu_extra_Museu Histórico Abílio Barreto"},
    {pergunta: "Quais museus em BH têm uma coleção sobre a história de Minas Gerais?", palavraChave: "museu_extra_MM Gerdau - Museu das Minas e do Metal"},
    {pergunta: "Preciso comprar ingresso com antecedência para os museus de BH?", palavraChave: "museu_extra_Palácio da Liberdade"},
    {pergunta: "Qual museu tem ingresso mais barato em Belo Horizonte?", palavraChave: "museu_extra_Museu da Moda - MUMO"},
    {pergunta: "Onde posso comprar ingressos para os museus de BH online?", palavraChave: "museu_extra_Centro Cultural UFMG"},
    {pergunta: "Os museus de BH têm acessibilidade para cadeirantes?", palavraChave: "museu_extra_Centro de Arte Contemporânea e Fotografia"},
    {pergunta: "Qual museu tem audioguia em BH?", palavraChave: "museu_extra_Museu Inimá de Paula"},
    {pergunta: "Quais museus têm estacionamento próprio?", palavraChave: "museu_extra_Museu Brasileiro do Futebol (Mineirão)"},
    {pergunta: "Qual museu em BH tem a melhor coleção de arte contemporânea?", palavraChave: "museu_extra_Centro de Arte Contemporânea e Fotografia"},
    {pergunta: "Onde posso aprender mais sobre a cultura mineira?", palavraChave: "museu_extra_Museu Clube da Esquina"},
    {pergunta: "Quais museus de BH têm exposições sobre ciência?", palavraChave: "museu_extra_Museu de Ciências Naturais"},
    {pergunta: "Onde posso ver arte indígena em BH?", palavraChave: "museu_extra_Museu de História Natural"},











    // HORARIOS MUSEUS
    // Perguntas sobre horários específicos

    {pergunta: "Algum museu abre na segunda-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus estão abertos na segunda-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Tem museu aberto na segunda-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus abrem na segunda-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Algum museu funciona na segunda-feira ?", palavraChave: "museu_lista_horario_funcionamento"},

    {pergunta: "Algum museu abre na terça-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus estão abertos na terça-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Tem museu aberto na terça-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus abrem na terça-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Algum museu funciona na terça-feira ?", palavraChave: "museu_lista_horario_funcionamento"},

    {pergunta: "Algum museu abre na quarta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus estão abertos na quarta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Tem museu aberto na quarta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus abrem na quarta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Algum museu funciona na quarta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},

    {pergunta: "Algum museu abre na quinta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus estão abertos na quinta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Tem museu aberto na quinta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus abrem na quinta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Algum museu funciona na quinta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},

    {pergunta: "Algum museu abre na sexta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus estão abertos na sexta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Tem museu aberto na sexta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus abrem na sexta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Algum museu funciona na sexta-feira ?", palavraChave: "museu_lista_horario_funcionamento"},

    {pergunta: "Algum museu abre no sábado ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus estão abertos no sábado ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Tem museu aberto no sábado ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus abrem no sábado ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Algum museu funciona no sábado ?", palavraChave: "museu_lista_horario_funcionamento"},

    
    {pergunta: "Algum museu abre no domingo ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus estão abertos no domingo ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Tem museu aberto no domingo ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus abrem no domingo ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Algum museu funciona no domingo ?", palavraChave: "museu_lista_horario_funcionamento"},

    {pergunta: "(Qual|Quais) museu em BH abre aos domingos?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "(Qual|Quais) museu em BH abre na segunda-feira?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "(Qual|Quais) museu em BH abre na terça-feira?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "(Qual|Quais) museu em BH abre na quarta-feira?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "(Qual|Quais) museu em BH abre na quinta-feira?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "(Qual|Quais) museu em BH abre na sexta-feira?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "(Qual|Quais) museu em BH abre no sábado?", palavraChave: "museu_lista_horario_funcionamento"},

    
    // Perguntas sobre horários específicos
    {pergunta: "Quais museus funcionam ás \d{1,2}(h|:)?\d{0,2}\s*(horas) ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus funcionam às \d{1,2}(h|:)?\d{0,2}\s*(horas) ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus estão abertos às \d{1,2}(h|:)?\d{0,2}\s*(horas) ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Tem museu aberto às \d{1,2}(h|:)?\d{0,2}\s*(horas) ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Quais museus abrem às \d{1,2}(h|:)?\d{0,2}\s*(horas) ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Algum museu está aberto às \d{1,2}(h|:)?\d{0,2}\s*(horas) ?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Algum museu está aberto às \d{1,2}(h|:)?\d{0,2}\s*(horas)?", palavraChave: "museu_lista_horario_funcionamento"},
    {pergunta: "Algum museu está aberto às \d{1,2}(h|:)?\d{0,2}\s*(horas) ?", palavraChave: "museu_lista_horario_funcionamento"},
    

    // Perguntas sobre dias da semana
    {pergunta: "Quais museus estão abertos durante a semana ?", palavraChave: "museu_lista_horario_funcionamento_dias_de_semana"},
    {pergunta: "Quais museus abrem nos dias de semana ?", palavraChave: "museu_lista_horario_funcionamento_dias_de_semana"},
    {pergunta: "Tem museu aberto de segunda a sexta ?", palavraChave: "museu_lista_horario_funcionamento_dias_de_semana"},
    {pergunta: "Quais museus funcionam de segunda a sexta ?", palavraChave: "museu_lista_horario_funcionamento_dias_de_semana"},
    {pergunta: "Quais museus estão abertos fim de semana ?", palavraChave: "museu_lista_horario_funcionamento_fins_de_semana"},
    {pergunta: "Quais museus nos fins de semana ?", palavraChave: "museu_lista_horario_funcionamento_fins_de_semana"},
    {pergunta: "Quais museus funcionam fim de semana ?", palavraChave: "museu_lista_horario_funcionamento_fins_de_semana"},


    // Perguntas sobre o momento atual
    {pergunta: "Tem algum museu aberto agora ?", palavraChave: "museu_lista_horario_funcionamento_agora"},
    {pergunta: "Quais museus estão abertos neste momento ?", palavraChave: "museu_lista_horario_funcionamento_agora"},
    {pergunta: "Algum museu está funcionando agora ?", palavraChave: "museu_lista_horario_funcionamento_agora"},
    {pergunta: "Tem museu aberto agora ?", palavraChave: "museu_lista_horario_funcionamento_agora"},



















    // INFORMAÇÕES
    // {pergunta: "quero saber mais sobre o museu centro cultural banco do brasil belo horizonte", palavraChave: "museu_informacoes_Centro_Cultural_Banco_do_Brasil_BH"},
    // {pergunta: "quero saber mais sobre o museu mm gerdau - museu das minas e do metal", palavraChave: "museu_informacoes_MM_Gerdau"},
    // {pergunta: "quero saber mais sobre o museu palácio da liberdade", palavraChave: "museu_informacoes_Palacio_da_Liberdade"},
    // {pergunta: "quero saber mais sobre o museu de ciências naturais", palavraChave: "museu_informacoes_Ciencias_Naturais"},
    // {pergunta: "quero saber mais sobre o museu de artes & ofícios", palavraChave: "museu_informacoes_Artes_Oficios"},
    // {pergunta: "quero saber mais sobre o museu casa kubitschek", palavraChave: "museu_informacoes_Casa_Kubitschek"},
    // {pergunta: "quero saber mais sobre o museu espaço do conhecimento ufmg", palavraChave: "museu_informacoes_Espaco_Conhecimento_UFMG"},
    // {pergunta: "quero saber mais sobre o museu histórico abílio barreto", palavraChave: "museu_informacoes_Historico_Abilio_Barreto"},
    
    // {pergunta: "quero saber mais sobre o museu de arte da pampulha", palavraChave: "museu_informacoes_Arte_Pampulha"},
    // {pergunta: "quero saber mais sobre o museu da mineralogia", palavraChave: "museu_informacoes_Mineralogia"},
    // {pergunta: "quero saber mais sobre o museu inimá de paula", palavraChave: "museu_informacoes_Inima_de_Paula"},
    // {pergunta: "quero saber mais sobre o  dos brinquedos", palavraChave: "museu_informacoes_Brinquedos"},
    // {pergunta: "quero saber mais sobre o  giramundo", palavraChave: "museu_informacoes_Giramundo"},
    
    // {pergunta: "quero saber mais sobre o museu centro de artesanato mineiro", palavraChave: "museu_informacoes_Artesanato_Mineiro"},
    
    // {pergunta: "quero saber mais sobre o  da moda - mumo", palavraChave: "museu_informacoes_Moda_MUMO"},
    // {pergunta: "quero saber mais sobre o museu centro de arte contemporânea e fotografia", palavraChave: "museu_informacoes_Arte_Contemporanea_Fotografia"},
    // {pergunta: "quero saber mais sobre o museu centro cultural ufmg", palavraChave: "museu_informacoes_Centro_Cultural_UFMG"},
    // {pergunta: "quero saber mais sobre o museu da ciência e tecnologia cefet/mg", palavraChave: "museu_informacoes_Ciencia_Tecnologia_CEFET_MG"},
    // {pergunta: "quero saber mais sobre o museu histórico dos militares mineiros", palavraChave: "museu_informacoes_Historico_Militares_Mineiros"},
    // {pergunta: "quero saber mais sobre o museu histórico da polícia militar de minas gerais", palavraChave: "museu_informacoes_Historico_Policia_Militar_MG"}
]
module.exports = exemploPesquisaMuseu;