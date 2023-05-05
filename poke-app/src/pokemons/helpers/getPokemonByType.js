import { pokemons } from "../data/pokemons"

export const getPokemonByType = ({ type }) => {
    type = type.toLocaleLowerCase().trim();
    if(type.length===0)return [];
    return pokemons.filter(poke => poke.types.toLocaleLowerCase().includes(type));
}
