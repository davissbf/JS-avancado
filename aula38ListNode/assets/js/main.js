// const paragrafos = document.querySelector('.paragrafo');
// const paragrafo = paragrafos.querySelectorAll('p');

// const estilos = getComputedStyle(document.body);
// const fundoParagrafo = estilos.backgroundColor;

// // for (let cor in paragrafo) {
// //   paragrafo[cor].style.backgroundColor = fundoParagrafo;
// //   paragrafo[cor].style.color = 'white';
// // }

// for(let p of paragrafo) {
//   p.style.backgroundColor = fundoParagrafo;
//   p.style.color = 'white';
// }

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("#####");

for (let i in array) {
  console.log(array[i]);
}


