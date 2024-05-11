# Descrição do problema:

Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial, e sua jornada será determinada pela lógica afiada que você possuir.

**Tarefa:** Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial e deve dar uma série de passos para atravessar a floresta até a caverna do dragão.

**Entrada:** 

- A posição inicial do herói na floresta (um número inteiro).
- O número total de passos que o herói deve dar (um número inteiro).

**Saída:**

- Imprima a posição final do herói após dar a quantidade de passos especificada.

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
      <td>2, 3</td>
      <td>Posicao final do heroi: 5</td>      
    </tr>
        <tr>
      <td>15, 3</td>
      <td>Posicao final do heroi: 18</td>      
    </tr>
    <tr>
      <td>10, 6</td>
      <td>Posicao final do heroi: 16</td>      
    </tr>
  </tbody>
  <tfoot></tfoot>
</table>

## Código em JavaScript:

```
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

//TODO: Calcule a posição final do herói:
function contarPassos(inicial, total){
  return inicial + total;
}

const posicaoFinal = contarPassos(posicaoInicial, totalPassos);

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);
```