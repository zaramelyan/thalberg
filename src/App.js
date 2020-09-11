import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import './App.css';

//components import
import Navigation from './components/Navigation';
import Authenticate from './components/Authenticate';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import AppForm from './components/Form';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
    <Navigation />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Authenticate}/>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/form" component={Form}/>
      </Switch>
    </HashRouter>
    </div>
  );
}

export default App;
