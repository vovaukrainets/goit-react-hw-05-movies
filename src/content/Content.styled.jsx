import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #2f4f4f;
  padding: 20px 40px;
`;

export const Link = styled(NavLink)`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: #00ffff;
  &.active {
    color: #00ffff;
  }

  text-decoration: none;
  :not(:last-child) {
    margin-right: 30px;
  }
`;
