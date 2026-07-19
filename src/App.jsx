import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch Pokémon');
        return res.json();
      })
      .then((data) => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Pokédex...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <BrowserRouter>
      <div className="app">
        <h1>Pokédex</h1>
        <Routes>
          <Route path="/" element={<PokemonList pokemonList={pokemonList} />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;