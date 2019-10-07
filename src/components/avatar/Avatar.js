import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Avatar = ({ name }) => (
  <div className='avatar'>
    <div className='avatar-img'></div>
    <div className='avatar-name'>{name}</div>
    <Link to='/basket'>
      <div className='basket'></div>
    </Link>
  </div>
);
