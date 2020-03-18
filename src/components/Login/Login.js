import React from 'react';
import styles from './Login.module.scss';

const Login = () => {
  // const onChange = (e) => {
  //   this.setState({
  //     inputValue: e.target.value
  //   })

  //   console.log(this.state.inputValue)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.loginInSystem(this.state.inputValue)
  // }

  return (
    <div className={styles.loginWrapper}>
      <h1 className={styles.loginHeading}>System login</h1>
      <form className={styles.loginForm}>
        <input
          className={styles.loginInput}
          type='password'
          name='password'
          placeholder='password'
          // onChange={this.onChange}
          // value={this.state.inputValue}
        ></input>
        <button className={styles.button} type='submit'>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Login;
