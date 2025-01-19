

    
    document.getElementById("formMensagem").addEventListener("submit", function(event) {
        event.preventDefault();  
    
        
        const mensagem = document.getElementById("mensagem").value;

      
        
        const mensagemSalvaDiv = document.getElementById("mensagemSalva");
        mensagemSalvaDiv.style.display = "block";
        
        
        document.getElementById("mensagem").value = "";

        
        setTimeout(function() {
            mensagemSalvaDiv.style.display = "none";
        }, 3000); 
    });
