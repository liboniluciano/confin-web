import React from 'react';
import { Link } from 'react-router-dom';

import { MenuContent, ItemMenu, HeaderImg } from './styles';


const Header: React.FC = () => {
  return (
    <MenuContent>
      <Link to="/teste" style={{ textDecoration: 'none' }}>
      <ItemMenu>TRANSAÇÕES</ItemMenu>
      </Link>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <ItemMenu>
          <HeaderImg />
        </ItemMenu>
      </Link>
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <ItemMenu>SAIR</ItemMenu>
      </Link>
    </MenuContent>
  );
}

export default Header;