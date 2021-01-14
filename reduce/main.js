// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

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

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
});
console.log(maisVelha);

// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//   acumulador += valor;
//   return acumulador;
// }, []);

// console.log(total);


