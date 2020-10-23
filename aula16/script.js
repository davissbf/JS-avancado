const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>Seu número é do tipo inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}.</p></p>`;

// const array = [1, 2, 3, 4, 5];
// array.pop(6);
// array[0] = 1024;
// console.log(array); // [ 1024, 2, 3, 4 ]

// const array = [1, 2, 3, 4, 5];
// array = 'Legal'; // Assignment to constant variable.
