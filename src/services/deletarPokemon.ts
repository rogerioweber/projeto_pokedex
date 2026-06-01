import inquirer from "inquirer";
import { writeFile } from "node:fs/promises";
import { lerPokedex } from "./lerPokedex";
import { voltarMenu } from "../utils/voltarMenu";
import { apagarPokemon } from "../utils/apagarPokemon";

async function deletarPokemon() {
  const pokemonDeletar = await inquirer.prompt([
    {
      type: "select",
      name: "deletar",
      message: "Deseja deletar o pokémon pelo nome ou id?",
      choices: ["Nome", "Id"],
    },
  ]);

  const pokedex = await lerPokedex();

  if (!pokedex || pokedex.length === 0) {
    console.log("A pokédex está vazia");
    await voltarMenu();
    return true;
  }

  if (pokemonDeletar.deletar === "Nome") {
    const nomeRecebido = await inquirer.prompt([
      { type: "input", name: "nome", message: "Digite o nome do pokemón:" },
    ]);
    const valor = nomeRecebido.nome;

    const index = pokedex?.findIndex((pokemon) => {
      return pokemon.name.toLowerCase() === valor.toLowerCase();
    });
    await apagarPokemon(pokedex, index);
  }

  if (pokemonDeletar.deletar === "Id") {
    const idRecebido = await inquirer.prompt([
      { type: "input", name: "id", message: "Digite o id do pokemón:" },
    ]);
    const valor = Number(idRecebido.id);

    const index = pokedex?.findIndex((pokemon) => {
      return pokemon.id === valor;
    });

    await apagarPokemon(pokedex, index);
  }
}

export { deletarPokemon };
