import { useParams } from 'react-router-dom';

const GameLeaderboard = () => {
  const { game } = useParams();

  return (
    <main>
      <h1>{game} Leaderboard</h1>
    </main>
  );
};

export default GameLeaderboard;
