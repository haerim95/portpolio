import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Row, Col, Image } from 'antd';

const { Meta } = Card;

const ImageArea = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  div {
    img {
      max-width: 100%;
    }
  }
  ul {
    list-style: none;
  }
`;

// ! image 는 id 값을 이용해서 main${id}.png 식으로 가져오는게 어떨까?
const ImageSlider = ({ id }) => {
  return (
    <>
      <ImageArea>
        <Row>
          <Col>
            <ul>
              <li>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  <Meta
                    title='Europe Street beat'
                    description='www.instagram.com'
                  />
                </Card>
              </li>
            </ul>
          </Col>
        </Row>
      </ImageArea>
    </>
  );
};

ImageSlider.propTypes = {
  id: PropTypes.any.isRequired,
};

export default ImageSlider;
