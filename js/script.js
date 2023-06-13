/*-Primeio é necessário realizar uma manipulação de eventos, através do métodos DOM, precisamos pegar o botão com id="calcular" e associalo a um comano, que no caso será um click-*/

/*-Agora é necessário associar o click a uma função que desencadeara tal ação, a função se chamará "calcularIMC-*/
/*--como não queremos obter o resultado da função e encaminhar para outra parte do código, não usaremos o returno-*/

// Adiciona o evento de clique ao botão "Calcular"
document.getElementById("calcular").addEventListener("click", calcularIMC);

// Função para calcular o IMC
function calcularIMC() {
  // Obter os valores de peso e altura
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);

  // Calcular o IMC
  var imc = peso / (altura / 100) ** 2;

  // Obter o elemento de resultado
  var resultadoElemento = document.getElementById("resultado");

  // Atualizar o valor do elemento de resultado
  resultadoElemento.value = "Seu IMC é: " + imc.toFixed(2);
}
