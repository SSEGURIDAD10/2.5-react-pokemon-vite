import React from "react";
import PokemonCard from "./PokemonCard";
import pokemonDb from "./../../assets/poke_api_db.json";

const PokemonList = () => {
  return (
    <section>
      <h2>Mis Pokemon</h2>

      {pokemonDb.map((pokemon) => (
        <PokemonCard 
        key={pokemon.name} 
        url={pokemon.url} 
        name={pokemon.name} 
        />
      ))}
    </section>
  );
};

export default PokemonList;
