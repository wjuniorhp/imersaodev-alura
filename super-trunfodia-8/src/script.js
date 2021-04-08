console.clear();
var cartaWell = {
  nome: "Blaziken",
  imagem:
    "https://i.pinimg.com/originals/ec/c9/75/ecc9753e76806a3ea49105448f8242de.jpg",
  atributos: {
    ataque: 90,
    defesa: 30,
    velocidade: 100
  }
};
var cartaBet = {
  nome: "Totodile",
  imagem:
    "https://cdn.bulbagarden.net/upload/thumb/c/c5/Ash_Totodile.png/250px-Ash_Totodile.png",
  atributos: {
    ataque: 20,
    defesa: 45,
    velocidade: 10
  }
};
var cartaCarol = {
  nome: "Wanda",
  imagem:
    "https://decider.com/wp-content/uploads/2021/03/wandavision-9-scarlet-witch.jpg?quality=90&strip=all&w=618",
  atributos: {
    ataque: 100,
    defesa: 20,
    velocidade: 50
  }
};
var cartas = [cartaWell, cartaBet, cartaCarol];
var cartaMaquina;
var cartaJogador;

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
  cartaMaquina.dono = "maquina";

  cartaJogador = cartas[sortear(numeroCartaMaquina)];
  cartaJogador.dono = "jogador";
  console.log(
    "Carta da Máquina",
    cartaMaquina,
    "Carta do Jogador",
    cartaJogador
  );
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  // exibirOpcoes();
  exibirCarta(cartaJogador);
}

function exibirCarta(carta) {
  var divCarta = document.getElementById("carta-" + carta.dono);
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCarta.style.backgroundImage = `url(${carta.imagem})`;
  var nomeCarta = `<p class="carta-subtitle">${carta.nome}</p>`;

  var opcoesTexto = exibirAtributos(carta);

  divCarta.innerHTML = moldura + nomeCarta + opcoesTexto;
}

function exibirAtributos(carta) {
  var opcoesTexto = "<div id='opcoes' class='carta-status'>";
  if (carta.dono == "jogador") {
    var tag = ["<input type='radio'", "<br>"];
  } else {
    var tag = ["<p type='text'", "</p>"];
  }
  for (var atributo in carta.atributos) {
    opcoesTexto += `${tag[0]} name='atributo' value='${atributo}'> ${atributo} ${carta.atributos[atributo]} ${tag[1]}`;
  }
  opcoesTexto += "</div>";
  return opcoesTexto;
}
function atributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}
function jogar() {
  var divResultado = document.getElementById("resultado");
  var atributoJogador = cartaJogador.atributos[atributoSelecionado()];
  var atributoMaquina = cartaMaquina.atributos[atributoSelecionado()];

  var resultado = "<p class='resultado-final'>";
  if (atributoJogador > atributoMaquina) {
    resultado += "Você ganhou da Máquina!";
  } else if (atributoJogador < atributoMaquina) {
    resultado += "A Máquina ganhou!";
  } else {
    resultado += "Empate!";
  }
  resultado += "</p>";
  divResultado.innerHTML = resultado;
  exibirCarta(cartaMaquina);
}
