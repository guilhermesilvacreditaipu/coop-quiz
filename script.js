const questions = [
    {
        question: "Qual é o número de anos de existência da Cooperativa de crédito Sicoob Creditaipu?",
        options: ["27 anos", "37 anos", "47 anos", "57 anos"],
        answer: "37 anos"
    },
    {
        question: "Quantos pontos de atendimento o Sicoob Creditaipu possui?",
        options: ["10", "23", "35", "50"],
        answer: "23"
    },
    {
        question: "Quantos sócios fundadores deram origem ao Sicoob Creditaipu?",
        options: ["10", "15", "20", "25"],
        answer: "25"
    },
    {
        question: "Qual é o número atual de associados do Sicoob Creditaipu?",
        options: ["10 mil", "25 mil", "37 mil", "50 mil"],
        answer: "50 mil"
    },
    {
        question: "Qual foi o principal motivo que levou à criação do Sicoob Creditaipu?",
        options: ["Fomentar o comércio local", "Promover a educação financeira", "Atender às necessidades financeiras da comunidade", "Competir com os bancos tradicionais"],
        answer: "Atender às necessidades financeiras da comunidade"
    },
    {
        question: "O que é uma cooperativa de crédito?",
        options: ["Uma organização que concede empréstimos a juros altos", "Uma instituição financeira que visa lucro", "Uma associação de pessoas que se unem para atender às necessidades financeiras dos membros", "Um banco comum"],
        answer: "Uma associação de pessoas que se unem para atender às necessidades financeiras dos membros"
    },
    {
        question: "Qual é o principal objetivo de uma cooperativa de crédito?",
        options: ["Maximizar os lucros dos acionistas", "Oferecer serviços financeiros de alta complexidade", "Atender às necessidades financeiras dos membros", "Competir com outras instituições financeiras"],
        answer: "Atender às necessidades financeiras dos membros"
    },
    {
        question: "Qual é a principal diferença entre um cartão de crédito e um cartão de débito?",
        options: ["Um cartão de crédito permite gastar até um limite pré-aprovado, enquanto um cartão de débito retira fundos diretamente da conta bancária", "Um cartão de crédito não tem limite de gastos, enquanto um cartão de débito tem um limite diário", "Um cartão de débito oferece recompensas e cashback, enquanto um cartão de crédito não oferece benefícios", "Um cartão de crédito pode ser usado apenas para compras online, enquanto um cartão de débito é para compras físicas"],
        answer: "Um cartão de crédito permite gastar até um limite pré-aprovado, enquanto um cartão de débito retira fundos diretamente da conta bancária"
    },
    {
        question: "O que acontece com o dinheiro depositado em uma conta de poupança?",
        options: ["É investido em ações na bolsa de valores", "Fica guardado em uma caixa forte no banco", "É utilizado para empréstimos a outros clientes do banco", "É usado pelo banco para fazer empréstimos e o cliente recebe juros sobre o valor depositado"],
        answer: "É usado pelo banco para fazer empréstimos e o cliente recebe juros sobre o valor depositado"
    },
    {
        question: "O que é um consórcio?",
        options: ["Um tipo de empréstimo oferecido por instituições financeiras", "Um seguro para proteger contra riscos financeiros", "Um programa de investimento em ações na bolsa de valores", "Um grupo de pessoas que se reúnem para comprar bens ou serviços, pagando parcelas mensais, e um membro é contemplado por sorteio ou lance para receber o bem antes do final do pagamento"],
        answer: "Um grupo de pessoas que se reúnem para comprar bens ou serviços, pagando parcelas mensais, e um membro é contemplado por sorteio ou lance para receber o bem antes do final do pagamento"
    },
    {
        question: "O que é uma taxa de juros composta?",
        options: ["Uma taxa de juros fixa que é aplicada uma única vez", "Uma taxa de juros que varia constantemente ao longo do tempo", "Uma taxa de juros que é calculada sobre o capital inicial e também sobre os juros acumulados anteriormente", "Uma taxa de juros que se aplica apenas a empréstimos de longo prazo"],
        answer: "Uma taxa de juros que é calculada sobre o capital inicial e também sobre os juros acumulados anteriormente"
    },
    {
        question: "O que é o índice de inflação?",
        options: ["Uma medida da taxa de crescimento da economia", "O custo de vida médio de uma determinada área geográfica", "A taxa de juros média dos empréstimos bancários", "Uma medida que indica a variação de preços de bens e serviços ao longo do tempo"],
        answer: "Uma medida que indica a variação de preços de bens e serviços ao longo do tempo"
    },
    {
        question: "Qual é o benefício principal de ter um plano de aposentadoria privada?",
        options: ["Garantia de renda mensal", "Acesso a empréstimos de longo prazo", "Suplemento à aposentadoria pública", "Isenção de impostos sobre todos os ganhos"],
        answer: "Suplemento à aposentadoria pública"
    },
    {
        question: "O que torna uma cooperativa diferente de um banco tradicional?",
        options: ["As cooperativas são organizações sem fins lucrativos", "As cooperativas são de propriedade e operadas pelos próprios membros", "As cooperativas oferecem apenas empréstimos a longo prazo", "As cooperativas não oferecem serviços de poupança"],
        answer: "As cooperativas são de propriedade e operadas pelos próprios membros"
    },
    {
        question: "Quais são os principais objetivos das cooperativas?",
        options: ["Maximizar os lucros dos investidores", "Oferecer empréstimos a juros altos", "Atender às necessidades financeiras e sociais dos membros", "Competir com outras instituições financeiras"],
        answer: "Atender às necessidades financeiras e sociais dos membros"
    },
    {
        question: "Por que as cooperativas são consideradas organizações democráticas?",
        options: ["Porque são administradas por um único líder eleito", "Porque todos os membros têm voz e voto nas decisões da cooperativa", "Porque seguem uma estrutura hierárquica rígida", "Porque são controladas por acionistas externos"],
        answer: "Porque todos os membros têm voz e voto nas decisões da cooperativa"
    },
    {
        question: "Quais são os benefícios de ser membro de uma cooperativa?",
        options: ["Acesso a serviços financeiros a taxas mais altas", "Maior exposição a riscos financeiros", "Participação nos lucros e decisões da cooperativa", "Restrição ao acesso a empréstimos e financiamentos"],
        answer: "Participação nos lucros e decisões da cooperativa"
    },
    {
        question: "Qual é um dos principais princípios do cooperativismo?",
        options: ["Maximizar os lucros dos acionistas", "Coletar taxas de adesão elevadas dos membros", "Democracia e participação dos membros na tomada de decisões", "Restringir o acesso a serviços financeiros"],
        answer: "Democracia e participação dos membros na tomada de decisões"
    },
    {
        question: "Por que as cooperativas são frequentemente consideradas mais focadas nas necessidades dos membros?",
        options: ["Porque elas são subsidiadas pelo governo", "Porque não têm fins lucrativos e são de propriedade dos membros, que também são clientes", "Porque oferecem empréstimos com taxas de juros mais altas", "Porque não oferecem serviços de seguro"],
        answer: "Porque não têm fins lucrativos e são de propriedade dos membros, que também são clientes"
    },
    {
        question: "O que é a assembleia geral de uma cooperativa?",
        options: ["Um evento social anual para membros da cooperativa", "Um grupo de diretores da cooperativa", "Uma reunião onde os membros têm voz e voto nas decisões importantes da cooperativa", "Uma organização que supervisiona o governo da cooperativa"],
        answer: "Uma reunião onde os membros têm voz e voto nas decisões importantes da cooperativa"
    },
    {
        question: "Quem é o proprietário de uma cooperativa?",
        options: ["O governo federal", "Os acionistas da cooperativa", "Os diretores da cooperativa", "Os próprios membros da cooperativa"],
        answer: "Os próprios membros da cooperativa"
    },
    {
        question: "Como as cooperativas contribuem para o fortalecimento das comunidades locais?",
        options: ["Promovendo investimentos de alto risco", "Fornecendo serviços financeiros caros", "Investindo em projetos comunitários e apoiando iniciativas locais", "Ignorando as necessidades das comunidades"],
        answer: "Investindo em projetos comunitários e apoiando iniciativas locais"
    },
    {
        question: "Qual é o termo utilizado para despesas que não podem ser evitadas, como contas de água, luz e aluguel?",
        options: ["Despesas Fixas", "Despesas Variáveis", "Despesas Discricionárias", "Despesas Inesperadas"],
        answer: "Despesas Fixas"
    },
    {
        question: "O que significa o termo 'Diversificação de Investimentos'?",
        options: ["Colocar todos os ovos na mesma cesta", "Espalhar os investimentos em diferentes tipos de ativos", "Investir apenas em ações de uma única empresa", "Não investir em nada"],
        answer: "Espalhar os investimentos em diferentes tipos de ativos"
    },
    {
        question: "Qual é o principal objetivo de um fundo de emergência?",
        options: ["Financiar férias de luxo", "Cobrir despesas imprevistas e emergenciais", "Investir em ações de alto risco", "Comprar bens de alto valor"],
        answer: "Cobrir despesas imprevistas e emergenciais"
    },
    {
        question: "O que é o IPCA?",
        options: ["Índice que mede a variação de preços de produtos básicos", "Taxa de juros aplicada a empréstimos bancários", "Índice de confiança do consumidor", "Taxa de câmbio entre moedas estrangeiras"],
        answer: "Índice que mede a variação de preços de produtos básicos"
    },
    {
        question: "Qual é o termo para o dinheiro que você ganha após todas as despesas serem pagas?",
        options: ["Lucro", "Receita", "Débito", "Salário"],
        answer: "Lucro"
    },
    {
        question: "O que significa a sigla 'CDI' em finanças?",
        options: ["Certificado de Depósito Interbancário", "Certificado de Declaração de Investimento", "Conta de Débito Individual", "Conta de Depósito Integrado"],
        answer: "Certificado de Depósito Interbancário"
    },
    {
        question: "Qual é o objetivo principal de um fundo de investimento?",
        options: ["Multiplicar dinheiro rapidamente", "Diversificar riscos e aumentar ganhos", "Garantir lucro a curto prazo", "Proteger contra inflação"],
        answer: "Diversificar riscos e aumentar ganhos"
    },
    {
        question: "O que é um ativo de renda fixa?",
        options: ["Um investimento com retorno variável", "Um investimento com retorno previsível", "Um empréstimo para um amigo", "Um imóvel para aluguel"],
        answer: "Um investimento com retorno previsível"
    },
    {
        question: "O que significa a sigla 'PIB' em economia?",
        options: ["Produto Interno Bruto", "Perda de Investimento Básico", "Preço Interno de Bens", "Produção de Investimentos no Brasil"],
        answer: "Produto Interno Bruto"
    },
    {
        question: "O que é uma ação?",
        options: ["Uma parte de uma empresa que pode ser comprada", "Um empréstimo feito a uma empresa", "Um tipo de imóvel", "Uma ferramenta de trabalho"],
        answer: "Uma parte de uma empresa que pode ser comprada"
    },
    {
        question: "Qual é a definição de inflação?",
        options: ["Aumento geral dos preços de bens e serviços", "Redução geral dos preços de bens e serviços", "A taxa de juros aplicada em empréstimos bancários", "A taxa de câmbio entre moedas estrangeiras"],
        answer: "Aumento geral dos preços de bens e serviços"
    },
    {
        question: "O que é um CDB?",
        options: ["Certificado de Depósito Bancário", "Conta de Débito e Crédito Bancário", "Certificado de Declaração Bancária", "Conta de Depósito e Benefício"],
        answer: "Certificado de Depósito Bancário"
    },
    {
        question: "O que é um fundo de emergência?",
        options: ["Uma reserva de dinheiro para situações inesperadas", "Um investimento de alto risco", "Um tipo de seguro de vida", "Uma conta de poupança para férias"],
        answer: "Uma reserva de dinheiro para situações inesperadas"
    },
    {
        question: "O que é um ROI?",
        options: ["Retorno sobre o Investimento", "Rendimento Operacional Individual", "Reserva de Obrigações Inesperadas", "Rendimento Operacional de Investimento"],
        answer: "Retorno sobre o Investimento"
    },
];

