import React from 'react';
import './style.css';

export const FormButton = ({ name, additionalClass, onClick }) => (
  <button className={`${additionalClass} btn`} onClick={onClick}>
    {name}
  </button>
);
