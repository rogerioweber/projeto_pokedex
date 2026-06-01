export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public height: number,
    public weight: number,
    public types: string[],
    public hp: number,
    public attack: number,
    public defense: number,
  ) {}

  static pokemonDaApi(pokemon: any): Pokemon {
    const types = pokemon.types.map(
      (pokemonType: any) => pokemonType.type.name,
    );

    const hp = pokemon.stats.find(
      (pokemonStat: any) => pokemonStat.stat.name === "hp",
    );

    const attack = pokemon.stats.find(
      (pokemonStat: any) => pokemonStat.stat.name === "attack",
    );

    const defense = pokemon.stats.find(
      (pokemonStat: any) => pokemonStat.stat.name === "defense",
    );

    return new Pokemon(
      pokemon.id,
      pokemon.name,
      pokemon.height,
      pokemon.weight,
      types,
      hp.base_stat,
      attack.base_stat,
      defense.base_stat,
    );
  }
}
