// 1# const array = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = array.filter(valor => valor > 10);
// console.log(numerosFiltrados);

// for(let i = 0; i < array.length; i++) {
//   if(array[i] > 10){
//     console.log(array[i]);
//   }
// }

// 2#

const pessoas = [
  { nome: 'Davi', idade: 21 },
  { nome: 'Lucas', idade: 23 },
  { nome: 'Marcelo', idade: 50 },
  { nome: 'Elizabete', idade: 52 },
  { nome: 'Pedro', idade: 29 },
  { nome: 'Maria', idade: 29 },
  { nome: 'Rosangela', idade: 29 },
  { nome: 'Akila', idade: 29 },
];

const nomes = pessoas.filter(obj => obj.nome.length >= 5);
console.log(nomes);

const idades = pessoas.filter(obj => obj.idade > 50);
console.log(idades);

const nomesComA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomesComA);

