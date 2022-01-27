// import React from 'react';
import { IoIosHappy, IoIosMenu } from 'react-icons/io';
// import PropTypes from 'prop-types';

import './header.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className='header__movie-quizz movie-quizz'>
        <p className='header__movie-quizz__title'>Movie-Quizz</p>
      </div>
      <IoIosHappy className='header__logo' />
      <div className='header__connexion connexion'>
        <p className='header__connexion__text'>Connexion</p>
      </div>
      <div className='header__inscription inscription'>
        <p className='header__inscription__text'>Inscription</p>
      </div>
      <div className='header__menu menu'>
        <IoIosMenu className='header__menu__logo' />
      </div>
    </div>
  );
}

// Header.propTypes = {

// };
