# Descrição

No mundo dos jogos Pokémon, os treinadores começam sua jornada escolhendo um dos três Pokémons iniciais: Bulbasaur, Charmander e Mewtwo. Cada treinador escolhe um dos quatro pokemons. 


**Tarefa:** Seu desafio é criar uma solução que permita ao jogador escolher um dos Pokémons iniciais e exibir uma mensagem de boas-vindas e o Pokémon escolhido.

**Entrada:**
Você receberá um número inteiro que representa a escolha do treinador: 1 para Bulbasaur, 2 para Charmander, 4 Pikachu e 5 para Mewtwo.

**Saída:**
A saída deve ser uma mensagem de boas-vindas que inclua o nome do Pokémon escolhido.

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
      <td>Escolha o seu Pokemon: 1</td>
      <td>Voce escolheu o Bulbasaur como seu Pokemon inicial.</td>      
    </tr>
        <tr>
      <td>Escolha o seu Pokemon: 2</td>
      <td>Voce escolheu o Charmander como seu Pokemon inicial.</td>      
    </tr>
    <tr>
      <td>Escolha o seu Pokemon: 4</td>
      <td>Voce escolheu o Pikachu como seu Pokemon inicial.</td>      
    </tr>
    <tr>
      <td>Escolha o seu Pokemon: 5</td>
      <td>Voce escolheu o Mewtwocomo seu Pokemon inicial.</td>      
    </tr>
  </tbody>
  <tfoot></tfoot>
</table>

## Código em JavaScript:

```
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido; 

//TODO: Implemente as condições necessárias para a solução do desafio. Utilize a tabela de exemplos para identificar a escolha do treinador:
if ( escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if ( escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if ( escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else{
    pokemonEscolhido = "Mewtwo";
}

//Imprime o Pokémon escolhido:
if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}
```