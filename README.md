📘 Projeto Pokédex TypeScript Lite

Uma aplicação de terminal desenvolvida em Node.js + TypeScript que permite buscar Pokémons através da API, salvá-los em uma Pokédex local e gerenciar sua coleção diretamente pelo terminal.

🚀 Funcionalidades:
🔍 Buscar Pokémon pelo nome
💾 Salvar Pokémon na Pokédex
📂 Visualizar Pokédex
❌ Remover Pokémon da Pokédex
🛠 Criação automática do arquivo local da Pokédex
📋 Menu interativo no terminal
--------------------------------------------------------------------------------
🛠 Tecnologias utilizadas:
-Node.js
-TypeScript
-Inquirer
-PokéAPI
-File System (fs)
-Git
-GitHub
--------------------------------------------------------------------------------
📁 Estrutura do projeto
src/
 ┣ controllers/
 ┣ models/
 ┣ services/
 ┣ utils/
 ┗ main.ts
--------------------------------------------------------------------------------
Organização:
-controllers → controle do menu
-models → tipagens/interfaces
-services → regras de negócio
-utils → funções auxiliares
-main.ts → ponto inicial da aplicação
--------------------------------------------------------------------------------
Antes de executar o projeto, é necessário ter instalado:
- Node.js
- npm
- Git
--------------------------------------------------------------------------------
⚙️ Como executar o projeto
-Clone o repositório:
git clone https://github.com/rogerioweber/projeto_pokedex.git
-Instale as dependências com:
npm install
-Para executar o projeto no terminal:
npm run start

Ao iniciar, caso não exista uma Pokédex local, o sistema criará automaticamente o arquivo:
pokedex.json

🎮 Como usar
Ao executar o projeto, você verá o menu:
Procurar Pokémon
Ver sua Pokédex
Deletar Pokémon da Pokédex
Fechar Pokédex

📌 Objetivo do projeto
Mini-projeto avaliativo desenvolvido para praticar:
Estruturação de projetos backend
Modularização
Manipulação de arquivos
Consumo de API
Organização de código com TypeScript

👨‍💻 Autor
Rogério Weber

