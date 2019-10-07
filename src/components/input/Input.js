import React from 'react';
import './style.css';

export const Input = ({ placeholder, titleInput, type, onChange, value, errorText, additionalStyle }) => (
  <div>
    <label className="title-input">
      <span>{titleInput}</span>
      {errorText && <span className="error-text">{errorText}</span>}
    </label>
    <input className={`form-input ${additionalStyle}`} placeholder={placeholder} type={type} onChange={onChange} value={value} />
    <div className={`focus-input ${additionalStyle}`} />
  </div>
);
