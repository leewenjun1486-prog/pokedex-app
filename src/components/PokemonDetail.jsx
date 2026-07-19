import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (!pokemon) return <p>Pokémon not found.</p>;

  return (
    <div className="pokemon-detail">
      <Link to="/">← Back to list</Link>
      <h2>#{pokemon.id} {pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <h3>Types</h3>
      <p>{pokemon.types.map((t) => t.type.name).join(', ')}</p>

      <h3>Height / Weight</h3>
      <p>{pokemon.height / 10} m / {pokemon.weight / 10} kg</p>

      <h3>Base Stats</h3>
      <ul>
        {pokemon.stats.map((s) => (
          <li key={s.stat.name}>
            {s.stat.name}: {s.base_stat}
          </li>
        ))}
      </ul>

      <h3>Abilities</h3>
      <p>{pokemon.abilities.map((a) => a.ability.name).join(', ')}</p>
    </div>
  );
}

export default PokemonDetail;