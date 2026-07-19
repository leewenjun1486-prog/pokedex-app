import PokemonCard from './PokemonCard';

function PokemonList({ pokemonList }) {
  return (
    <div className="pokemon-grid">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}

export default PokemonList;