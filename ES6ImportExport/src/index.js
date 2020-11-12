import Pessoa from './modulo1';
import pessoa, { nome, sobrenome, idade, soma } from './modulo1';

const p1 = new Pessoa("davi", "souza");
console.log(p1);
console.log(nome, sobrenome, idade, soma(8, 25));
