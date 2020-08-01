import React from "react";
import Home from './Home'
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./App.css";
import Header from "./components/header-component";




function App() {

  return (
    <Router>
      <div className="page-container">
      <Header />
        <div className="content-wrap">
          {/*A Switch looks trough its children <Route> and
           renders the first one that matches the current URL */}
           {/* <Home /> */}
          <Switch>
         
            <Route path="/" exact component={Home} />
            <Route path="/Projects" exact component={Projects} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
          
          </Switch>
          
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
