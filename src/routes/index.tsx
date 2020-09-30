import React from 'react';
import { useAuth } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import OtherRoutes from './other.routes';

const Routes: React.FC = () => {
  /** Vendo se o usuário está autenticado pelo contexto */

  const { signed } = useAuth();

  /** Manipulando as rotas que podem ser acessadas estando autenticado ou não */
  return signed ? <OtherRoutes /> : <AuthRoutes />
}

export default Routes;