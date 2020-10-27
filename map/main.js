const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

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

const novoValor = array.map(valor => valor * 2);
console.log(novoValor);

const nome = pessoas.map(obj => console.log(obj.nome));

const chaveNome = pessoas.map(obj => ({idades: obj.idade}));
console.log(chaveNome);

const id = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});

console.log(pessoas);
console.log(id);




const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
});
console.log(maisVelha);
