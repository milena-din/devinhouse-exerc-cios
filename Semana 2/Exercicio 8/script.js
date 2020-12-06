function calcular (operacao) {
    var entrada01 = parseFloat(document.getElementById("entrada1").value);
    var entrada02 = parseFloat(document.getElementById("entrada2").value);
    var resultado = 0;

    if (operacao == "soma") {
        resultado = entrada01 + entrada02
    } 
    else if (operacao == "subtracao") {
        resultado = entrada01 - entrada02
    }


    document.getElementById("resultado").value=resultado
}

function soma() {
    calcular("soma");
}

function subtracao() {
    calcular("subtracao");
}
