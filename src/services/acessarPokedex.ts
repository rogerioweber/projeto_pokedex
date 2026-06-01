import { lerPokedex } from "../utils/lerPokedex";

async function acessarPokedex() {
  const pokedex = await lerPokedex();

  if (!pokedex || pokedex.length === 0) {
    console.log("[AVISO] A pokédex está vazia");
    return true;
  }

  console.log("=============================");
  console.log("        MINHA POKÉDEX        ");
  console.log("=============================");

  pokedex.forEach((pokemon) => {
    console.log(
      `#${pokemon.id} | ${pokemon.name} | Tipo: ${pokemon.types.join(", ")} | Altura: ${Number(pokemon.height) / 10}m | Peso: ${Number(pokemon.weight) / 10}kg `,
    );
    console.log(
      `Vida: ${pokemon.hp} | Ataque: ${pokemon.attack} | Defesa: ${pokemon.defense} | Ataque Especial: ${pokemon.special_attack}`,
    );
    console.log("===============================================");
  });
}
export { acessarPokedex };
