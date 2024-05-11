/*
Author: Marcelo Soares
File: desafioHeroi_2.0.js
PlayFile: https://playcode.io/javascript
*/

// Cria uma função para atribuir o nível do herói de acordo com o XP
function nivelHeroi(xp) {
    var nivel;
    if (xp < 1000) {
      nivel = "Ferro";
    } else if (xp >= 1000 && xp <= 2000) {
      nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      nivel = "Prata";
    } else if (xp >= 6001 && xp <= 7000) {
      nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }
    return nivel;
  }
  
  // Cria uma função para exibir uma mensagem com o nome e o nível do herói
  function mensagemHeroi(nome, nivel) {
    console.log("O Herói de nome " + nome + " está no nível de " + nivel);
  }
  
  // Cria uma função main para início do código
  function main() {
    // Cria variáveis para armazenar o nome e a quantidade de experiência (XP) de um herói
    var nome;
    var xp;
  
    // Cria uma variável para controlar o laço de repetição
    var continuar = true;
  
    // Utiliza um do-while para que as variáveis nome e xp possam ser inputadas
    do {
      // Solicita ao usuário que digite o nome e o XP do herói
      nome = prompt("Digite o nome do herói:");
      xp = prompt("Digite a quantidade de experiência (XP) do herói:");
  
      // Converte o XP para um número inteiro
      xp = parseInt(xp);
  
      // Verifica se o nome e o XP são válidos
      if (nome && !isNaN(xp)) {
        // Chama a função para atribuir o nível do herói de acordo com o XP
        var nivel = nivelHeroi(xp);
  
        // Chama a função para exibir uma mensagem com o nome e o nível do herói
        mensagemHeroi(nome, nivel);
  
        // Pergunta ao usuário se deseja continuar ou não
        var resposta = prompt("Deseja continuar? (S/N)");
  
        // Verifica se a resposta é N ou n
        if (resposta == "N" || resposta == "n") {
          // Altera a variável para encerrar o laço de repetição
          continuar = false;
        }
      } else {
        // Exibe uma mensagem de erro
        console.log("Nome ou XP inválidos. Tente novamente.");
      }
    } while (continuar);
  }
  
  // Chama a função main para iniciar o programa
  main();
  