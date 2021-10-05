import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header*/}
      <Header />

      <Router>
        <Switch>
          <Route path="/chat">
            {/* Chat Screen */}
            {/* Individual Chat Screen */}
          </Route>
          <Route path="/">
            {/* Tinder Cards */}
            <TinderCards />
            {/* Buttons below tinder cards */}
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;