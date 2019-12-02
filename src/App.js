import React, { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Header } from './components/header';
import { Main } from './components/main';
import { ItemList } from './components/itemList';
import { Product } from './components/product';
import { LogIn } from './components/login/Login';
import { protectedRoute } from './components/protectedRoute/ProtectedRoute';
import './App.css';
import { Basket } from './components/basket/Basket';

import airJordan from './assest/img/Air Jordan 1.jpg'
import airMax from './assest/img/Air max 97.jpg'
import airForce from './assest/img/Air force.jpg'
import gel from './assest/img/Gel-BND White.jpg'
import ozweego from './assest/img/Ozweego.jpg'
import fpGreen from './assest/img/fpgreen.jpg'
import fpRed from './assest/img/fpred.jpg'
import carharttRed from './assest/img/carharttRed.jpg'
import carharttFi from './assest/img/carharttFi.jpg'
import fpBlackR from './assest/img/fpBlackR.jpg'
import fpWhiteR from './assest/img/fpWhiteR.jpg'
import NB1 from './assest/img/NB1.jpg'
import Reebok1 from './assest/img/Reebok1.jpg'
import Lacoste1 from './assest/img/Lacoste1.jpg'
import Saucony1 from './assest/img/Saucony1.jpg'
import Levis1 from './assest/img/Levis1.jpg'
import Premiata1 from './assest/img/Premiata1.jpg'
import Face1 from './assest/img/Face1.jpg'
import Champion1 from './assest/img/Champion1.jpg'
import Lyle1 from './assest/img/Lyle1.jpg'
import FP0 from './assest/img/FP0.jpg'

var fetch = require('node-fetch');

const databaseUsers = {
  artem: '123',
  a: '111',
  '': '',
};

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

let count = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      isAutorized: false,
      error: '',
      dataBaseItem: [],
    }
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3001/data').then(res => res.json())
      .then(el => el.map(el => ({
        ...el,
        img: imgs[el.img]
      })))

    this.setState(() => ({
      dataBaseItem: res,
    }))
  }

  signIn = (name, password) => {
    const currentPassword = databaseUsers[name];

    if (currentPassword === password) {
      this.setState({ login: name, error: '', isAutorized: true });
    } else {
      this.setState({ error: 'Неверный логин или пароль' });
    }
  }

  addProductInBasket = id => {
    const product = this.state.dataBaseItem.find(product => product.id === id);
    const postData = JSON.stringify({...product});

    fetch(`http://localhost:3001/basket`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: postData,
    })
  }

  render() {
    const {dataBaseItem} = this.state;

    return (
      <Router history={browserHistory}>
        <div className="App">
          <Header login={this.state.login} isAutorized={this.state.isAutorized} />
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/main' />} />
            <Route exact path='/data' />
            <Route exact path="/main" component={Main} />
            <Route exact path="/login" component={(ownProps) => <LogIn isAutorized={this.state.isAutorized} signIn={this.signIn} error={this.state.error} ownProps={ownProps} />} />
            <Route exact path="/products" component={ItemList} />
            <Route exact path="/basket" component={() => <Basket />} />
            <Route exact path="/products/new" component={() => <ItemList dataBaseItem={dataBaseItem.filter(product => product.new)} />} />} />
            <Route exact path="/products/man" component={() => <ItemList dataBaseItem={dataBaseItem.filter(product => product.gender === 'male')} />} />} />
            <Route exact path="/products/girl" component={() => <ItemList dataBaseItem={dataBaseItem.filter(product => product.gender === 'female')} />} />} />
            <Route exact path="/products/:filter/:category" component={({ match }) => <ItemList dataBaseItem={dataBaseItem} match={match} />} />} />
            <Route exact path="/products/:gender/:filter/:category" component={({ match }) => <ItemList dataBaseItem={dataBaseItem} match={match} />} />} />
            <Route exact path="/products/:gender/:filter/:category/:id" component={({ match }) => <Product dataBaseItem={dataBaseItem} addProductInBasket={this.addProductInBasket} match={match} />} />} />
          </Switch>
        </div>
      </Router >
    )
  };
};

export default App;
