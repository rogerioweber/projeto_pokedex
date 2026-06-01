# 📘 Projeto Pokédex TypeScript Lite

Uma aplicação de terminal desenvolvida em **Node.js + TypeScript** que permite buscar Pokémons através da API, salvá-los em uma Pokédex local e gerenciar sua coleção diretamente pelo terminal.

---

## 🎯 Objetivo do Projeto

Projeto desenvolvido para praticar:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Kanban.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Inquirer
- PokéAPI
- File System (fs)
- Git
- GitHub

---

## 📋 Pré-requisitos

Antes de executar o projeto, tenha instalado:

- Node.js
- npm
- Git

---

## 🚀 Funcionalidades

- 🔍 Buscar Pokémon pelo nome
- 💾 Salvar Pokémon na Pokédex
- 📂 Visualizar Pokédex
- ❌ Remover Pokémon da Pokédex
- 🛠️ Criação automática do arquivo local da Pokédex
- 📋 Menu interativo no terminal

---

## ⚙️ Como Executar

### Clone o repositório

```bash
git clone https://github.com/rogerioweber/projeto_pokedex.git
```

### Acesse a pasta

```bash
cd projeto_pokedex
```

### Instale as dependências

```bash
npm install
```

### Execute o projeto

```bash
npm run start
```

---

## 📁 Estrutura do Projeto

```txt
src/
├── controllers/
├── models/
├── services/
├── utils/
└── main.ts
```

### Organização

- **controllers** → controle do menu
- **models** → tipagens/interfaces
- **services** → regras de negócio
- **utils** → funções auxiliares
- **main.ts** → ponto inicial da aplicação

---

## 💾 Armazenamento Local

Ao iniciar o projeto, caso não exista uma Pokédex local, o sistema criará automaticamente o arquivo:

```txt
pokedex.json
```

---

## 🎮 Como Usar

Ao executar o projeto, você verá o menu:

1. Procurar Pokémon
2. Ver sua Pokédex
3. Deletar Pokémon da Pokédex
4. Fechar Pokédex

---

## 🧪 Exemplos de Uso

### 🔍 Busca válida

**Entrada testada:**

```txt
pikachu
```

**Saída obtida:**

```txt
[OK] Pokémon Encontrado
id: 25 | Pokémon: pikachu | height: 0.4m | weight: 6kg | Type: electric
```

---

### ❌ Busca inválida

**Entrada testada:**

```txt
as
```

**Saída obtida:**

```txt
[ERRO] Pokémon não encontrado na API.
[ERRO] Nome ou id não é de um Pokémon válido
```

---

### ⚠️ Duplicidade

**Entrada testada:**

```txt
Adicionar bulbasaur duas vezes
```

**Saída obtida:**

```txt
[AVISO] bulbasaur já existe na Pokédex
```

---

### 🗑️ Remoção

**Entrada testada:**

```txt
Remover Pokémon de ID 3
```

**Saída obtida:**

```txt
[OK] Pokémon encontrado
[OK] Pokémon removido com sucesso
```

---

## 📚 Conceitos Aplicados

### TypeScript
Utilização de interfaces, parâmetros tipados e retornos tipados para garantir maior segurança e organização do código.

### Interface Pokemon
Criada para representar e padronizar os dados de um Pokémon utilizados pela aplicação.

### Fetch e Async/Await
Utilizados para realizar consultas assíncronas à PokéAPI e obter os dados dos Pokémons.

### Tratamento de Erros
Implementado com try/catch para lidar com Pokémon inexistente e possíveis falhas na busca.

### Métodos de Array
- find() → localizar Pokémons na Pokédex.
- map() → transformar os tipos retornados pela API.
- forEach() → percorrer e exibir Pokémons armazenados.

### Classe CatalogoPokemon
Classe criada para organizar e armazenar os Pokémons da aplicação por meio de atributos e métodos específicos.

---

## 📋 Organização do Kanban

Link do Kanban:
[https://better-coconut-3ad.notion.site/Kanban-72ee77cfcb08833e86d501a736f0b809]

---

## 🌿 Branches Utilizadas

- main
- develop
- feat/pokedex
- docs/readme

## 👨‍💻 Autor

**Rogério Weber**

GitHub: https://github.com/rogerioweber
