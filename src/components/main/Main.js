import React from 'react';
import { MainCategory } from '../mainCategory';
import manImg from '../../assest/man.webp';
import girlImg from '../../assest/girl.jpg';
import './style.css';

export const Main = () => (
  <div className='main'>
    <MainCategory img={manImg} title='Для него' page='man' />
    <MainCategory img={girlImg} title='Для нее' page='girl' />
  </div>
);
