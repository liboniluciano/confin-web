import React from 'react';
import { useAuth } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import OtherRoutes from './other.routes';

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <OtherRoutes /> : <AuthRoutes />
}

export default Routes;