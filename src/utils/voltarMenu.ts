import inquirer from "inquirer";

async function voltarMenu() {
	await inquirer.prompt([
          {
            type: "input",
            name: "enter",
            message: "Aperte enter para voltar ao menu da Pokédex",
          },
        ]);
}

export {voltarMenu}
