function criaObjeto(nome, idade, altura){
  return { nome, idade, altura };
};

const pessoa1 = criaObjeto('Davi Souza', 21, 1.90);
const pessoa2 = criaObjeto('Ane', 20, 1.60);
const pessoa3 = criaObjeto('fulano', 45, 1.86);

console.log(pessoa1.nome,pessoa2.idade, pessoa3);

/**
 * Primitivos (imutáveis) - strings, number, boolean, undefined,
 * null (bigint, symbol) - valores copiados
 *
 * Referência (mutável) - array, object, function - Passados por Referência
 */


let num1 = 2; //O valor "2" está sendo armazenado na memória do nosso computador, no endereço num1 ou 0000xf
let num2 = num1; //o valor "2" é copiado do enderço 0000xf para o endereço de num2, por exemplo, 0x000F

num1 = 6;

console.log('num2:', num2);

//0000xff
const a = {
  nome: 'davi',
  sobrenome: 'souza'
}

const b = {...a}; //0000xff

a.nome = 'Lucas';

console.log('b:', b);
console.log('a:', a);

const lista1 = [1,2,3,4]; //o valor [1,2,3,4] é armazenado no endereço de lista1, por exemplo, 0xFFFF
const lista2 = lista1; //informa para lista2 em 0x000F que ela deve usar os valores que estão no endereço 0x000F, portanto, uma mesma lista
const lista3 = [... lista1]; //copia os valores de lista1 para lista3, gerando uma nova lista
