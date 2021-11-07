import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  color: white;
  border: 0px solid transparent;
  background: rgb(245, 41, 110);
  background: linear-gradient(135deg, rgba(245, 41, 110, 1) 0%, rgba(243, 156, 18, 1) 100%);
  font-size: 0.9rem;
  padding: 0.5rem 1.5rem;
  border-radius: ${({ theme }) => theme.sizes.radius};
  box-shadow: 0px 0px 10px #ffc6c6;
  outline: none;
`;

const Button: React.FC = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;
