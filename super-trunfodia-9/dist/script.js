console.clear();
{
  var cartaWell = {
    nome: "Blaziken",
    imagem:
      "https://i.pinimg.com/originals/ec/c9/75/ecc9753e76806a3ea49105448f8242de.jpg",
    atributos: {
      ataque: 90,
      defesa: 30,
      magia: 30
    }
  };
  var cartaBet = {
    nome: "Totodile",
    imagem:
      "https://cdn.bulbagarden.net/upload/thumb/c/c5/Ash_Totodile.png/250px-Ash_Totodile.png",
    atributos: {
      ataque: 20,
      defesa: 45,
      magia: 40
    }
  };
  var cartaCarol = {
    nome: "Wanda",
    imagem:
      "https://decider.com/wp-content/uploads/2021/03/wandavision-9-scarlet-witch.jpg?quality=90&strip=all&w=618",
    atributos: {
      ataque: 10,
      defesa: 20,
      magia: 100
    }
  };
  var cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem:
      "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
      ataque: 80,
      defesa: 60,
      magia: 90
    }
  };
  var cartaRafa = {
    nome: "Bulbasauro",
    imagem:
      "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
      ataque: 70,
      defesa: 65,
      magia: 85
    }
  };
  var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem:
      "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90
    }
  };
  var cartaLol = {
    nome: "Caitlyn",
    imagem:
      "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
      ataque: 95,
      defesa: 40,
      magia: 10
    }
  };
  var cartaNaruto = {
    nome: "Naruto",
    imagem:
      "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
      ataque: 80,
      defesa: 60,
      magia: 100
    }
  };
  var cartaHarry = {
    nome: "Harry Potter",
    imagem:
      "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
      ataque: 70,
      defesa: 50,
      magia: 95
    }
  };
  var cartaBatman = {
    nome: "Batman",
    imagem:
      "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
      ataque: 95,
      defesa: 70,
      magia: 0
    }
  };
  var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem:
      "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
      ataque: 90,
      defesa: 80,
      magia: 0
    }
  };
}
var cartas = [
  cartaWell,
  cartaBet,
  cartaCarol,
  cartaPaulo,
  cartaRafa,
  cartaGui,
  cartaLol,
  cartaNaruto,
  cartaHarry,
  cartaBatman,
  cartaMarvel
];
var cartaMaquina, cartaJogador;
var pontosJogador = 0;
var pontosMaquina = 0;
atualizarPlacar()
atualizarDeck()
hideShow('btnJogar')
hideShow('btnProximaRodada')

function hideShow(div){
  var x = document.getElementById(div);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function atributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
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
function exibirCarta(carta) {
  var divCarta = document.getElementById("carta-" + carta.dono);
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCarta.style.backgroundImage = `url(${carta.imagem})`;
  var nomeCarta = `<p class="carta-subtitle">${carta.nome}</p>`;

  var opcoesTexto = exibirAtributos(carta);

  divCarta.innerHTML = moldura + nomeCarta + opcoesTexto;
  
  document.getElementById('cartas').scrollIntoView()
}

function atualizarPlacar(){
  var divPlacar = document.getElementById("placar")
  var placar = `Jogador ${pontosJogador} X ${pontosMaquina} Máquina`
  divPlacar.innerHTML = placar
}
function atualizarDeck(){
  var divQtdCartas = document.getElementById('quantidade-cartas')
  
  divQtdCartas.innerHTML = "Quantidade de cartas no Jogo: " + cartas.length
}

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
  cartas.splice(numeroCartaMaquina,1)
  
  var numeroCartaJogador = sortear()
  cartaJogador = cartas[numeroCartaJogador];
  cartaJogador.dono = "jogador";
  cartas.splice(numeroCartaJogador,1)
  
  // document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  hideShow("btnSortear")
  hideShow('btnJogar')
  atualizarDeck()
  exibirCarta(cartaJogador);
}

function jogar() {
  var divResultado = document.getElementById("resultado");
  var atributoJogador = cartaJogador.atributos[atributoSelecionado()];
  var atributoMaquina = cartaMaquina.atributos[atributoSelecionado()];

  var resultado = "<p class='resultado-final'>";
  if (atributoJogador > atributoMaquina) {
    resultado += "Você ganhou da Máquina!";
    pontosJogador++
  } else if (atributoJogador < atributoMaquina) {
    resultado += "A Máquina ganhou!";
    pontosMaquina++
  } else {
    resultado += "Empate!";
  }
  
  exibirCarta(cartaMaquina);
  atualizarPlacar()
  if (cartas.length<=1){
    alert("Fim de Jogo")
    resultado = "<p class='resultado-final'>"
    if (pontosJogador>pontosMaquina){
      resultado += "Venceu!"
    } else if (pontosJogador<pontosMaquina) {
      resultado += "Perdeu!"
    } else {
      resultado += "Empatou!"
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
    hideShow('escolherAtributo')
    hideShow('btnProximaRodada')
  }
  hideShow('btnJogar')
  resultado += "</p>";
  divResultado.innerHTML = resultado;
}
function proximaRodada(){
  document.getElementById('cartas').innerHTML = `
      <div id="carta-jogador" class="carta"></div>
      <div id="carta-maquina" class="carta"></div>`
  document.getElementById('resultado').innerHTML = ""
  hideShow('btnSortear')
  hideShow('btnProximaRodada')
  document.getElementById('btnSortear').focus()
}