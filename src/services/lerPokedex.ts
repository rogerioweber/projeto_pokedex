import { readFile } from "node:fs/promises";

async function lerPokedex() {
	try{
		const pokemonText = await readFile("./pokedex.json", {encoding: "utf-8"})
		const dados = JSON.parse(pokemonText)
		if(!Array.isArray(dados)){
			throw new Error("O arquivo não contém uma lista válida")
		}
		return dados
	}catch(error){
		console.error("Arquivo corrompido, não foi possível ler os dados")
		return null
	}
}

export {lerPokedex}
