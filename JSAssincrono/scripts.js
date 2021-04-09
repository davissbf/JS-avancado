// function somar(a, b){
//   const soma = a + b;

//   if (soma % 2 === 0){
//       callbackSucesso();
//   } else {
//       callbackError(soma);
//   }
// }

// function callbackSucesso(){
//   console.log('operação foi concluída com sucesso e que o número somado é par.');
// }

// function callbackError(error){
//   console.log(`operação falhou, o número é impar ${error}`);
// }

// somar(2, 9);

function soma (a, b){
  let p = new Promise((resolve, reject) => {
    const soma = a + b;

    if (soma % 2 === 0) return resolve('operação foi concluída com sucesso, o número somado é par.');
    return reject(`operação falhou, o número é impar ${soma}`);
  });

  p.then((message) => {
    console.log(message);
  }).catch((err) => {
    console.log(err);
  })
}

soma(10, 5);
