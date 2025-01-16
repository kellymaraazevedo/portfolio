

    // Lidar com o envio do formulário
    document.getElementById("formMensagem").addEventListener("submit", function(event) {
        event.preventDefault();  // Impede o envio do formulário e recarregamento da página
    
        // Pega a mensagem do campo de texto
        const mensagem = document.getElementById("mensagem").value;

      
        // Exibe a confirmação na tela
        const mensagemSalvaDiv = document.getElementById("mensagemSalva");
        mensagemSalvaDiv.style.display = "block";
        
        // Limpa o campo de mensagem
        document.getElementById("mensagem").value = "";

        // Oculta a confirmação após 3 segundos
        setTimeout(function() {
            mensagemSalvaDiv.style.display = "none";
        }, 3000); // A confirmação desaparece após 3 segundos
    });
