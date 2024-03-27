import Waldo from '../assets/Waldohome.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      <img id='waldohome' src={Waldo} alt='' />
      <h1>Can you find Waldo?</h1>
      <button id='playnow'>
        <Link to='play'>Play Now!</Link>
      </button>
    </main>
  );
};

export default HomePage;
