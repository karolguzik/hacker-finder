import React, { Component } from 'react';
import styles from './Search.module.scss';
import AppContext from '../../context';

class Search extends Component {
  state = {
    username: ''
  };

  onChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <h2 className={styles.heading}>Search hackers</h2>
            <form
              onSubmit={e => context.searchUsers(e, this.state.username)}
              className={styles.form}
              autoComplete="off"
            >
              <input
                className={styles.input}
                type='text'
                name='text'
                placeholder='hacker name...'
                onChange={this.onChange}
                value={this.state.username}
                autoComplete="off"
              ></input>
              <button className={styles.button} type='submit'>
                Search
              </button>
            </form>
            <button className={styles.button} onClick={context.logoutSystem}>Logout</button>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Search;
