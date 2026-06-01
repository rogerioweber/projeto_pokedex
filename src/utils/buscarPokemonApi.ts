async function buscarPokemonApi(
  pokemonProcurado: string,
): Promise<any | null> {
  const urlBase = "https://pokeapi.co/api/v2/pokemon/";

  try {
	 const resposta = await fetch(`${urlBase}${pokemonProcurado}`);

	 if (!resposta.ok) {
		console.log("[ERRO] Pokémon não encontrado na API.");
		return null;
	 }
	 
	 const pokemon = await resposta.json();

	 return pokemon;
  } catch (error) {
	 console.log("[ERRO] Não foi possível buscar o Pokémon na API.");
	 return null;
  }
}

export { buscarPokemonApi };
