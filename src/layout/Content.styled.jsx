import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #808080;
  padding: 20px 40px;
`;

export const Link = styled(NavLink)`
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
  color: #00ffff;
  &.active {
    color: #00bfff;
  }
  text-decoration: none;
  :not(:last-child) {
    margin-right: 30px;
  }
`;
