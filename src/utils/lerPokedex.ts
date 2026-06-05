import { readFile } from "node:fs/promises";

import { Pokemon } from "../models/pokemon";

async function lerPokedex(): Promise<Pokemon[] | null> {
  try {
    const pokedexTexto = await readFile("./pokedex.json", {
      encoding: "utf-8",
    });

    const pokedex = JSON.parse(pokedexTexto) as Pokemon[];

    if (!Array.isArray(pokedex)) {
      throw new Error("O arquivo não contém uma lista válida");
    }

    return pokedex;
  } catch {
    console.log("[ERRO] Erro ao ler a Pokédex");
    return null;
  }
}

export { lerPokedex };
