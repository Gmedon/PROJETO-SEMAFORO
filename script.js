let time = [];
let verde = document.querySelector(".verde");
let amarelo = document.querySelector(".amarelo");
let vermelho = document.querySelector(".vermelho");
function colocaramarelo() {
  verde.style.backgroundColor = "white";
  amarelo.style.backgroundColor = "yellow";
  time[3] = setTimeout("colocarvermelho()", 2000);
}
function colocarvermelho() {
  amarelo.style.backgroundColor = "white";
  vermelho.style.backgroundColor = "red";
  time[2] = setTimeout("colocarverde()", 5000);
}
function colocarverde() {
  vermelho.style.backgroundColor = "white";
  verde.style.backgroundColor = "green";
}
function trocarcor() {
  time[1] = setTimeout("colocaramarelo()", 5000);
}

function iniciar() {
  verde.style.backgroundColor = "green";
  trocarcor();
  time[0] = setInterval("trocarcor()", 12000);
}
function desligar() {
  for (let i in time) {
    clearInterval(time[i]);
  }
  verde.style.backgroundColor = "white";
  amarelo.style.backgroundColor = "white";
  vermelho.style.backgroundColor = "white";
}
