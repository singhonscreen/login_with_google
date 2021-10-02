import React from 'react';
import Home from './Home'
import { Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Manager from './Manager';
import Hr from './Hr';
import history from './history'

function App() {
  return (
    <>
    <Router history={history}>
    <Switch>
    <Route exact path ="/" component={Home} />
    <Route  path = "/manager/home" component={Manager} />
    <Route  path = "/hr/home" component = {Hr} />
    </Switch>
   </Router>
    </>
  );
}

export default App;
