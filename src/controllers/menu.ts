import inquirer from "inquirer";
import fs from "node:fs";
import { writeFile } from "node:fs/promises";
import { buscarPokemon } from "../services/buscarPokemon";
import { Pokemon } from "../models/pokemon";
import { lerPokedex } from "../services/lerPokedex";
import { verPokedex } from "../services/verPokedex";
import { voltarMenu } from "../utils/voltarMenu";
import { deletarPokemon } from "../services/deletarPokemon";

async function menuController(): Promise<boolean> {
  async function criarPokedex() {
    if (!fs.existsSync("./pokedex.json")) {
      await writeFile("pokedex.json", "[]", { encoding: "utf-8" });
      console.log("Pokédex criada!");
    }
  }
  await criarPokedex();
  console.log("===============================================");
  const resposta = await inquirer.prompt([
    {
      type: "select",
      name: "opcao",
      message: "Pokédex",
      choices: [
        "Procurar Pokémon",
        "Ver sua Pokédex",
        "Deletar Pokémon da Pokédex",
        "Fechar Pokédex",
      ],
    },
  ]);

  switch (resposta.opcao) {
    case "Procurar Pokémon":
      const pokemonDigitado = await inquirer.prompt([
        { name: "pokemonBusca", message: "Digite o pokemon(nome ou id):" },
      ]);
      const pokemonProcurado = pokemonDigitado.pokemonBusca;

      const pokemonAchadoAPI = await buscarPokemon(pokemonProcurado);
      const pokemonsNaPokedex = await lerPokedex();

      const pokemonExistePokedex = pokemonsNaPokedex?.find(
        (pokemonName: any) => pokemonAchadoAPI?.name === pokemonName.name,
      );

      if (pokemonExistePokedex) {
        console.log(`O pokémon ${pokemonAchadoAPI?.name} já existe na Pokédex`);
        await voltarMenu();
        return true;
      }
      //tenho que colocar um if aqui porque quando da erro de encontrar o pokemon, ele ta retornando null e vem pokemon e id undefined. dai tenho que ver isso
      console.log("Pokémon Encontrado");
      console.log(
        `Pokémon: ${pokemonAchadoAPI?.name} | id: ${pokemonAchadoAPI?.id}`,
      );

      const desejaSalvar = await inquirer.prompt([
        {
          type: "select",
          name: "salvar",
          message: "Deseja salvar o pokémon na pokédex?",
          choices: ["Sim", "Não"],
        },
      ]);

      if (desejaSalvar.salvar === "Sim") {
        pokemonsNaPokedex?.push(pokemonAchadoAPI);
        await writeFile("./pokedex.json", JSON.stringify(pokemonsNaPokedex), {
          encoding: "utf-8",
        });
        console.log(`${pokemonAchadoAPI?.name} salvo com sucesso!`);
        await voltarMenu();
        return true;
      }

      if (desejaSalvar.salvar === "Não") {
        console.log(`${pokemonAchadoAPI?.name} não foi salvo na pokédex`);
        await voltarMenu();
        return true;
      }

    case "Ver sua Pokédex":
      await verPokedex();
      await voltarMenu();
      return true;

    case "Deletar Pokémon da Pokédex":
      await deletarPokemon()
      await voltarMenu()
      return true;

    case "Fechar Pokédex":
      return false;

    default:
      console.log("Erro em algum momento");
      return false;
  }
}

export { menuController };
