import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Transactions from './pages/Transactions';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/transactions" component={Transactions} />
    </BrowserRouter>
  );
}

export default Routes;