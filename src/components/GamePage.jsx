import WaldoScene from '../assets/WaldoScene.jpg';
import Waldo from '../assets/Waldo.webp';
import Wizard from '../assets/Wizard.png';
import Odlaw from '../assets/Odlaw.webp';

const GamePage = () => {
  return (
    <main>
      <h1>Find all the Characters!</h1>
      <div className='characters-container'>
        <div className='character'>
          <img src={Waldo} alt='' />
          <h2>Waldo</h2>
        </div>
        <div className='character'>
          <img src={Wizard} alt='' />
          <h2>Wizard</h2>
        </div>
        <div className='character'>
          <img src={Odlaw} alt='' />
          <h2>Odlaw</h2>
        </div>
      </div>
      <div className='imagecontainer'>
        <img src={WaldoScene} alt='' />
      </div>
    </main>
  );
};

export default GamePage;
