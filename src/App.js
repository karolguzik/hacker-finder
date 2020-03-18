import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AppContext from './context';
import LoginView from './views/LoginView/LoginView';
import SearchView from './views/SearchView/SearchView';
import UserView from './views/UserView/UserView';

class App extends Component {
  state = {
    isLoggedIn: false,

  }

  loginInSystem = (password) => {
    if(password === 'qwerty') {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route path="/search" component={SearchView} />
          <Route path="/user" component={UserView} />
        </Switch>
      </Router>
    );
  }
}

export default App;
