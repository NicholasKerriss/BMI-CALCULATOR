/*-Primeio é necessário realizar uma manipulação de eventos, através do métodos DOM, precisamos pegar o botão com id="calcular" e associalo a um comano, que no caso será um click-*/

/*-Agora é necessário associar o click a uma função que desencadeara tal ação, a função se chamará "calcularIMC-*/
/*--como não queremos obter o resultado da função e encaminhar para outra parte do código, não usaremos o returno-*/

// Adiciona o evento de clique ao botão "Calcular"
document.getElementById("calcular").addEventListener("click", calcularIMC);
function calcularIMC() {
  // Obter os valores de peso e altura
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  // Calcular o IMC
  let imc = peso / (altura / 100) ** 2;

  // Obter o elemento de resultado
  let resultadoElemento = document.getElementById("resultado");

  // Atualizar o conteúdo do elemento de resultado
  resultadoElemento.textContent = "Seu IMC é: " + imc.toFixed(2);
}

// Função para calcular o IMC
// function calcularIMC() {
//   // Obter os valores de peso e altura
//   let peso = parseFloat(document.getElementById("peso").value);
//   let altura = parseFloat(document.getElementById("altura").value);

//   // Calcular o IMC
//   let imc = peso / (altura / 100) ** 2;

//   // Obter o elemento de resultado
//   let resultadoElemento = document.getElementById("resultado");

//   // Atualizar o valor do elemento de resultado
//   resultadoElemento.value = "Seu IMC é: " + imc.toFixed(2);
// }

function classificarIMC() {
  // Obter o valor do IMC calculado
  let imc = parseFloat(document.getElementById("resultado").value);

  // Variável para armazenar a classificação
  let classificacao;

  switch (true) {
    case imc < 18.5:
      classificacao = "Baixo Peso";
      break;
    case imc < 24.9:
      classificacao = "Peso Normal";
      break;
    case imc < 29.9:
      classificacao = "Sobrepeso";
      break;
    case imc < 34.9:
      classificacao = "Obesidade Grau I";
      break;
    case imc < 39.9:
      classificacao = "Obesidade Grau II";
      break;
    default:
      classificacao = "Obesidade Grau III";
      break;
  }

  // Atualizar o valor do elemento de classificação
  let classificacaoElemento = document.getElementById("classificacao");
  classificacaoElemento.textContent = "Classificação: " + classificacao;
}
