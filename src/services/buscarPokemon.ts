import inquirer from "inquirer";
import { Pokemon } from "../models/pokemon";
import { buscarPokemonApi } from "../utils/buscarPokemonApi";
import { voltarMenu } from "../utils/voltarMenu";
import { lerPokedex } from "./lerPokedex";
import { salvarPokemon } from "./salvarPokemon";

async function buscarPokemon() {
  const pokemonDigitado = await inquirer.prompt([
    { name: "nomeOuId", message: "Digite o pokemon(nome ou id):" },
  ]);

  const pokemonProcurado = pokemonDigitado.nomeOuId;

  const pokemonAchadoAPI = await buscarPokemonApi(pokemonProcurado);

  const pokemonsNaPokedex = await lerPokedex();

  if (!pokemonAchadoAPI) {
    console.log("Nome ou id não é de um Pokémon válido");
    return true;
  }

  if (!pokemonsNaPokedex) {
    console.log("Erro ao carregar Pokédex");
    return true;
  }
  const pokemonExistePokedex = pokemonsNaPokedex?.find(
    (pokemonName: any) => pokemonAchadoAPI?.name === pokemonName.name,
  );

  if (pokemonExistePokedex) {
    console.log(`O pokémon ${pokemonAchadoAPI?.name} já existe na Pokédex`);
    return true;
  }

  console.log("Pokémon Encontrado");
  console.log(
    `id: ${pokemonAchadoAPI?.id} | Pokémon: ${pokemonAchadoAPI?.name} |  height: ${pokemonAchadoAPI.height / 10}m | weight: ${pokemonAchadoAPI.weight / 10}kg | Type: ${pokemonAchadoAPI.types}`,
  );
  await salvarPokemon(pokemonAchadoAPI, pokemonsNaPokedex);
}

export { buscarPokemon };
