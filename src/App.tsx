import React from 'react';
import { AuthProvider } from './contexts/auth';

import './assets/styles/global.css';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
