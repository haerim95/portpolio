import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Row, Col } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Footer from './Footer';

const Header = styled.div`
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  a {
    color: #222222;
    text-decoration: none;
    font-weight: 700;
    span {
      padding-left: 4px;
      font-size: 0.8rem;
      font-weight: normal;
      color: #222222;
    }
  }
`;

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header>
        <Link href='/'>
          <a>Haerim Portpolio</a>
        </Link>
        <a
          href='https://github.com/haerim95'
          rel='noreferrer noopener'
          target='_blank'
        >
          <GithubOutlined /> <span>github 바로가기</span>
        </a>
      </Header>
      <Row style={{ paddingTop: '2rem' }}>
        <Col xs={24} md={24}>
          {children}
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
