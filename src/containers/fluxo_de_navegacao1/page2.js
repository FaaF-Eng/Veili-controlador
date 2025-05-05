console.log("JavaScript Funciona");

// const botao = document.getElementById("meuBotao");

// botao.addEventListener("click" , function(){
//     console.log("Meu Botão Funciona");
// });


let senhaDigitada = "";
const maxCaracteres = 4;
const campoSenha = document.getElementById("campoSenha");

// Seleciona todos os botões dentro da div grid-botoes
const botoes = document.querySelectorAll(".grid-botoes button");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const valor = botao.textContent;

    if (valor === "Anula") {
      senhaDigitada = "";
      campoSenha.textContent = "";
      return;
    }

    if (senhaDigitada.length < maxCaracteres && !isNaN(valor)) {
      senhaDigitada += "*";
      campoSenha.textContent = senhaDigitada;
    }
  });
});