// Função para embaralhar aleatoriamente um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Embaralhar as perguntas
shuffleArray(questions);

questions.forEach(question => {
    shuffleArray(question.options);
});

// Limitar o número de perguntas exibidas no quiz (máximo de 6 perguntas)
const maxQuestions = 6;
let selectedQuestions = questions.slice(0, maxQuestions); // Mude const para let

let currentQuestion = 0; // Acompanha a pergunta atual
let score = 0; // Acompanha a pontuação
let totalRespondido = 0; // Acompanha o total de perguntas respondidas
let timerInterval; // Variável para armazenar o intervalo do cronômetro

const questionElement = document.getElementById("question"); // Elemento que exibe a pergunta
const optionsElement = document.getElementById("options"); // Elemento que exibe as opções de resposta
const resultElement = document.getElementById("result"); // Elemento que exibe os resultados
const nextButton = document.getElementById("next-button"); // Botão "Próxima Pergunta"
const audioRespostaCorreta = document.getElementById("audio-resposta-correta"); // Áudio para respostas corretas
const audioRespostaErrada = document.getElementById("audio-resposta-errada"); // Áudio para respostas erradas
const restartButton = document.getElementById("restart-button");
const timerElement = document.getElementById("timer"); // Elemento que exibe o cronômetro
const audioContagemRegressiva = document.getElementById("audio-contagem-regressiva");
const tempoEsgotadoElement = document.getElementById("tempo-esgotado");
const audioFimDeJogo = document.getElementById("audio-fim-de-jogo");

