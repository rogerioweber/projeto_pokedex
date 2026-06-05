interface Stats {
  base_stat: number;
  stat: {
    name: string;
  };
}

function isPokemonStat(pokemonStats: unknown): pokemonStats is Stats {
  return (
    !!pokemonStats &&
    typeof pokemonStats === "object" &&
    "base_stat" in pokemonStats &&
    typeof pokemonStats.base_stat === "number" &&
    "stat" in pokemonStats &&
    !!pokemonStats.stat &&
    typeof pokemonStats.stat === "object" &&
    "name" in pokemonStats.stat &&
    typeof pokemonStats.stat.name === "string"
  );
}

interface Types {
  type: {
    name: string;
  };
}

function isPokemonType(PokemonTypes: unknown): PokemonTypes is Types {
  return (
    !!PokemonTypes &&
    typeof PokemonTypes === "object" &&
    "type" in PokemonTypes &&
    !!PokemonTypes.type &&
    typeof PokemonTypes.type === "object" &&
    "name" in PokemonTypes.type &&
    typeof PokemonTypes.type.name === "string"
  );
}
export class Pokemon {
  constructor(
    public id: number,
    public nome: string,
    public altura: number,
    public peso: number,
    public tipos: string[],
    public vida: number,
    public ataque: number,
    public defesa: number,
    public ataque_especial: number,
  ) {}

  static pokemonDaApi(pokemonAchadoAPI: unknown): Pokemon {
    if (!pokemonAchadoAPI || typeof pokemonAchadoAPI !== "object") {
      throw new Error("Pokémon Inválido");
    }

    if (!("id" in pokemonAchadoAPI)) {
      throw new Error("Id ausente");
    }

    if (typeof pokemonAchadoAPI.id !== "number") {
      throw new Error("Id inválido");
    }

    if (!("name" in pokemonAchadoAPI)) {
      throw new Error("Nome ausente");
    }

    if (typeof pokemonAchadoAPI.name !== "string") {
      throw new Error("Nome inválido");
    }

    if (!("height" in pokemonAchadoAPI)) {
      throw new Error("Altura ausente");
    }

    if (typeof pokemonAchadoAPI.height !== "number") {
      throw new Error("Altura inválida");
    }

    if (!("weight" in pokemonAchadoAPI)) {
      throw new Error("Peso ausente");
    }

    if (typeof pokemonAchadoAPI.weight !== "number") {
      throw new Error("Peso inválido");
    }

    if (!("types" in pokemonAchadoAPI)) {
      throw new Error("Tipos ausente");
    }

    if (!Array.isArray(pokemonAchadoAPI.types)) {
      throw new Error("Tipos inválidos");
    }

    if (!("stats" in pokemonAchadoAPI)) {
      throw new Error("Stats ausente");
    }

    if (!Array.isArray(pokemonAchadoAPI.stats)) {
      throw new Error("Stats inválidas");
    }

    const typesApi = pokemonAchadoAPI.types.filter(isPokemonType);

    const statsApi = pokemonAchadoAPI.stats.filter(isPokemonStat);

    const types = typesApi.map((pokemonType) => pokemonType.type.name);

    const hp = statsApi.find((pokemonStat) => pokemonStat.stat.name === "hp");

    const attack = statsApi.find(
      (pokemonStat) => pokemonStat.stat.name === "attack",
    );

    const defense = statsApi.find(
      (pokemonStat) => pokemonStat.stat.name === "defense",
    );

    const special_attack = statsApi.find(
      (pokemonStat) => pokemonStat.stat.name === "special-attack",
    );

    if (!hp || !attack || !defense || !special_attack) {
      throw new Error("Stats obrigatórios ausentes");
    }

    return new Pokemon(
      pokemonAchadoAPI.id,
      pokemonAchadoAPI.name,
      pokemonAchadoAPI.height,
      pokemonAchadoAPI.weight,
      types,
      hp.base_stat,
      attack.base_stat,
      defense.base_stat,
      special_attack.base_stat,
    );
  }
}
