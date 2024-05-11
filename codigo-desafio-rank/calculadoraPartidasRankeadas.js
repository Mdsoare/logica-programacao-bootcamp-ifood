/*
Author: Marcelo Soares
File: calculadoraPartidasRankeadas.js
PlayFile: https://playcode.io/javascript
*/

// função que retorna o saldo das partidas
function calcularRank(vitoria, derrota){
    return vitoria - derrota;
}

// função que retorna o Rank
function rank(saldo){
    if (saldo < 10 && saldo >= 0) {
        return "Ferro";
    }else if (saldo > 10 && saldo <= 20){
        return "Bronze";
    }else if (saldo > 20 && saldo <= 50){
        return "Prata";
    }else if (saldo > 50 && saldo <= 80){
        return "Ouro";
    }else if (saldo > 80 && saldo <= 90){
        return "Diamante";
    }else if (saldo > 90 && saldo <= 100){
        return "Lendario";
    }else if (saldo >= 101){
        return "Imortal";
    }else {
        return undefined;
    }
}

// função principal
function main(){
  saldo = calcularRank(183,57);
  nivel = rank(saldo);
  console.log(`O Heroi tem saldo ** ${saldo} ** e esta no nivel ** ${nivel} **`)
}

// iniciando código
main()