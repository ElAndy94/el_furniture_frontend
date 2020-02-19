import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

const NavItem = props => (
  <li className='nav-item'>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName='nav-item active'
    >
      {props.children}
    </NavLink>
  </li>
);

export default NavItem;
