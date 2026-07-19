import { Link } from 'react-router-dom';

function PokemonCard({ name, url }) {
  const id = url.split('/').filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link to={`/pokemon/${name}`} className="pokemon-card">
      <img src={imageUrl} alt={name} />
      <p>#{id} {name}</p>
    </Link>
  );
}

export default PokemonCard;