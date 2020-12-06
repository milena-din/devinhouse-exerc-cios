function validarCampo() {
    var entrada = parseInt(document.getElementById("entrada").value);
    var resto = entrada % 2   
    var numeroEhPar = resto == 0
    if (numeroEhPar){
         document.getElementById("resultado").innerHTML = "O número digitado é: PAR"
             
    }else {
        document.getElementById("resultado").innerHTML = "O número digitado é: ÍMPAR"
    }
}





