/*
Author: Marcelo Soares
File: poo-ataque.js
PlayFile: https://playcode.io/javascript // https://www.w3schools.com/tryit/trycompiler.asp?filename=demo_nodejs
*/

// Cria classe genérica que representa um herói
class heroiAventura {
    // definindo as propriedades do heroi
	constructor(nome, idade, tipo, ataque) {
        this.nome = nome; 
        this.idade = idade; 
        this.tipo = tipo; 
        this.ataque = ataque;
    }
    // criando método para mensagem de boas-vindas
    boasVindas(){
        console.log(`Olá ${this.nome}, seja bem-vindo(a)! Sua idade é ${this.idade} anos e seu heroi escolhido é do tipo ${this.tipo}`);
    }
    // criando método para imprimir tipo de ataque
    atacar() {
    	console.log(`O ${this.tipo} atacou usando ${this.ataque}.`);
    }
}

// Criando objetos do tipo heroiAventura
let heroi1 = new heroiAventura("João", 15, "Mago", "usou magia");
heroi1.boasVindas();
let heroi2 = new heroiAventura("Allana", 18, "Guerreiro", "usou espada");
heroi2.boasVindas();
let heroi3 = new heroiAventura("Carlos", 13, "Monge", "usou artes marciais");
heroi3.boasVindas();
let heroi4 = new heroiAventura("Esther", 16, "Ninja", "usou shuriken");
heroi4.boasVindas();

// Chamado o método de ataque
console.log("\n<------------------------------------------------------------------------------------------>\n");
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();