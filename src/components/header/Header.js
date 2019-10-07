import React from 'react';
import { NavigationMenu } from '../navigationMenu';
import { Avatar } from '../avatar';
import './style.css';

export const Header = ({ login, isAutorized }) => (
  <div className='header'>
    {isAutorized && <NavigationMenu />}
    {isAutorized && <Avatar name={login} />}
  </div>
);
