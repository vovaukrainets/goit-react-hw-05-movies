import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Search = styled(NavLink)`
  text-decoration: none;
  padding: 14px;
  border: 4px solid #808080;
  border-radius: 30px;
  background-color: white;
  color: black;
  :hover {
    background-color: #ff00ff;
  }
`;

export const Btn = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`;
