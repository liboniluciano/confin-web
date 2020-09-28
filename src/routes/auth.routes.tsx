import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

// import { Container } from './styles';

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Login}/>
      <Route path="/signUp" component={SignUp} />
    </BrowserRouter>
  );
}

export default AuthRoutes;