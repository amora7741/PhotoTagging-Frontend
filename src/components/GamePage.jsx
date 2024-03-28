import React, { useState, useRef, useEffect } from 'react';
import WaldoScene from '../assets/WaldoScene.jpg';
import Waldo from '../assets/Waldo.webp';
import Wizard from '../assets/Wizard.png';
import Odlaw from '../assets/Odlaw.webp';

import { GlassMagnifier } from 'react-image-magnifiers';

const GamePage = () => {
  const [targetCoordinates, setTargetCoordinates] = useState({ x: 0, y: 0 });
  const [showTargetBox, setShowTargetBox] = useState(false);
  const picRef = useRef(null);

  const capturePosition = (e) => {
    const x = Math.round(
      (100 * (e.pageX - e.currentTarget.offsetLeft)) /
        picRef.current.offsetWidth
    );
    const y = Math.round(
      (100 * (e.pageY - e.currentTarget.offsetTop)) /
        picRef.current.offsetHeight
    );

    setTargetCoordinates({ x, y });
    setShowTargetBox(true);
  };

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
      <div className='imagecontainer' onClick={capturePosition} ref={picRef}>
        <img src={WaldoScene} alt="Where's Waldo Beach Scene" />
        {showTargetBox && (
          <div
            className='target-box'
            style={{
              left: `${targetCoordinates.x}%`,
              top: `${targetCoordinates.y}%`,
            }}
          />
        )}
      </div>
    </main>
  );
};

export default GamePage;
