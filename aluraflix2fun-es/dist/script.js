function adicionarFilme() {
  var filmeFavorito = document.querySelector("#filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    alert("Filme Inválido!");
  }
  document.querySelector("#filme").value = "";
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector("#listaFilmes");
  var elementoFilme = "<img src=" + filme + ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}