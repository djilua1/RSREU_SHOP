import React from 'react';
import './style.css';
import fetch from 'node-fetch';

import airJordan from '../../assest/img/Air Jordan 1.jpg'
import airMax from '../../assest/img/Air max 97.jpg'
import airForce from '../../assest/img/Air force.jpg'
import gel from '../../assest/img/Gel-BND White.jpg'
import ozweego from '../../assest/img/Ozweego.jpg'
import fpGreen from '../../assest/img/fpgreen.jpg'
import fpRed from '../../assest/img/fpred.jpg'
import carharttRed from '../../assest/img/carharttRed.jpg'
import carharttFi from '../../assest/img/carharttFi.jpg'
import fpBlackR from '../../assest/img/fpBlackR.jpg'
import fpWhiteR from '../../assest/img/fpWhiteR.jpg'
import NB1 from '../../assest/img/NB1.jpg'
import Reebok1 from '../../assest/img/Reebok1.jpg'
import Lacoste1 from '../../assest/img/Lacoste1.jpg'
import Saucony1 from '../../assest/img/Saucony1.jpg'
import Levis1 from '../../assest/img/Levis1.jpg'
import Premiata1 from '../../assest/img/Premiata1.jpg'
import Face1 from '../../assest/img/Face1.jpg'
import Champion1 from '../../assest/img/Champion1.jpg'
import Lyle1 from '../../assest/img/Lyle1.jpg'
import FP0 from '../../assest/img/FP0.jpg'

export const imgs = {
  airJordan,
  airMax,
  airForce ,
  gel,
  ozweego,
  fpGreen,
  fpRed,
  carharttRed,
  carharttFi,
  fpBlackR,
  fpWhiteR,
  NB1,
  Reebok1,
  Lacoste1,
  Saucony1,
  Levis1,
  Premiata1,
  Face1,
  Champion1,
  Lyle1,
  FP0,
}

export class Basket extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      basket: [],
    }
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3001/basket').then(res => res.json());

    this.setState(() => ({
      basket: res,
    }))
  }

  render() {
    return (
      <div className='content'>
        <div className='basket-wrapper'>
          <div className='product-info-el'>Список товаров: </div>
          {this.state.basket.map(product => (
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
          <div className='product-info-el'>{this.state.basket.reduce((count, { price }) => count + price, 0)} ₽</div>
        </div>
      </div>
    )
  }
};
