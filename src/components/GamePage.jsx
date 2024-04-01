import React, { useState, useRef, useEffect } from 'react';
import WaldoScene from '../assets/WaldoScene.jpg';
import Waldo from '../assets/Waldo.webp';
import Wizard from '../assets/Wizard.png';
import Odlaw from '../assets/Odlaw.webp';

import GlassMagnifier from '@vanyapr/react-image-magnifiers/dist/GlassMagnifier';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const GamePage = () => {
  const [targetCoordinates, setTargetCoordinates] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [availableCharacters, setAvailableCharacters] = useState([
    'Waldo',
    'Wizard',
    'Odlaw',
  ]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [duration, setDuration] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const picRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
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

  const checkIfCharacterPresent = async (character) => {
    const URI = `${import.meta.env.VITE_BASE_API}/coordinates/${character}&${
      targetCoordinates.x
    }&${targetCoordinates.y}`;

    try {
      const response = await fetch(URI);

      const found = await response.json();

      return found;
    } catch (err) {
      alert('Failed to connect to server.');
    }
  };

  const handleCharacterClick = async (character) => {
    handleMenuClose();

    try {
      const characterPresent = await checkIfCharacterPresent(character);

      if (characterPresent) {
        setAvailableCharacters(
          availableCharacters.filter((char) => char !== character)
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = async (nickname) => {
    const URI = `${import.meta.env.VITE_BASE_API}/users`;
    const data = { nickname, duration };

    try {
      const response = await fetch(URI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.errors[0].msg;
        throw new Error(errorMessage);
      }

      navigate('/');
    } catch (err) {
      if (err.message) {
        setErrorMessage(err.message);
      }
    }
  };

  const handleImageLoad = async () => {
    const URI = `${import.meta.env.VITE_BASE_API}/timer/starttimer`;

    try {
      const response = await fetch(URI, { method: 'POST' });

      if (!response.ok) {
        throw new Error('Failed to start timer on backend');
      }

      const data = await response.json();

      sessionStorage.setItem('token', JSON.stringify(data.token));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    const checkWin = async () => {
      try {
        if (availableCharacters.length === 0) {
          const tokenData = {
            token: JSON.parse(sessionStorage.getItem('token')),
          };

          const response = await fetch(
            `${import.meta.env.VITE_BASE_API}/timer/stoptimer`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(tokenData),
            }
          );

          if (!response.ok) {
            throw new Error('Failed to notify backend about game over');
          }

          const data = await response.json();

          setDuration(data.seconds);
          setIsEmpty(true);
        }
      } catch (error) {
        alert(error);
      }
    };

    checkWin();
  }, [availableCharacters]);

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
          <img
            src={WaldoScene}
            alt="Where's Waldo Beach Scene"
            onLoad={() => handleImageLoad()}
          />
        ) : (
          <GlassMagnifier
            imageSrc={WaldoScene}
            imageAlt="Where's Waldo Beach Scene"
            square
            magnifierSize='10%'
            cursorStyle='crosshair'
            onImageLoad={() => handleImageLoad()}
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
      <Popup open={isEmpty} modal>
        <h1>You Found Everyone!</h1>
        <h2>Join the Leaderboard:</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit(e.target.nickname.value);
          }}
        >
          <input type='text' name='nickname' placeholder='Nickname' />
          <button type='submit' id='formsubmit'>
            Submit
          </button>
        </form>
        {duration && <p>Duration: {duration} seconds</p>}
        {errorMessage && <p>Error: {errorMessage}</p>}
      </Popup>
    </main>
  );
};

export default GamePage;
