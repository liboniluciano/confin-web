import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

export const MenuContent = styled.div`
  height: 6rem;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #202020;
  margin-bottom: auto;
  @media (min-width: 700px) {
  }
`;

export const HeaderImg = styled.img.attrs({
  src: logo,
})`
  width: 25rem;
`;

export const ItemMenu = styled.span`
  margin-right: 1.5rem;
  max-width: 100vw;
  display: flex;
  align-items: center;
  height: 3.2rem;
  font: 700 3rem Poppins;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
`;
