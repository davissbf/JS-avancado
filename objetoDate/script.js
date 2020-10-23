// const umDia = 60 * 60 * 24 *1000;
// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou  época unix
// const data = new Date(2019, 3, 14, 12, 22, 10, 1000); // a, m, d, h, M, s, ms

// const data = new Date(1602644022666);
// console.log('Dia: ', data.getDate());
// console.log('Mês: ', data.getMonth() + 1); // 0-11 jan = 0 dez = 11
// console.log('Ano: ', data.getFullYear());
// console.log('Hora: ', data.getHours());
// console.log('Min: ', data.getMinutes());
// console.log('Seg: ', data.getSeconds());
// console.log('ms: ', data.getMilliseconds());
// console.log('Dia semana: ', data.getDay()); // 0 - 6 dom = 0 sab = 6
// console.log(data.toString());
// console.log(Date.now());

// function zeroEsquerda(num){
//   return num >= 10 ? num : `0${num}`;
// }

// function formataData(data){
//   const dia = zeroEsquerda(data.getDate());
//   const mes = zeroEsquerda(data.getMonth());
//   const ano = zeroEsquerda(data.getFullYear());
//   const horas = zeroEsquerda(data.getHours());
//   const min = zeroEsquerda(data.getMinutes());
//   const seg = zeroEsquerda(data.getSeconds());

//   return `${dia}/${mes}/${ano} ${horas}:${min}:${seg}`
// }

// const data = new Date();
// const dataBrasil = formataData(data);
// console.log(dataBrasil);

// function Pessoas() {
//   this.nomes = [];
//   this.sobrenomes = [];
//   this.idades = [];
// }
 
// const obj1 = new Pessoas();
// obj1.nomes.push(...[ 'Pedro', 'Maria', 'João', 'Mariana' ]);
// obj1.sobrenomes.push(...[ 'Santana', 'Joaquina', 'Cardoso', 'Silva' ]);
// obj1.idades.push(...[ 22, 18, 25, 45 ]);

// console.log(obj1);

for(i = 0; i <= 500; i++) {
  console.log(`Letra ${i}`);
}
