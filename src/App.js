import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage.js";
import {SkillsPage} from "./components/SkillsPage.js"
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import ContactForm from "./components/ContactForm.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
class App extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    window.onscroll = function(){scrolling()};
    //console.log('in cdm');
    let navibar = document.getElementById('navibar');
  //  console.log("nav bar", navibar);
    let sticky = navibar.offsetTop;
    //adding the sticky class on scroll
    function scrolling(){
      if(window.pageYOffset > sticky){
        navibar.classList.add('sticky');
      } else {
        navibar.classList.remove('sticky');
      }
    }
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
            <LandingPage />
            <About />
            <SkillsPage />
            <Projects />
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
