import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HoverContents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  span:nth-last-child(1) {
    color: #c4abc9;
  }
  a {
    span {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  button {
    background-color: #c4abc9;
    border: none;
    padding: 0.3rem 0.5rem;
    margin-top: 1rem;
    cursor: pointer;
  }
`;

const HoverContent = ({ children }) => {
  return <HoverContents>{children}</HoverContents>;
};

HoverContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HoverContent;
