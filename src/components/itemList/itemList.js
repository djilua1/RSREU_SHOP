import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const ItemList = (props) => {
  let newDatabaseItem;

  newDatabaseItem = props.dataBaseItem;

  if (props.match) {
    if (props.match.params.gender) {
      const { filter, category, gender } = props.match.params;
      newDatabaseItem = props.dataBaseItem.filter(item => item[filter] === category && item.gender === gender);
    } else {
      const { filter, category } = props.match.params;
      newDatabaseItem = props.dataBaseItem.filter(item => item[filter] === category);
    }
  }

  return (
    <div className='content'>
      <div className='products'>
        {newDatabaseItem.map(({ name, brand, type, img, gender, price, id }) => {
          return (
            <Link key={id} to={`/products/${gender}/${type}/${brand}/${id}`} className='link'>
              <div className='product'>
                <img className='product-image' src={img} alt=' ' />
                <div>{brand}</div>
                <div>{gender === 'male' ? 'Мужские ' + type : 'Женские ' + type}</div>
                <div>{name}</div>
                <div className='price'>{price + ' ₽'}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
};
