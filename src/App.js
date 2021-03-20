import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={() => <h1>Hats</h1>} />
      </Switch>
    </div>
  );
}

export default App;
