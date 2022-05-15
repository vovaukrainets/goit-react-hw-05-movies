import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  background-color: #2f4f4f;
  padding-bottom: 20px;
  padding: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
  border: 5px solid black;
  background-color: white;
  color: black;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
  border: 4px solid black;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background-color: black;
  color: antiquewhite;
  :hover {
    background-color: #ef0d0d;
  }
`;
