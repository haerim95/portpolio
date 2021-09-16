import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  li {
    width: 32%;
    display: inline-block;
    text-align: center;

    div {
      width: 100%;
    }

    & + & {
      margin-left: 2%;
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
