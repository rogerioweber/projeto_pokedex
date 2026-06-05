import inquirer from "inquirer";

import { Pokemon } from "../models/pokemon";
import { buscarPokemonApi } from "../utils/buscarPokemonApi";
import { lerPokedex } from "../utils/lerPokedex";
import { salvarPokemon } from "../utils/salvarPokemon";

async function procurarPokemon() {
  const pokemonDigitado: { nomeOuId: string } = await inquirer.prompt([
    { name: "nomeOuId", message: "Digite o pokemon(nome ou id):" },
  ]);

  const pokemonProcurado = pokemonDigitado.nomeOuId;

  if (!pokemonProcurado) {
    console.log("[ERRO] Digite um nome ou ID.");
    return;
  }

  const pokemonAchadoAPI = await buscarPokemonApi(pokemonProcurado);

  const pokedex = await lerPokedex();

  if (!pokemonAchadoAPI) {
    console.log("[ERRO] Nome ou id não é de um Pokémon válido");
    return true;
  }

  if (!pokedex) {
    console.log("[ERRO] Não foi possível carregar Pokédex");
    return true;
  }

  const pokemon = Pokemon.pokemonDaApi(pokemonAchadoAPI);

  console.log("[OK] Pokémon Encontrado");
  console.log(
    `id: ${pokemon.id.toString()} | Pokémon: ${pokemon.nome} |  Altura: ${(pokemon.altura / 10).toString()}m | Peso: ${(pokemon.peso / 10).toString()}kg | Tipo: ${pokemon.tipos.join(", ")}`,
  );

  await salvarPokemon(pokemon, pokedex);
}

export { procurarPokemon };
