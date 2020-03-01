import React, { useState } from 'react';

import './Navigation.scss';
import NavItem from './NavigationItem/NavigationItem';

const Header = () => {
  const [burgerMenuToggled, setBurgerMenuToggled] = useState(false);

  return (
    <header>
      <div className='wrapper'>
        <nav>
          <p className='header__name'>El Furniture</p>
          <div
            className='burger'
            onClick={() => {
              setBurgerMenuToggled(!burgerMenuToggled);
            }}
          >
            <div
              className={burgerMenuToggled ? 'line modified-line-01' : 'line'}
            ></div>
            <div
              className={burgerMenuToggled ? 'line modified-line-02' : 'line'}
            ></div>
            <div
              className={burgerMenuToggled ? 'line modified-line-03' : 'line'}
            ></div>
          </div>
          <ul
            className={burgerMenuToggled ? 'nav-list open' : 'nav-list'}
            onClick={() => {
              setBurgerMenuToggled(false);
            }}
          >
            <NavItem link='/' exact>
              Home
            </NavItem>
            <NavItem link='/furniture'>Furniture</NavItem>
            {/* <NavItem link='/stores'>Stores</NavItem> */}
            <NavItem link='/about'>About Us</NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
