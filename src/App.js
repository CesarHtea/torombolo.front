import React, { Component } from 'react';
import './App.css';


import { Switch , Route } from 'react-router-dom'
// import request from 'superagent'

import Home from './components/Home'
import AllQuotes from './components/AllQuotes'
import NewQuote from './components/NewQuote'
import Detail from './components/Detail'

class App extends Component {

  render() {
    return(
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/quotes' component={ AllQuotes } />
        <Route exact path='/new' component={ NewQuote } />
        <Route path='/quote/:quoteId' component={Detail} />
      </Switch>
    )
  }
}

export default App;
