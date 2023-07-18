var imagemAtual = 'Bb.jpg';

// Adicionar a classe "botao-nao-clicado" ao carregar a página
window.onload = function() {
    var botaoNao = document.getElementById('botao-nao');
    botaoNao.classList.add('botao-nao-clicado');
};

function mostrarMensagemSim() {
    alert("Sabia ♡");
}

function alterarImagem() {
    var imagem = document.getElementById('imagem');
    var botaoNao = document.getElementById('botao-nao');

    if (imagemAtual === 'Bb.jpg') {
        imagem.src = 'Aa.gif';
        
        
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var buttonWidth = botaoNao.offsetWidth;
        var buttonHeight = botaoNao.offsetHeight;

        var maxLeft = screenWidth - buttonWidth;
        var maxTop = screenHeight - buttonHeight;

        var newLeft = Math.floor(Math.random() * maxLeft);
        var newTop = Math.floor(Math.random() * maxTop);

        botaoNao.style.left = newLeft + 'px';
        botaoNao.style.top = newTop + 'px';
    }
    else {
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var buttonWidth = botaoNao.offsetWidth;
        var buttonHeight = botaoNao.offsetHeight;

        var maxLeft = screenWidth - buttonWidth;
        var maxTop = screenHeight - buttonHeight;

        var newLeft = Math.floor(Math.random() * maxLeft);
        var newTop = Math.floor(Math.random() * maxTop);

        // Adicionar pausa antes de alterar a classe do botão
        setTimeout(function() {
            botaoNao.style.left = newLeft + 'px';
            botaoNao.style.top = newTop + 'px';
        }, 10);
    }

    imagemAtual = imagem.src;
}
