import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
