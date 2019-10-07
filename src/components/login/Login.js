import React, { Component } from 'react';
import { Input } from '../input';
import { FormButton } from '../formButton';
import './style.css';

export class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginValue: '',
      passwordValue: '',
    }
  }

  onChangeInput = (value, type) => {
    this.setState({
      [type]: value
    })
  };

  render() {
    if (this.props.isAutorized) {
      this.props.ownProps.history.replace('/');
    }

    return (
      <div className='wrapper-login'>
        <div className="form" >
          <h1 className="title">вход</h1>
          <Input
            errorText={this.props.error}
            placeholder="Введите логин"
            titleInput="логин"
            type="text"
            value={this.state.loginValue}
            onChange={event => this.onChangeInput(event.target.value, 'loginValue')}
          />
          <Input
            placeholder="Введите пароль"
            titleInput="пароль"
            type="password"
            value={this.state.passwordValue}
            onChange={event => this.onChangeInput(event.target.value, 'passwordValue')}
          />
          <div className="wrapper-btn">
            <FormButton
              name="Войти"
              additionalClass="btn-login"
              onClick={() => this.props.signIn(this.state.loginValue, this.state.passwordValue)}
            />
          </div>
        </div>
      </div>
    )
  };
};
