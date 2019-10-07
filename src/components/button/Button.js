import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Button = ({ isActive, onClick, name, list, link, gender }) => {
  return (
    <div>
      <div className={isActive && list ? 'top-menu-button active-button' : 'top-menu-button'} onClick={onClick}>{name}</div>
      {
        isActive && list &&
        <div className='dropdown-menu'>
          {
            list.map((el, i) => (
              <Link key={i} to={gender ? `/products/${gender}/${link}/${el.name}` : `/products/${link}/${el.name}`}>
                <li className='brand'>{el.name}</li>
              </Link>
            ))
          }
        </div>
      }
    </div>
  )
};
