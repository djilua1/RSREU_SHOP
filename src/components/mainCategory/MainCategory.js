import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const MainCategory = ({ img, title, page }) => (
  <Link to={`/products/${page}`} className='main-category'>
    <span className='main-button'>{title}</span>
    <img src={img} alt='first category' className='main-image' />
  </Link>
) 
