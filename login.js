
var nome = "";


function validar() {

  nome = document.getElementById("login").value;

  if (nome == "") {
    alert("Por favor verifique se todos os dados foram preenchidos.");

    return;

  }

  else {
    alert("Seja bem vinde ao Restaurante Start!")
  }

}

function senha() {

  alert("Para recuperar a senha, entre em contato com o restaurante.");
}


function cadastreum() {

  window.open("https://www.facebook.com/", "_blank")
}

function cadastredois() {

  window.open("https://www.gmail.com", "_blank")
}

function cadastre3() {

  alert("Estamos em manutenção.");
}





