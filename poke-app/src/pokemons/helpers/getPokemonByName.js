import { pokemons } from "../data/pokemons"

export const getPokemonByName = (pokemon) => {
    pokemon = pokemon.toLocaleLowerCase().trim();
    if (pokemon.length === 0) return [];
    return pokemons.filter(poke => poke.pokemon.toLocaleLowerCase().includes(pokemon));
}
