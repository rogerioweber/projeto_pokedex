import { menuController } from "./controllers/menu";

async function main() {
  let rodando = true;

  try {
    while (rodando) {
      rodando = await menuController();
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Encerrando programa...");
    console.log("Programa finalizado.");
  }
}

main().catch(console.error);
