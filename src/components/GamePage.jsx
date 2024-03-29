import React, { useState, useRef, useEffect } from 'react';
import WaldoScene from '../assets/WaldoScene.jpg';
import Waldo from '../assets/Waldo.webp';
import Wizard from '../assets/Wizard.png';
import Odlaw from '../assets/Odlaw.webp';

import GlassMagnifier from '@vanyapr/react-image-magnifiers/dist/GlassMagnifier';
import { useMediaQuery } from 'react-responsive';

const GamePage = () => {
  const [targetCoordinates, setTargetCoordinates] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [availableCharacters, setAvailableCharacters] = useState([
    'Waldo',
    'Wizard',
    'Odlaw',
  ]);
  const picRef = useRef(null);
  const menuRef = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const capturePosition = (e) => {
    const x =
      (100 * (e.pageX - e.currentTarget.offsetLeft)) /
      picRef.current.offsetWidth;

    const y =
      (100 * (e.pageY - e.currentTarget.offsetTop)) /
      picRef.current.offsetHeight;

    setTargetCoordinates({ x, y });
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    menuRef.current.classList.add('fade-out');
    setTimeout(() => {
      setShowMenu(false);
    }, 300);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  const handleCharacterClick = (character) => {
    handleMenuClose();
    setAvailableCharacters(
      availableCharacters.filter((char) => char !== character)
    );
  };

  return (
    <main>
      <h1>Find all the Characters!</h1>
      <div className='characters-container'>
        {availableCharacters.map((character) => (
          <div key={character} className='character'>
            {character === 'Waldo' && <img src={Waldo} alt='' />}
            {character === 'Wizard' && <img src={Wizard} alt='' />}
            {character === 'Odlaw' && <img src={Odlaw} alt='' />}
            <h2>{character}</h2>
          </div>
        ))}
      </div>
      <div className='imagecontainer' onClick={capturePosition} ref={picRef}>
        {isTabletOrMobile ? (
          <img src={WaldoScene} alt="Where's Waldo Beach Scene" />
        ) : (
          <GlassMagnifier
            imageSrc={WaldoScene}
            imageAlt="Where's Waldo Beach Scene"
            square
            magnifierSize='10%'
            cursorStyle='crosshair'
          />
        )}

        {showMenu && (
          <div
            ref={menuRef}
            onMouseLeave={handleMenuClose}
            onClick={handleMenuClick}
            className='menu'
            style={{
              left: `${targetCoordinates.x}%`,
              top: `${targetCoordinates.y}%`,
            }}
          >
            <div className='target-box'></div>
            <div className='characterselect'>
              {availableCharacters.map((character) => (
                <button
                  key={character}
                  onClick={() => handleCharacterClick(character)}
                >
                  {character}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default GamePage;
