import React from 'react';

const Footer = () => {
  const handleClick = () => {
    window.open('https://github.com/amora7741/PhotoTagging-Frontend', '_blank');
  };

  return (
    <footer>
      <p>Created by: amora7741</p>
      <button onClick={handleClick}>
        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
          alt='GitHub'
        />
      </button>
    </footer>
  );
};

export default Footer;
