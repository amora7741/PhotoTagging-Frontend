import { useParams } from 'react-router-dom';

const GameLeaderboard = () => {
  const { game } = useParams();
  console.log(game);

  return (
    <>
      <h1>Game: {game}</h1>
    </>
  );
};

export default GameLeaderboard;
