import inquirer from "inquirer";
import { buscarPokemonApi } from "../utils/buscarPokemonApi";
import { lerPokedex } from "../utils/lerPokedex";
import { salvarPokemon } from "../utils/salvarPokemon";
import { Pokemon } from "../models/pokemon";

async function procurarPokemon() {
  const pokemonDigitado = await inquirer.prompt([
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

  const pokemonExistePokedex = pokedex.find(
    (pokemonName: any) => pokemon.name === pokemonName.name,
  );

  if (pokemonExistePokedex) {
    console.log(`[AVISO] ${pokemon.name} já existe na Pokédex`);
    return true;
  }

  console.log("[OK] Pokémon Encontrado");
  console.log(
    `id: ${pokemon.id} | Pokémon: ${pokemon.name} |  Altura: ${pokemon.height / 10}m | Peso: ${pokemon.weight / 10}kg | Tipo: ${pokemon.types}`,
  );

  await salvarPokemon(pokemon, pokedex);
}

export { procurarPokemon };
