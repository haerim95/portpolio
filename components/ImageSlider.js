import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import workData from './workData.json';
import { Card, Row, Col, Image } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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
    padding: 0;
    list-style: none;
  }
  .crop {
    overflow: hidden;
    border-radius: 15px;
  }
`;

const SliderWrap = styled.div`
  padding: 0 0.5rem;
  width: 100%;
  .slick-list {
    padding: 0 20% 0 0 !important;
  }
  .slick-prev:before {
    opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
    right: 0;
  }
`;

// ! image 는 id 값을 이용해서 main${id}.png 식으로 가져오는게 어떨까?
// ! sub1${item.id} 형식으로..? 헉스..
const ImageSlider = ({ id }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [],
  };

  const SubpageData = workData.publishList
    .filter((item) => {
      if (id == item.id) {
        return item;
      }
    })
    .map((item) => {
      return (
        <ImageArea key={item.id}>
          <Row>
            <Col>
              {id == item.id ? (
                <SliderWrap>
                  <Slider {...settings}>
                    {item.subList.map((images, index) => {
                      return (
                        <>
                          <Card
                            key={images.name}
                            className='crop'
                            hoverable
                            style={{ width: 340 }}
                            cover={
                              <Image
                                alt='example'
                                src={`/content/sub/${images.name}.png`}
                              />
                            }
                          >
                            <Meta
                              title='서브페이지'
                              description='Sub Page Image'
                            />
                          </Card>
                        </>
                      );
                    })}
                  </Slider>
                </SliderWrap>
              ) : null}
            </Col>
          </Row>
        </ImageArea>
      );
    });

  return <>{SubpageData}</>;
};

ImageSlider.propTypes = {
  id: PropTypes.any.isRequired,
};

export default ImageSlider;
