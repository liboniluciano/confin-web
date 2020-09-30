import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';


import { MenuContent, ItemMenu, HeaderImg } from './styles';


const Header: React.FC = () => {
  const { signed } = useAuth();

  return (
    <MenuContent>
      {signed ? <> 
        <Link to="/teste" style={{ textDecoration: 'none' }}>
        <ItemMenu>TRANSAÇÕES</ItemMenu>
        </Link>
      </> : null }
      <Link to="/" style={{ textDecoration: 'none' }}>
        <ItemMenu>
          <HeaderImg />
        </ItemMenu>
      </Link>
      {signed ? <> 
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <ItemMenu>SAIR</ItemMenu>
      </Link>
      </> : null }
    </MenuContent>
  );
}

export default Header;