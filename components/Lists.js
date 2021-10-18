import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  li {
    width: 100%;
    padding: 1rem 2rem 0;
    display: inline-block;
    text-align: center;

    div {
      border: 1px solid #ededed;
      border-radius: 10px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      width: 100%;
      overflow: hidden;
    }
    p {
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: bold;
      color: #5e4462;
    }
  }
  .singleList {
    margin-top: 10px;
    padding: 0;
    width: 322px;
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

Lists.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Lists;
