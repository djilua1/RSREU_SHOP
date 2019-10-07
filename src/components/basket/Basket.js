import React from 'react';
import './style.css';

export const Basket = ({ basket }) => (
  <div className='content'>
    <div className='basket-wrapper'>
      <div className='product-info-el'>Список товаров: </div>
      {basket.map(product => (
        <div key={product.id} className='product-basket'>
          <img src={product.img} alt='product' className='basket-img' />
          <div className='additional-inform'>
            <div className='product-info-el'>{product.brand}</div>
            <div className='product-info-el'>{product.type}</div>
            <div className='product-info-el'>{product.name}</div>
            <div className='product-info-el'>{product.price} ₽</div>
          </div>
        </div>
      ))}
    </div>
    <div className='final-price'>
      <div className='product-info-el'>Итоговая сумма: </div>
      <div className='product-info-el'>{basket.reduce((count, { price }) => count + price, 0)} ₽</div>
    </div>
  </div>
);