function startTimer() {
    let timeLeft = 30; // Tempo inicial em segundos

    timerElement.textContent = `${timeLeft} s`;

    timerInterval = setInterval(() => {
        timeLeft--;

        if (timeLeft == 10) {
            audioContagemRegressiva.play(); // Inicie a reprodução do som nos últimos 10 segundos
        }

        if (timeLeft >= 0) {
            timerElement.textContent = `${timeLeft} s`;
        } else {
            clearInterval(timerInterval);
            timeOut();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function timeOut() {
    stopTimer(); // Para o cronômetro

    // Adicione o código para lidar com o tempo esgotado, como mostrar a resposta correta.
    // Você pode usar a função respostaErrada() ou implementar uma função específica para isso.
    disableAnswerButtons(); // Desabilita os botões de resposta
    tempoEsgotadoElement.classList.remove("invisible");
    tempoEsgotadoElement.classList.add("visible");

    nextButton.style.display = "block"; // Exibe o botão "Próxima Pergunta"
}

function disableAnswerButtons() {
    const answerButtons = document.querySelectorAll(".option");
    answerButtons.forEach(button => {
        button.disabled = true;
    });
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    totalRespondido = 0;

    // Embaralhe novamente as perguntas
    shuffleArray(questions);

    // Selecione as primeiras perguntas do novo conjunto
    selectedQuestions = questions.slice(0, maxQuestions); // Mude const para let

    // Oculte o botão de reinício
    restartButton.style.display = "none";

    resultElement.innerHTML = "";

    // Reinicie o quiz exibindo a primeira pergunta
    showQuestion();
}

// Exibe a próxima pergunta
function showQuestion() {
    startTimer(); // Inicia o cronômetro
    const question = selectedQuestions[currentQuestion];
    //questionElement.innerHTML = `Pergunta ${totalRespondido} de ${totalQuestions}:<br><br>${question.question}`;
    questionElement.innerHTML = `${question.question}`;
    
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option";
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

const totalQuestions = selectedQuestions.length;

// Verifica a resposta selecionada
function checkAnswer(selectedOption) {
    const question = selectedQuestions[currentQuestion];
    totalRespondido++; // Atualiza o totalRespondido
    if (selectedOption === question.answer) {
        respostaCorreta();
    } else {
        respostaErrada(question, selectedOption);
    }

    stopTimer(); // Para o cronômetro
    setTimeout(() => {
        nextButton.style.display = "block"; // Exiba o botão "Próxima Pergunta"
    }, 2000); // 2 segundos
}

// Ação quando a resposta é correta
function respostaCorreta() {
    score++; // Incrementa a pontuação
    audioContagemRegressiva.pause();
    audioContagemRegressiva.currentTime = 0; // Define o tempo de reprodução para 0 segundos (início)
    audioRespostaCorreta.play();
    //showResultMessage("Resposta correta!", "resposta-correta");

    // Adicione a classe resposta-correta ao botão
    optionsElement.querySelectorAll(".option").forEach(option => {
        if (option.textContent === selectedQuestions[currentQuestion].answer) {
            option.classList.add("resposta-correta");
        }
    });
}

// Ação quando a resposta é errada
function respostaErrada(question, selectedOption) {
    audioContagemRegressiva.pause();
    audioContagemRegressiva.currentTime = 0; // Define o tempo de reprodução para 0 segundos (início)
    audioRespostaErrada.play();
    //showResultMessage("Resposta incorreta. A resposta correta é: <br><br>" + question.answer, "resposta-incorreta");

    // Encontre o botão selecionado e defina o estilo para vermelho
    const optionButtons = optionsElement.getElementsByClassName("option");
    for (let i = 0; i < optionButtons.length; i++) {
        if (optionButtons[i].textContent === selectedOption) {
            optionButtons[i].classList.add("resposta-incorreta");
        }
        // Encontre o botão com a resposta correta e defina o estilo para verde
        if (optionButtons[i].textContent === question.answer) {
            optionButtons[i].classList.add("resposta-correta");
        }
    }
}

// Exibe uma mensagem de resultado
function showResultMessage(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const closePopupButton = document.getElementById("close-popup-button");

    popup.style.display = "block";
    popupMessage.innerHTML = message + `<br><br><br>Acertou ${score} de ${totalRespondido} respondido.`;

    closePopupButton.addEventListener("click", function closePopup() {
        console.log("closePopupButton");
        popup.style.display = "none";
        nextQuestion();
    
        // Remove o ouvinte de eventos após o primeiro clique
        closePopupButton.removeEventListener("click", closePopup);
    });
}

// Exibe a próxima pergunta
function nextQuestion() {
    resultElement.textContent = "";
    nextButton.style.display = "none";
    currentQuestion++; // Incrementa currentQuestion
    // Para tornar o elemento invisível:
    tempoEsgotadoElement.classList.add("invisible");
    // Para tornar o elemento visível novamente (caso necessário):
    tempoEsgotadoElement.classList.remove("visible");

    if (currentQuestion < selectedQuestions.length) {
        showQuestion();
    } else {
        quizConcluido();
    }
}

function quizConcluido() {
    audioFimDeJogo.play();
    resultElement.innerHTML = `Quiz concluído!<br><br>` + `Sua pontuação: ` + score + ` de ` + selectedQuestions.length;
    resultElement.classList.add("animate"); // Adicione a classe para animação
    questionElement.innerHTML = "";
    optionsElement.innerHTML = "";
    restartButton.style.display = "block"; // Exiba o botão de reinício
    // Não exiba o tempo restante
    timerElement.textContent = "";
    // Não exiba a imagem do relógio
    document.getElementById("imagem-relogio").style.display = "none";
}

restartButton.addEventListener("click", () => {
    // Ação a ser tomada ao clicar no botão de reinício (reiniciar o quiz)
    restartQuiz();
});

nextButton.addEventListener("click", nextQuestion);

// Exibe a primeira pergunta para iniciar o quiz
showQuestion();