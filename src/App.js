import React, { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Header } from './components/header';
import { Main } from './components/main';
import { ItemList } from './components/itemList';
import { dataBaseItem } from './components/navigationMenu/NavigationMenu';
import { Product } from './components/product';
import { LogIn } from './components/login/Login';
import { protectedRoute } from './components/protectedRoute/ProtectedRoute';
import './App.css';
import { Basket } from './components/basket/Basket';

const databaseUsers = {
  artem: '123',
  a: '111',
  '': '',
};

export const databaseBasket = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      isAutorized: false,
      error: '',
    }
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
    const product = dataBaseItem.filter(product => product.id === id)[0];

    databaseBasket.push(product);
  }

  render() {
    const protectedHOC = protectedRoute(this.state.isAutorized);

    return (
      <Router history={browserHistory}>
        <div className="App">
          <Header login={this.state.login} isAutorized={this.state.isAutorized} />
          <Switch>
            <Route exact path='/' render={protectedHOC(() => <Redirect to='/main' />)} />
            <Route exact path="/main" component={protectedHOC(Main)} />
            <Route exact path="/login" component={(ownProps) => <LogIn isAutorized={this.state.isAutorized} signIn={this.signIn} error={this.state.error} ownProps={ownProps} />} />
            <Route exact path="/products" component={protectedHOC(ItemList)} />
            <Route exact path="/basket" component={protectedHOC(() => <Basket basket={databaseBasket} />)} />
            <Route exact path="/products/new" component={protectedHOC(() => <ItemList dataBaseItem={dataBaseItem.filter(product => product.new)} />)} />} />
            <Route exact path="/products/man" component={protectedHOC(() => <ItemList dataBaseItem={dataBaseItem.filter(product => product.gender === 'male')} />)} />} />
            <Route exact path="/products/girl" component={protectedHOC(() => <ItemList dataBaseItem={dataBaseItem.filter(product => product.gender === 'female')} />)} />} />
            <Route exact path="/products/:filter/:category" component={protectedHOC(({ match }) => <ItemList dataBaseItem={dataBaseItem} match={match} />)} />} />
            <Route exact path="/products/:gender/:filter/:category" component={protectedHOC(({ match }) => <ItemList dataBaseItem={dataBaseItem} match={match} />)} />} />
            <Route exact path="/products/:gender/:filter/:category/:id" component={protectedHOC(({ match }) => <Product dataBaseItem={dataBaseItem} addProductInBasket={this.addProductInBasket} match={match} />)} />} />
          </Switch>
        </div>
      </Router >
    )
  };
};

export default App;
