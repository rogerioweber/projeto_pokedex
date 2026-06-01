import inquirer from "inquirer";
import { writeFile } from "fs/promises";
import { Pokemon } from "../models/pokemon";

async function salvarPokemon(
  pokemon: Pokemon,
  pokemonsNaPokedex: Pokemon[],
) {
  const desejaSalvar = await inquirer.prompt([
    {
      type: "select",
      name: "salvar",
      message: "Deseja salvar o pokémon na pokédex?",
      choices: ["Sim", "Não"],
    },
  ]);

  if (desejaSalvar.salvar === "Sim") {
    pokemonsNaPokedex.push(pokemon);
    await writeFile("./pokedex.json", JSON.stringify(pokemonsNaPokedex), {
      encoding: "utf-8",
    });

    console.log(`[OK] ${pokemon.name} salvo com sucesso!`);
    return true;
  }

  if (desejaSalvar.salvar === "Não") {
    console.log(`[AVISO] ${pokemon.name} não foi salvo na pokédex`);
    return true;
  }
}
export { salvarPokemon };
