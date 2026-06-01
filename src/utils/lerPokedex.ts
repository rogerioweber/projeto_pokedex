import { readFile } from "node:fs/promises";

async function lerPokedex() {
	try{
		const pokedexTexto = await readFile("./pokedex.json", {encoding: "utf-8"})

		const pokedex = JSON.parse(pokedexTexto)

		if(!Array.isArray(pokedex)){
			throw new Error("O arquivo não contém uma lista válida")
		}

		return pokedex
	}catch(error){
		console.error("Arquivo corrompido, não foi possível ler os dados")
		return null
	}
}

export {lerPokedex}
