import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage.js";
import Projects from "./components/Projects.js";
import ContactForm from "./components/ContactForm.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
class App extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){

  }

  render(){
  return (
    <Router>
      <Switch>
      <main>
        <div className="App large medium small">
          <header>
          <NavBar />
          </header>
          <div className="app-body">
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path="/contact">
               <ContactForm />
            </Route>
          </div>
          <Footer />
        </div>
      </main>
      </Switch>
    </Router>
  );
}
}

export default App;
