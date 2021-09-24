import React from 'react';
import styled from 'styled-components';

const HoverContents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  span {
    display: block;
    flex: 1;
  }
`;

const HoverContent = ({ children }) => {
  return <HoverContents>{children}</HoverContents>;
};

export default HoverContent;
