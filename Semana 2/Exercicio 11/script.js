function atualizarRelogio () {
    var agora = new Date();
    var hora = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    document.getElementById("relogio").innerHTML= hora + ":" + minutos + ":" + segundos;
}
setInterval(atualizarRelogio, 1000)
