import WaldoScene from '../assets/WaldoScene.jpg';
import Waldo from '../assets/Waldo.webp';
import Wizard from '../assets/Wizard.png';
import Odlaw from '../assets/Odlaw.webp';

const GamePage = () => {
  return (
    <main>
      <h1>Find all the Characters!</h1>
      <div className='gamecontainer'>
        <div className='imagecontainer'>
          <img src={WaldoScene} alt='' />
        </div>
        <div className='characters-container'>
          <img src={Waldo} alt='' />
          <img src={Wizard} alt='' />
          <img src={Odlaw} alt='' />
        </div>
      </div>
    </main>
  );
};

export default GamePage;
