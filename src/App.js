import React, { Component } from 'react';
import Profile from './Profile';
import HabitsContainer from './HabitsContainer';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <HabitsContainer />
      </div>
    );
  }
}

export default App;
