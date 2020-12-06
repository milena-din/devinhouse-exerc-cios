function atualizarRelogio () {
    var agora = new Date();
    var hora = agora.getHours();
    var minutos = agora.getMinutes();

    document.getElementById("relogio").innerHTML= hora + ":" + minutos
}
atualizarRelogio ()





















//Construa uma página HTML contendo um texto que
// informa o horário no momento de acesso, no formato “23:59” (HH:mm).

//Construa uma página HTML contendo um texto que informa o horário atual, no formato “23:59”
//e que atualize automaticamente o valor, sempre que mudar o horário.