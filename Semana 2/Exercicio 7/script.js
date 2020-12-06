function pegaData () {
    var valor  = document.getElementById("data-nascimento").value;
    var dataDeNascimento = new Date(valor)
    var dataAtual = Date.now()
    var diferenca = dataAtual - dataDeNascimento
    var idade = diferenca / 1000 / 60 / 60 / 24 / 365.25

    document.getElementById("sua-idade").innerHTML= "Sua idade é: "+ Math.floor(idade) +"";

   

    

  
  
    //console.log(diferenca)


    //79 988 014 00 02


}


    // ms => s => hr => dias => meses => anos   

    // TODO 1 - pegar elemento input date
    // TODO 2 - pegar valor preenchido no elemento
    // TODO 3 - Transformar esse valor, numa data
    // TODO 4 - Pegar data atual
    // TODO 5 - Calcular a diferença entre as datas
    // TODO 6 - Preencher idade no elemento id=idade