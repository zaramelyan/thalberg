import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//components import
import Navigation from './components/Navigation';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
    <Navigation />
    <Router>
      <Switch>
        <Route exact path="/" component={Form}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/answers" component={Home}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
