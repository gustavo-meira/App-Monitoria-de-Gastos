import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpensesPage from '../pages/ExpensesPage';
import MainPage from '../pages/MainPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ MainPage } />
      <Route exact path="/expenses" component={ ExpensesPage } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
