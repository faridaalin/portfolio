import React from "react";
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from './components/header-component'
import Menu from './components/nav/Menu'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Switch>
          <Route path='/Projects' exact component={Projects} />
          <Route path='/About' exact component={About} />
          <Route path='/Contact' exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
