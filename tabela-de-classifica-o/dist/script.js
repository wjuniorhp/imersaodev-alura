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

function selecionarOutros(escolhido){
  var outros = []
  for (var i in jogadores) {
    if (parseInt(i) != escolhido){
      outros.push(parseInt(i))
    }
  }
  return outros
}
function calculaPontos(jogador) {
  var pontos = 3 * jogador.vitorias + jogador.empates;
  jogador.pontos = pontos
}
function exibirJogadores(jogadores) {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    jogador = jogadores[i]
    calculaPontos(jogador)
    html += "<tr><td>" + jogador.nome + "</td>";
    html += "<td>" + jogador.vitorias + "</td>";
    html += "<td>" + jogador.empates + "</td>";
    html += "<td>" + jogador.derrotas + "</td>";
    html += "<td>" + jogador.pontos + "</td>";
    html +="<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td>"
    html +="<td><button onClick='adicionarEmpate("+i+")'>Empate</button></td>"
    html +="<td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}
function adicionarVitoria(i){
  var jogador = jogadores[i]
  var outrosJogadores = selecionarOutros(i)
  for (var outro in outrosJogadores){
    adicionarDerrota(outrosJogadores[outro])
  }
  jogador.vitorias ++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}
function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas ++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}
function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates ++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}

exibirJogadores(jogadores);