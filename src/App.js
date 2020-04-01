import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContext from './context';
import Login from './components/Login/Login';
import Loading from './components/Loading/Loading';
import Access from './components/Access/Access';
import SearchView from './views/SearchView/SearchView';
// import UserView from './views/UserView/UserView';
import User from './components/User/User';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    isLoggedIn: false,
    loading: false,
    access: null
  }

  searchUsers = async (e,username) => {
    e.preventDefault();

    if(username === ''){
      this.setState({
        access: 'rejected'
      });
    } else {
      const res= await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.SECRET_ID}`);

      this.setState({
        users: res.data.items,
        loading: true
      })
    }

    setTimeout(() => {
      this.setState({
        loading: false,
        access: null
      });
    }, 2000)
  }

  getUser = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.SECRET_ID}`);

    this.setState({
      user: res.data
    })
  }

  getRepos = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.SECRET_ID}`);

    this.setState({
      repos: res.data
    })
  }


  loginInSystem = (e,password) => {
    e.preventDefault();

    if(password === 'qwerty') {
      this.setState({
        isLoggedIn: true,
        access: 'granted'
      })
    } else {
      this.setState({
        access: 'rejected'
      })
    }
    
    setTimeout(() => {
      this.setState({
        access: null,
      })
    }, 2000);
  }

 logoutSystem = () => {
   this.setState({
    users: [],
    user: {},
    repos: [],
    isLoggedIn: false,
   })
 }

  render(){
    const contextElements = {
      ...this.state,
      loginInSystem: this.loginInSystem,
      logoutSystem: this.logoutSystem,
      searchUsers: this.searchUsers,
    }

    const { user, repos, isLoggedIn, loading, access } = this.state;

    return (
      <Router>
        <AppContext.Provider value={contextElements}>
          { loading && <Loading /> }
          { !isLoggedIn && <Login /> } 
          { access === 'granted' ? <Access access={access} /> : access === 'rejected' ? <Access access={access} /> : null}
          <Switch>
            <Route exact path="/" component={SearchView} />
            <Route path="/users/:login" render={props => (
              <User {...props} getUser={this.getUser} getRepos={this.getRepos} user={user} repos={repos}/>
            )} />
          </Switch>
        </AppContext.Provider>
      </Router>
    );
  }
}

export default App;
