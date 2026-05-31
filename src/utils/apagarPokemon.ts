import inquirer from "inquirer";
import { writeFile } from "node:fs/promises";
import { Pokemon } from "../models/pokemon";

async function apagarPokemon(pokemons: Pokemon[], index: number) {
  if (index === -1) {
    console.log("Pokémon não encontrado");
    return;
  }
  console.log("Pokémon encontrado");
  const confirmar = await inquirer.prompt([
    {
      type: "select",
      name: "apagar",
      message: `Deseja apagar o ${pokemons[index].name}?`,
      choices: ["Sim", "Não"],
    },
  ]);
  if (confirmar.apagar === "Sim") {
    pokemons.splice(index, 1);

    await writeFile("./pokedex.json", JSON.stringify(pokemons, null, 2), {
      encoding: "utf-8",
    });
    console.log("Pokémon removido com sucesso");
  }
  if (confirmar.apagar === "Não"){
	console.log("O pokémon não foi removido")
  }
}

export { apagarPokemon };
