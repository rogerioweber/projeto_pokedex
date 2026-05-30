import inquirer from "inquirer";
import fs from "node:fs";
import { writeFile, readFile } from "node:fs/promises";
import { buscarPokemon } from "../services/buscarPokemon";
import { Pokemon } from "../models/pokemon";

async function menuController(): Promise<boolean> {
  async function criarPokedex() {
    if (!fs.existsSync("./pokedex.json")) {
      await writeFile("pokedex.json", "[]", { encoding: "utf-8" });
      console.log("Pokédex criada!");
    }
  }
  await criarPokedex();

  const resposta = await inquirer.prompt([
    {
      type: "select",
      name: "opcao",
      message: "Pokédex",
      choices: [
        "Procurar Pokemon",
        "Ver sua Pokédex",
        "Deletar pokemon da Pokédex",
        "Fechar Pokédex",
      ],
    },
  ]);

  switch (resposta.opcao) {
    case "Procurar Pokemon":
      const pokemonDigitado = await inquirer.prompt([
        { name: "pokemonBusca", message: "Digite o pokemon(nome ou id):" },
      ]);
      const pokemonProcurado = pokemonDigitado.pokemonBusca;

      const pokemonAchadoAPI = await buscarPokemon(pokemonProcurado);
      console.log(pokemonAchadoAPI); // estou retornando o pokemons já com as stats


      return true;

    case "Ver sua Pokédex":
      console.log("Vendo");
      return true;

    case "Deletar pokemon da Pokédex":
      console.log("Deletando");
      return true;

    case "Fechar Pokédex":
      console.log("Fechando");
      return false;

    default:
      console.log("Erro em algum momento");
      return false;
  }
}

export { menuController };
