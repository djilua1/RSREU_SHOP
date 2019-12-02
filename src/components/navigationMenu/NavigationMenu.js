import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import './style.css';

const dataBaseForBrand = [
  { name: 'adidas Originals' },
  { name: 'ASICS' },
  { name: 'Carhartt WIP' },
  { name: 'Champion' },
  { name: 'Fred Perry' },
  { name: 'Lacoste' },
  { name: 'Levis' },
  { name: 'Lyle & Scott' },
  { name: 'New Balance' },
  { name: 'Nike' },
  { name: 'Premiata' },
  { name: 'Reebok' },
  { name: 'Saucony' },
  { name: 'The North Face' },
];

const dataBaseForMan = [
  { name: 'Кроссовки' },
  { name: 'Свитера' },
  { name: 'Рубашки' },
  { name: 'Футболки' },
  { name: 'Брюки' },
];

const dataBaseForGirl = [
  { name: 'Кроссовки' },
  { name: 'Лонгсливы' },
  { name: 'Футболки' },
  { name: 'Толстовки' },
  { name: 'Брюки' },
];

export class NavigationMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: {
        brand: false,
        man: false,
        girl: false,
      },
    };
  };

  toggleDropdownMenu = type => () => {
    this.setState({
      isActive: {
        brand: false,
        man: false,
        girl: false,
        [type]: !this.state.isActive[type],
      }
    });
  };

  render() {
    return (
      <div className='navigation-menu'>
        <Link to="/">
          <div className='logo'></div>
        </Link>
        <Link to='/products/new'>
          <Button name='новинки' />
        </Link>
        <Button name='бренды' link='brand' list={dataBaseForBrand} onClick={this.toggleDropdownMenu('brand')} isActive={this.state.isActive['brand']} />
        <Button name='мужское' link='type' gender='male' list={dataBaseForMan} onClick={this.toggleDropdownMenu('man')} isActive={this.state.isActive['man']} />
        <Button name='женское' link='type' gender='female' list={dataBaseForGirl} onClick={this.toggleDropdownMenu('girl')} isActive={this.state.isActive['girl']} />
      </div>
    )
  }
};
