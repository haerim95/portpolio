import React from 'react';
import styled from 'styled-components';
import { PhoneOutlined, MailOutlined, GithubOutlined } from '@ant-design/icons';

const FooterArea = styled.div`
  padding: 2rem 4rem 1rem;
  background: #ededed;
`;

const Footer = () => {
  return (
    <FooterArea className='footerWrap'>
      <p>
        <PhoneOutlined /> 010-9405-0219
      </p>
      <p style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          <MailOutlined /> ajmhoho@naver.com
        </span>
        <span>
          <a href='https://github.com/haerim95' style={{ color: '#222222' }}>
            <GithubOutlined /> Git 바로가기
          </a>
        </span>
      </p>

      <p style={{ textAlign: 'center', color: '#999999' }}>Copyright 2021.</p>
    </FooterArea>
  );
};

export default Footer;
