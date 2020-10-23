// exercício 01
// function getMaxNumber(x, y) {
//   return Math.max(x, y);
// }

// const num1 = 654;
// const num2 = 987;

// const numeros = getMaxNumber(num1, num2);
// console.log(`O maior número entre ${num1} e ${num2} é: ${numeros}`);

// exercício 02
// const ePaisagem = (largura, altura) => largura > altura ? 'Paisagem' : 'Não é';
// console.log(ePaisagem(2000, 1500));

// exercício 03

function fizBuzz(x) {
  if(typeof x !== 'number') return x;
  if(x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
  if(x % 3 === 0) return 'Fizz';
  if(x % 5 === 0) return 'Buzz';
  return x;
}

for (let i = 0; i <= 100; i++) {
  console.group(i, fizBuzz(i));
}