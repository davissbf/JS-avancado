function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  // form.onsubmit = function(evento) {
  //   evento.preventDefault();
  //   alert(1);
  //   console.log('Seu dados foram enviados.');
  // };

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.altura
    });

  resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, seu peso: ${peso.value} e altura: ${altura.value}</p>`;

  };

  form.addEventListener('submit', recebeEventoForm);

};
meuEscopo();

// const inicio = 10;
// const fim  = 25;
 
// const soma = [1, 2];
// const resultado = [];
 
// let atual = inicio;
// let indice = 0;
// for (let i = 0; i <= fim - inicio; i++) {
   
//   resultado.push(atual);
//   atual = atual + soma[indice];
//   indice = indice === 0 ? 1 : 0;
// }
 
// function callbackFilter(valor) {
//     if(valor <= fim) {
//         return true;
//     }
//     else {
//         return false
//     }
// }
 
// const resultadoFinal = resultado.filter(callbackFilter)
 
// console.log(resultadoFinal);
