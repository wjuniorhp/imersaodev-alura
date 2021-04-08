console.clear();
const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran F",
  "Nidorina",
  "Nidoqueen",
  "Nidoran M",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch'd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew"
];
var pokemonsQueFaltam = Array.from(pokemons);
var pokemonsAcertados = [];

var pokemon = escolherPokemon();
mostrarSprites()

function dexNo(nome) {
  return pokemons.indexOf(nome)
}
function imageUrl(i) {
  if (pokemons[i] == "Nidoran M") {
    var nomeUrl = "Nidoran_M";
  } else if (pokemons[i] == "Nidoran F") {
    var nomeUrl = "Nidoran_F";
  } else if (pokemons[i] == "Farfetch'd") {
    var nomeUrl = "Farfetchd";
  } else if (pokemons[i] == "Mr. Mime") {
    var nomeUrl = "MrMime";
  } else {
    var nomeUrl = pokemons[i];
  }
  return (`http://static.pokemonpets.com/images/monsters-images-300-300/${i+1}-${nomeUrl}.png`);
}
function checkEnter(e) {
  var key = e.keyCode || e.which;
  if (key == 13) {
    document.getElementById("enviar").click();
  }
}
function writeInId(id, string) {
  document.getElementById(id).innerHTML = string;
}
function mostrarSprites() {
  var razaoDeAcertados = `<p>
      ${pokemonsAcertados.length}/${pokemons.length}
      </p>`;
  var sprites = "";
  
  for (var poke of pokemons) {
    if (pokemonsAcertados.includes(poke)) {
      sprites += `<img class='sprite' 
        style='filter: drop-shadow(0 0 2px black);' 
        src=${imageUrl(dexNo(poke))}>`;
    } else {
      sprites += `<img class='sprite hide-pokemon' 
        src=${imageUrl(dexNo(poke))}>`;
    }
  }
  writeInId("acertados", razaoDeAcertados + sprites);
}

function mostrarPokemon(i) {
  writeInId(
    "pokemon-name-box",
    `<h1 class="pokemon-name">
      #${(i+1).toString().padStart(3, "0")} - ${pokemons[i]}
      </h1>`);

  writeInId("pokemon-artwork", "<img src=" + imageUrl(i) + ">");
}
function esconderPokemon(i) {
  writeInId("pokemon-name-box", "<h1 class='pokemon-name'># ??? - ??????</h1>");

  writeInId(
    "pokemon-artwork",
    "<img src=" + imageUrl(i) + "  class='hide-pokemon'>"
  );

  writeInId(
    "form",
    "<input type='text' id='campo' onkeypress='checkEnter(event)' placeholder='Nome deste pokemon'><br><br>" +
      "<button id='enviar' onClick='getName()'>Enviar</button>"
  );
  document.getElementById("campo").select();
}
function escolherPokemon() {
  numero = Math.floor(Math.random() * pokemonsQueFaltam.length);
  numero = dexNo(pokemonsQueFaltam[numero]);
  esconderPokemon(numero);
  return pokemons[numero];
}

function checarResposta(chute) {
  let i = dexNo(pokemon);
  if (pokemon.toLowerCase() == chute.toLowerCase()) {
    acertou(i);
  } else {
    errou(i);
  }
}
function acertou(i) {
  writeInId("form", "<h1>Você acertou!<br>👏👏👏👏</h1>");
  mostrarPokemon(i);
  pokemonsQueFaltam.splice(pokemonsQueFaltam.indexOf(pokemons[i]), 1);
  pokemonsAcertados.push(pokemons[i]);
  
  mostrarSprites()
  console.log(pokemonsQueFaltam);
  console.log(pokemonsAcertados);
  
  if (pokemonsQueFaltam.length == 0){
      setTimeout(() => {
        writeInId('pokemon-name-box', "<h1 class='pokemon-name'>PARABÉNS!<br>Você acertou todos!</h1>");
        writeInId('pokemon-artwork',`<img src='https://i.ytimg.com/vi/ejylEVenw68/hqdefault.jpg'>`)
    }, 4000);
  } else {
      setTimeout(() => {
      pokemon = escolherPokemon();
    }, 4000);
  }
  
}
function errou(i) {
  writeInId(
    "form",
    "<h1>Você errou :(<br>O pokemon era " + pokemons[i] + "</h1>"
  );
  mostrarPokemon(i);
  setTimeout(() => {
    pokemon = escolherPokemon();
  }, 3000);
}

function getName() {
  var campo = document.querySelector("#campo");
  var chute = campo.value;
  campo.value = "";
  checarResposta(chute);
}
