import { Pokemon } from "../models/pokemon";

async function buscarPokemon(
  pokemonProcurado: string,
): Promise<Pokemon | null> {
  const urlBase = "https://pokeapi.co/api/v2/pokemon/";

  try {
    const resposta = await fetch(`${urlBase}${pokemonProcurado}`);

    if (!resposta.ok) {
      console.log("[ERRO] Pokémon não encontrado.");
      return null;
    }
    const pokemon = await resposta.json();

    return Pokemon.pokemonDaApi(pokemon);
  } catch (error) {
    console.log("[ERRO] Não foi possível buscar o Pokémon.");
    return null;
  }
}

export { buscarPokemon };
