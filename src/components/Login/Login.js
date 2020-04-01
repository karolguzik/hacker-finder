import React, { Component } from 'react';
import styles from './Login.module.scss';
import AppContext from '../../context';

class Login extends Component {
  state = {
    password: '',
    isLoggedIn: false,
  };

  onChange = e => {
    this.setState({
      password: e.target.value
    });
  };


  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <div className={styles.formWrapper}>
              <h1 className={styles.heading}>System login</h1>
              <form
                onSubmit={e => context.loginInSystem(e, this.state.password)}
                className={styles.form}
              >
                <input
                  className={styles.input}
                  type='password'
                  name='password'
                  placeholder='password'
                  onChange={this.onChange}
                  value={this.state.password}
                ></input>
                <button className={styles.button} type='submit'>
                  Confirm
                </button>
              </form>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Login;
