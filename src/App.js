import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Error from "./Error";
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
