# Descrição

Você é um aventureiro em um mundo mágico cheio de perigos e monstros. Durante suas missões, você coleta diversos itens mágicos, cada um com seus próprios atributos e habilidades especiais. Agora, você está desenvolvendo um sistema aprimorado para gerenciar esses itens. Neste novo sistema, você pode criar diferentes tipos de itens mágicos, como armas, armaduras, poções, entre outros. Cada tipo de item terá atributos específicos e contribuirá de maneiras únicas para suas aventuras.

**Tarefa:** Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração o tipo de item.

**Entrada:**
Peça ao usuário para digitar o tipo do item mágico que deseja criar, o dano e a resistência

**Saída:**
Imprima o tipo do item, o dano, a resistência e o dano em combate.

Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado. Quando o tipo do item for igual a 'arma' deve-se multiplicar o dano por dois ```this.dano * 2``` e quando não for arma, é retornado no dano ```this.dano```.

**Exemplos:**
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

<table>
  <thead>
    <tr align="left">
      <th>Entrada</th>
      <th>Saída</th>
    </tr>
  </thead>
  <tbody align="left">
    <tr>
      <td>Espada 200 300</td>
      <td>Tipo: Espada Dano: 200 Resistencia: 300 Dano em combate: 200</td>      
    </tr>
        <tr>
      <td>Cajado 600 800</td>
      <td>Tipo: Cajado Dano: 600 Resistencia: 800 Dano em combate: 600</td>
    </tr>
    <tr>
      <td>Arco 900 500</td>
      <td>Tipo: Arco Dano: 900 Resistencia: 500 Dano em combate: 900</td>      
    </tr>
  </tbody>
  <tfoot></tfoot>
</table>

## Código em JavaScript:

```
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
//TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo; // tipo do item: arma ou escudo
    this.dano = dano; // dano causado ou evitado pelo item
    this.resistencia = resistencia; // resistência do item a danos externos
  }

  calcularDano() {
    return this.tipo === 'arma' ? this.dano * 2 : this.dano;
  }
}

// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

//TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// TODO: Imprima os atributos do item personalizado
print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);
```