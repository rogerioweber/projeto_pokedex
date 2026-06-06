import { writeFile } from "fs/promises";

import inquirer from "inquirer";

import { Pokemon } from "../models/pokemon";

async function salvarPokemon(pokemon: Pokemon, pokemonsNaPokedex: Pokemon[]) {
  try {
    const desejaSalvar = await inquirer.prompt([
      {
        type: "select",
        name: "salvar",
        message: "Deseja salvar o pokémon na pokédex?",
        choices: ["Sim", "Não"],
      },
    ]);

    if (desejaSalvar.salvar === "Sim") {
      const pokemonExistePokedex = pokemonsNaPokedex.find(
        (pokemonPokedex) => pokemon.nome === pokemonPokedex.nome,
      );

      if (pokemonExistePokedex) {
        console.log(`[AVISO] ${pokemon.nome} já existe na Pokédex`);
        return true;
      }

      pokemonsNaPokedex.push(pokemon);
      await writeFile("./pokedex.json", JSON.stringify(pokemonsNaPokedex), {
        encoding: "utf-8",
      });

      console.log(`[OK] ${pokemon.nome} salvo com sucesso!`);
      return true;
    }

    console.log(`[AVISO] ${pokemon.nome} não foi salvo na pokédex`);
    return true;
  } catch {
    console.error("[ERRO] Erro ao salvar o Pokémon");
    return null;
  }
}
export { salvarPokemon };
