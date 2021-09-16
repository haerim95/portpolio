import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 3.5rem;
  span {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    background-color: #e7d8ee;
    color: #5e4462;
  }
`;

const Titles = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Titles;
