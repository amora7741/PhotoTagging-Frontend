import { Link } from 'react-router-dom';

const LeaderboardPage = () => {
  return (
    <main>
      <Link to='/leaderboard/game1'>Game 1</Link>
      <Link to='/leaderboard/game2'>Game 2</Link>
      <Link to='/leaderboard/game3'>Game 3</Link>
    </main>
  );
};

export default LeaderboardPage;
