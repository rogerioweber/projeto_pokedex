import fs from "node:fs";
import { writeFile } from "node:fs/promises";

async function criarPokedex() {
  if (!fs.existsSync("./pokedex.json")) {
    await writeFile("pokedex.json", "[]", { encoding: "utf-8" });
    console.log("Pokédex criada!");
  }
}
export { criarPokedex };
