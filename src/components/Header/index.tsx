import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';


import { MenuContent, ItemMenu, HeaderImg } from './styles';


const Header: React.FC = () => {
  const { push } = useHistory();
  const { signed, Logout } = useAuth();

  const logOut = () => {
    const confirm = window.confirm('Deseja realmente sair do sistema?')
    if(confirm) {
      Logout();
      push('/');
    }
  }

  return (
    <MenuContent>
      {signed ? <> 
        <Link to="/transactions" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <ItemMenu>TRANSAÇÕES</ItemMenu>
        </Link>
      </> : null }
      <Link to="/" style={{ textDecoration: 'none',  cursor: 'pointer' }}>
        <ItemMenu>
          <HeaderImg />
        </ItemMenu>
      </Link>
      {signed ? <> 
        <ItemMenu onClick={logOut} style={{cursor: 'pointer'}}>SAIR</ItemMenu>
      </> : null }
    </MenuContent>
  );
}

export default Header;