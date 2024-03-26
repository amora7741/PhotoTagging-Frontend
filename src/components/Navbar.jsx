import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Where's Waldo?</Link>
        </li>
        <li>
          <Link to='/leaderboard'>Leaderboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
