import { writeFile } from "node:fs/promises";

import inquirer from "inquirer";

import { Pokemon } from "../models/pokemon";

async function apagarPokemon(pokedex: Pokemon[], index: number) {
  try {
    if (index === -1) {
      console.log("[AVISO] Pokémon não encontrado");
      return true;
    }

    console.log("[OK] Pokémon encontrado");

    const confirmar = await inquirer.prompt([
      {
        type: "select",
        name: "apagar",
        message: `Deseja apagar o ${pokedex[index].nome}?`,
        choices: ["Sim", "Não"],
      },
    ]);

    if (confirmar.apagar === "Sim") {
      pokedex.splice(index, 1);

      await writeFile("./pokedex.json", JSON.stringify(pokedex, null, 2), {
        encoding: "utf-8",
      });

      console.log("[OK] Pokémon removido com sucesso");
    }

    if (confirmar.apagar === "Não") {
      console.log("[OK] O pokémon não foi removido");
    }
  } catch {
    console.error("[ERRO] Erro ao apagar o Pokémon");
    return null;
  }
}

export { apagarPokemon };
