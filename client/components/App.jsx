import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'

const App = () => {
  return (
    <Router>
      <h1>Overwatch Team Matcher!</h1>
      <React.Fragment>
        <Route exact path='/' component={Home} />
      </React.Fragment>  
    </Router>
  )
}

export default App
