import {useEffect, useState} from "react";
import {pokemonAPI} from "../api/config";

export const PokemonPageContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    pokemonAPI
      .getPokemons("pokemon")
      .then((res) => console.log(res.data.results));
  }, []);
  return <div></div>;
};
