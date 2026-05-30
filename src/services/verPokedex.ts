import { lerPokedex } from "./lerPokedex";

async function verPokedex() {
  console.log("=============================");
  console.log("        MINHA POKEDEX        ");
  console.log("=============================");

  const pokemons = await lerPokedex()

  if (pokemons && pokemons.length > 0){
	pokemons.forEach((pokemon) => {
		console.log(`Id: ${pokemon.id}`);
      console.log(`Name: ${pokemon.name}`);
      console.log(`Types: ${pokemon.types.join(", ")}`);
      console.log(`Hp: ${pokemon.hp}`);
      console.log(`Attack: ${pokemon.attack}`);
      console.log(`Defense: ${pokemon.defense}`);
      console.log("===============================================");
	});
  }
}
export {verPokedex}
