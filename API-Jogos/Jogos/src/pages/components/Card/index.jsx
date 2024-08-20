import React from "react";


function Card({ jogos, ativaFavorito, isFavorito }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={jogos.genero} alt={`Bandeira do(a) ${jogos.nome}`} width="100" />
      <h3>{jogos.name}</h3>
      <p>Population: {jogos.genero.toLocaleString()}</p>
      <button onClick={() => ativaFavorito(jogos)}>
        {isFavorito ? 'Desfavoritar' : 'Favoritar'}
      </button>
    </div>
    );
}
export default Card





































































































































/*import "../Card/Card.module.css"

function App() {
  const [jogos, setGames] = useState([]);
  const [acaoAventuraGames, setAcaoAventuraGames] = useState([]);

  useEffect(() => {
    axios.get('https://example.com/api/games.json')
     .then(response => {
        setGames(response.data.jogos);
        setAcaoAventuraGames(response.data.jogos.filter(jogos => jogos.genero.startsWith("Ação-aventura")));
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {acaoAventuraGames.map(jogos => (
        <Card
          titulo={jogos.titulo}
          desenvolvedor={jogos.desenvolvedor}
          publicador={jogos.publicador}
          data_de_lancamento={jogos.data_de_lancamento}
          plataformas={jogos.plataformas}
          genero={jogos.genero}
        />
      ))}
    </div>
  );
}

function Card({ titulo, desenvolvedor, publicador, data_de_lancamento, plataformas, genero }) {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>Desenvolvedor: {desenvolvedor}</p>
      <p>Publicador: {publicador}</p>
      <p>Data de Lançamento: {data_de_lancamento}</p>
      <p>Plataformas: {plataformas.join(", ")}</p>
      <p>Gênero: {genero}</p>
    </div>
  );
} */