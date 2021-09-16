import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  li {
    width: 32%;
    padding: 1rem 2rem 0;
    display: inline-block;
    text-align: center;

    div {
      width: 100%;
    }
    p {
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: bold;
      color: #5e4462;
    }
  }
  img {
    max-width: 100%;
  }
`;

const Lists = ({ children }) => {
  return (
    <div>
      <StyledList>{children}</StyledList>
    </div>
  );
};

export default Lists;
