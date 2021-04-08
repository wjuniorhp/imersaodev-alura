var valor1 = parseFloat(prompt("Digite o primeiro valor"))
var operacao = prompt("Qual a operação?\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão")
var valor2 = parseFloat(prompt("Digite o segundo valor"))

if (operacao==1){
  sinal = " + "
  var resultado = valor1 + valor2
} else if (operacao==2){
  sinal = " - "
  var resultado = valor1 - valor2
} else if (operacao==3){
  sinal = " * "
  var resultado = valor1 * valor2
} else if (operacao==4){
  sinal = " / "
  var resultado = valor1 / valor2
} else {
  document.write("<h2>OPERAÇÃO INVALIDA</h2>")
}

if (sinal){
  document.write("<h2>" + valor1 + sinal + valor2 + " = " + resultado + "</h2>")
}