function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} está ${assunto}`;
    },
    altura: altura,
    peso: peso,
    imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Davi', 'Souza', 1.90, 90);
console.log(p1.imc());

