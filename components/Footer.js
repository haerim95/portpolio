import React from 'react';
import styled from 'styled-components';
import { PhoneOutlined } from '@ant-design/icons';

const FooterArea = styled.div`
  padding: 2.5rem 4rem;
  background: #ededed;
`;

const Footer = () => {
  return (
    <FooterArea>
      <p>
        <PhoneOutlined /> 010-9405-0219
      </p>
    </FooterArea>
  );
};

export default Footer;
