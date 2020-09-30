import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Transactions from '../pages/Transactions';
import TransactionsList from '../pages/TransactionsList';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Transactions} />
      <Route path="/transactions" component={TransactionsList}/>
    </BrowserRouter>
  );
}

export default Routes;