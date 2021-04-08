console.clear();
var cartaWell = {
  nome: "Blaziken",
  atributos: {
    ataque: 90,
    defesa: 30,
    velocidade: 100
  }
};
var cartaBet = {
  nome: "Totodile",
  atributos: {
    ataque: 20,
    defesa: 45,
    velocidade: 10
  }
};
var cartaCarol = {
  nome: "Wanda",
  atributos: {
    ataque: 100,
    defesa: 20,
    velocidade: 50
  }
};
var cartas = [cartaWell, cartaBet, cartaCarol];
var cartaMaquina
var cartaJogador

function sortear(exclude = false) {
  if (exclude == false && typeof exclude == "boolean") {
    return parseInt(Math.random() * cartas.length);
  } else {
    var numero = parseInt(Math.random() * cartas.length);
    while (numero == exclude) {
      numero = sortear();
    }
    return numero;
  }
}
function sortearCarta() {
  var numeroCartaMaquina = sortear();
  cartaMaquina = cartas[numeroCartaMaquina];

  cartaJogador = cartas[sortear(numeroCartaMaquina)];
  console.log(
    "Carta da Máquina",
    cartaMaquina,
    "Carta do Jogador",
    cartaJogador
  );
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = ""

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='"+atributo+"'>" + atributo + ": " + cartaJogador.atributos[atributo]
  }
  opcoes.innerHTML = opcoesTexto
}
function atributoSelecionado(){
  var radioAtributo = document.getElementsByName("atributo")
  for (var i=0; i<radioAtributo.length;i++){
    if (radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }
}
function jogar(){
  var atributoJogador = cartaJogador.atributos[atributoSelecionado()]
  var atributoMaquina = cartaMaquina.atributos[atributoSelecionado()]
  
  if (atributoJogador > atributoMaquina){
    alert("Você ganhou da Máquina!")
  } else if (atributoJogador < atributoMaquina){
    alert("A Máquina ganhou!")
  } else{
    alert("Empate!")
  }
}