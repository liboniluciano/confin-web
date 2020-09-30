import React, { createContext, useContext, useEffect, useState } from 'react';

import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(mail: string, password: string): Promise<void>;
  Logout(): void;
}


const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@AppConFin:user');
    const storagedToken = sessionStorage.getItem('@AppConFin:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(mail: string, password: string) {
    const request = await api.post('/session', {
      mail,
      password
    });
  
    setUser(request.data);
    api.defaults.headers.Authorization = `Bearer ${request.data.token}`;

    sessionStorage.setItem('@AppConFin:user', JSON.stringify(request.data.user));
    sessionStorage.setItem('@AppConFin:token', request.data.token);
  }

  function Logout() {
    setUser(null);

    sessionStorage.removeItem('@AppConFin:user');
    sessionStorage.removeItem('AppConFin:token');
  }
  
  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;