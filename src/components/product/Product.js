import React from 'react';
import './style.css';
import { FormButton } from '../formButton';

export const Product = ({ dataBaseItem, match, addProductInBasket }) => {
  const product = dataBaseItem.filter(el => el.id === +match.params.id)[0];

  return (
    <div className='content'>
      <div className='wrapper'>
        <div className='product-img'>
          <img src={product.img} alt="product"></img>
        </div>
        <div className='product-info'>
          <div className='product-info-el'>{product.brand}</div>
          <div className='product-info-el'>{product.type}</div>
          <div className='product-info-el'>{product.name}</div>
          <div className='product-info-el'>{product.price} ₽</div>
          <div className='description'>{product.description}</div>
          <FormButton name='Добавить в корзину' additionalClass='btn-basket' onClick={() => addProductInBasket(product.id)} />
        </div>
      </div>
    </div>
  )
};
