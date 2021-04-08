var numSecreto = parseInt(Math.random() * 10) + 1
var tentativas = 3

var situacao = ""
while (tentativas > 0){
  var chute = parseInt(prompt(situacao + tentativas + " tentativas restantes\nDigite um número entre 0 e 10:"))
  if (numSecreto == chute){
    alert("ACERTOU!!")
    break
  } else if (numSecreto > chute){
    situacao = "O número secreto é maior que " + chute + "\n\n"
  } else if (numSecreto < chute){
    situacao = "O número secreto é menor que " + chute + "\n\n"
  }
  tentativas -= 1
}

if (numSecreto != chute){
  alert("Acabaram-se as tentativas :\( \nO número secreto era " + numSecreto)
}