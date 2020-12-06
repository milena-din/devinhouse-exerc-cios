function funcao1() {
  var x;
  var r = confirm ("Escolha um valor");
  if (r == true)
    {
      document.getElementById("demo").innerHTML = "Você pressionou OK!";
    }
else 
    {
      document.getElementById("demo").innerHTML = "Você pressionou Cancelar!";
    }
}