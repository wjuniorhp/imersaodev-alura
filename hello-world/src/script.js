document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

function idadeAlert() {
  var nome = "Wellington";
  var idade = 27;

  idade = idade + 1;
  //alert(idade)

  //var idadeUser = parseInt(prompt("Quantos anos voce tem?"))
  //alert("Voce tem " + idadeUser + " anos!")

  var valorDolar = parseFloat(
    prompt("Qual o valor em dolar que você quer converter?")
  );
  var valorReal = valorDolar * 5.5;
  document.write("Valor em Reais: R$ " + valorReal.toFixed(2));
}
function testeDeLoopForIn() {
  var well = {
    nome: "Wellington",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
  };
  var carol = {
    nome: "Carol",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  };
  var jogadores = [well, carol];
  for (var i in jogadores) {
    console.log(jogadores[i]);
  }
}
function testeDeLoopForOf() {
  
  var well = {
    nome: "Wellington",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
  };
  var carol = {
    nome: "Carol",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  };
  var jogadores = [well, carol];
  for (var jogador of jogadores) {
    console.log(jogador);
  }
}
function aleatorio(){
  var numero=0
  while (numero<150){
    numero = Math.floor(Math.random() * 151)
    console.log(numero)
  }
}