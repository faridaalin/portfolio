import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HelmetContainer from "./components/helmet/HelmetContainer";
import Loader from './components/loader/Loader'

const Header = React.lazy(() => import('./components/header/header-component'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Footer = React.lazy(() => import('./components/footer/Footer'));
const Error = React.lazy(() => import('./pages/Error'));

function App() {
  return (
    <Router>
      <div className="page-container">
      <Suspense fallback={<Loader />}>
        <HelmetContainer />
        <Header />
        <div className="content-wrap">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
