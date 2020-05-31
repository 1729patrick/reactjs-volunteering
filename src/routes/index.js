import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Albums from '../pages/Albums';
import Home from '../pages/Home';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route exact path="/albums" component={Albums}></Route>
      </Switch>
    </BrowserRouter>
  );
};
