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

  /** Toda vez que o hook é usado, verifica se está preenchido o localStorage e seta o header nas requisições */
  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@AppConFin:user');
    const storagedToken = sessionStorage.getItem('@AppConFin:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  /** Função responsável por autenticar na aplicação e salvar no local storage */
  async function Login(mail: string, password: string) {
    const request = await api.post('/session', {
      mail,
      password
    });
    
    /** Recupera retorno da api, seta o header das requisições e salva no local storage */
    setUser(request.data);
    api.defaults.headers.Authorization = `Bearer ${request.data.token}`;

    sessionStorage.setItem('@AppConFin:user', JSON.stringify(request.data.user));
    sessionStorage.setItem('@AppConFin:token', request.data.token);
  }

  /** Função responsável por deslogar da aplicação */
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

/** Criando um hook personalizado para usar de maneira simples */
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;