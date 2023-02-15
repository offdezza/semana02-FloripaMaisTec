const mensagem = document.getElementById("botaoInscricao");

alert(
  "Esse é apenas um projeto do curso de FullStack do programa Floripa Mais Tec!"
);

/*
var nome = prompt("Informe seu nome: ");
var idade = parseInt(prompt("Qual a sua idade, " + nome + "?"));
var cidade = prompt("Informe a cidade onde você mora: ");
alert("Bem-vindo(a) ao meu projeto, " + nome + "! :)");

console.log("Dados do visitante:");
console.log(nome);
console.log(idade);
console.log(cidade); */

/*
var sobrenome = prompt("Informe seu sobrenome:");
var nome = prompt("Informe seu nome:");
alert("Bem-vindo(a) ao meu projeto, " + nome + " " + sobrenome + " :)");
*/
function mensagemInscricao() {
  var resposta = prompt("Deseja enviar sua incrição? [S/N]");
  if (resposta == "S") {
    alert("Inscrição enviada! :)");
  } else if (resposta == "N") {
    alert("A inscrição NÃO foi enviada!");
  } else {
    alert("Resposta inválida.\nResponda com S para 'sim' ou N para 'não'.");
  }
}

