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
      `#${pokemon.id.toString()} | ${pokemon.nome} | Tipo: ${pokemon.tipos.join(", ")} | Altura: ${(pokemon.altura / 10).toString()}m | Peso: ${(pokemon.peso / 10).toString()}kg `,
    );
    console.log(
      `Vida: ${pokemon.vida.toString()} | Ataque: ${pokemon.ataque.toString()} | Defesa: ${pokemon.defesa.toString()} | Ataque Especial: ${pokemon.ataque_especial.toString()}`,
    );
    console.log("===============================================");
  });
}
export { acessarPokedex };
