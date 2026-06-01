import inquirer from "inquirer";
import { procurarPokemon } from "../services/procurarPokemon";
import { acessarPokedex } from "../services/acessarPokedex";
import { voltarMenu } from "../utils/voltarMenu";
import { deletarPokemon } from "../services/deletarPokemon";
import { criarPokedex } from "../services/criarPokedex";

async function menuController(): Promise<boolean> {
  await criarPokedex();

  console.log("===============================================");
  const resposta = await inquirer.prompt([
    {
      type: "select",
      name: "opcao",
      message: "Pokédex",
      choices: [
        "Procurar Pokémon",
        "Acessar sua Pokédex",
        "Deletar Pokémon da Pokédex",
        "Fechar Pokédex",
      ],
    },
  ]);

  switch (resposta.opcao) {
    case "Procurar Pokémon":
      await procurarPokemon();
      await voltarMenu();
      return true;

    case "Acessar sua Pokédex":
      await acessarPokedex();
      await voltarMenu();
      return true;

    case "Deletar Pokémon da Pokédex":
      await deletarPokemon();
      await voltarMenu();
      return true;

    case "Fechar Pokédex":
      return false;

    default:
      console.log("Erro em algum momento");
      return false;
  }
}

export { menuController };
