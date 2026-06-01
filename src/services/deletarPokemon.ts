import inquirer from "inquirer";
import { lerPokedex } from "../utils/lerPokedex";
import { apagarPokemon } from "../utils/apagarPokemon";

async function deletarPokemon() {
  const pokedex = await lerPokedex();

  if (!pokedex || pokedex.length === 0) {
    console.log("[AVISO] A pokédex está vazia");
    return true;
  }

  const pokemonDeletar = await inquirer.prompt([
    {
      type: "select",
      name: "deletar",
      message: "Deseja deletar o pokémon pelo nome ou id?",
      choices: ["Nome", "Id"],
    },
  ]);

  if (pokemonDeletar.deletar === "Nome") {
    const nomeRecebido = await inquirer.prompt([
      { type: "input", name: "nome", message: "Digite o nome do pokemón:" },
    ]);

    const deletarNome = nomeRecebido.nome;

    const index = pokedex.findIndex((pokemon) => {
      return pokemon.name.toLowerCase() === deletarNome.toLowerCase();
    });

    await apagarPokemon(pokedex, index);
  }

  if (pokemonDeletar.deletar === "Id") {
    const idRecebido = await inquirer.prompt([
      { type: "input", name: "id", message: "Digite o id do pokemón:" },
    ]);

    const deletarId = Number(idRecebido.id);

    const index = pokedex.findIndex((pokemon) => {
      return pokemon.id === deletarId;
    });

    await apagarPokemon(pokedex, index);
  }
}

export { deletarPokemon };
