// (function () {
//   const elementos = [
//     {tag: 'p', texto: 'frase 1'},
//     {tag: 'div', texto: 'frase 2'},
//     {tag: 'footer', texto: 'frase 3'},
//     {tag: 'section', texto: 'frase 4'},
//   ];

//   const container = document.querySelector('.container');
//   let tagHtml= '';

//   for(let i = 0; i < elementos.length; i++){
//     let { tag, texto } = elementos[i];
//     tagHtml += `<${tag}>${texto}</${tag}>`;
//   }
//   container.innerHTML += `<div>${tagHtml}</div>`;
// }) () 

const elementos = [
  {tag: 'p', texto: 'frase 1'},
  {tag: 'div', texto: 'frase 2'},
  {tag: 'footer', texto: 'frase 3'},
  {tag: 'section', texto: 'frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);  
  
  // tagCriada.innerText = texto;
  // div.appendChild(tagCriada);
}

container.appendChild(div);



const array = [
  [0,1,2,3,4,5],
  [6,7,8,9,10,11],
  [12,13,14,15,16,17]
];
 
const novo_array = [];
 
for (let i = 0; i < array.length; i++) {
  const array_interno = array[i]
 
  // De 2 em 2
  for (let j = 0; j < array_interno.length; j += 2) {
    novo_array.push(array_interno[j])
  }
}
 
console.log(novo_array);


const array = [
  [0,1,2,3,4,5],
  [6,7,8,9,10,11],
  [12,13,14,15,16,17]
];
 
const novoArray = [];
const numeroDeElementosXEmX = 2;
 
for (let i = 0; i < array.length; i++) {
  const array_interno = array[i]
 
  // De 2 em 2
  for (let j = 0; j < numeroDeElementosXEmX; j++) {
    novoArray.push(array_interno[j])
  }
}
 
console.log(novoArray);


var novoArray = [];
    const numeroDeElementosXEmX = 2;
    var rodada = 0;
    for (let i = 0; i < array.length; i++) {
        const array_interno = array[i + rodada]
        // De 2 em 2
        for (let j = 0; j < numeroDeElementosXEmX; j++) {
        novoArray.push(array_interno[j + rodada])
        rodada += 2;
        }
    }


for(var k = 0; k < array.length; k+2) {
    var novoArray = [];
    const numeroDeElementosXEmX = 2;
 
    for (let i = 0; i < array.length; i++) {
        const array_interno = array[i + k]
        // De 2 em 2
        for (let j = 0; j < numeroDeElementosXEmX; j++) {
        novoArray.push(array_interno[j + k])
        }
    }
}


const array = [
  [0, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17]
];
 
// Número de elementos desejados (2x2, 3x3, etc...)
const numberOfElements = 2;
 
// Índice do array
let arrayIndex = 0;
// O novo array
const newArray = [];
 
while (array.some(item => item.length)) {
  // O array interno
  const innerArray = array[arrayIndex];
 
  if (!innerArray) {
    // Se não existir, voltamos ao início do laço
    arrayIndex = 0;
    continue;
  }
 
  // Pegamos o trecho desejado
  const itens = innerArray.splice(0, numberOfElements);
  if (itens.length) {
    // Se existir, esse trecho vai para o novo array
    newArray.push(...itens)
  }
 
  // Incrementamos o índice do array
  arrayIndex++;
}
 
console.log(newArray);