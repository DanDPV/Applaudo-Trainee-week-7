/* eslint jsx-a11y/label-has-associated-control: 0 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import React from 'react';
import RouteNames from 'routers/RouteNames';
import 'components/Navbar/Navbar.scss';

const Navbar = () => (
  <nav>
    <button type="button" className="logo">
      TM
    </button>
    <label htmlFor="toggle" className="menu-label">
      <FontAwesomeIcon icon={faBars} />
    </label>
    <input name="toggle" id="toggle" type="checkbox" className="menu-button" />
    <ul>
      <li>
        <NavLink className="link" exact to={RouteNames.Home}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="link" exact to={RouteNames.TicTacToe}>
          Tic tac toe
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
