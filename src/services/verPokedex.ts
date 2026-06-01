import { lerPokedex } from "./lerPokedex";

async function verPokedex() {
  console.log("=============================");
  console.log("        MINHA POKEDEX        ");
  console.log("=============================");

  const pokemons = await lerPokedex();

  if (pokemons && pokemons.length > 0) {
    pokemons.forEach((pokemon) => {
      console.log(
        `#${pokemon.id} | ${pokemon.name} | Types: ${pokemon.types.join(", ")} | height: ${Number(pokemon.height) / 10}m | weight: ${Number(pokemon.weight) / 10}kg `,
      );
      console.log(
        `Hp: ${pokemon.hp} | Attack: ${pokemon.attack} | Defense: ${pokemon.defense}`,
      );
      console.log("===============================================");
    });
  }
}
export { verPokedex };
