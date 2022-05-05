import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  background-color: #008b8b;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
  border: 3px solid black;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
  border: 3px solid black;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover {
    color: white;
    background-color: #ff1493;
  }
`;
