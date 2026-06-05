async function buscarPokemonApi(pokemonProcurado: string): Promise<unknown> {
  const urlBase = "https://pokeapi.co/api/v2/pokemon/";

  try {
    const resposta = await fetch(`${urlBase}${pokemonProcurado}`);

    if (!resposta.ok) {
      console.log("[ERRO] Pokémon não encontrado na API.");
      return null;
    }

    const pokemonApi: unknown = await resposta.json();

    return pokemonApi;
  } catch {
    console.error("[ERRO] Não foi possível buscar o Pokémon na API.");
    return null;
  }
}

export { buscarPokemonApi };
