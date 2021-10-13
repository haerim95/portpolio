import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import workData from './workData.json';
import { Card, Row, Col, Image } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Video from './Video';

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
  .slick-slide {
    &.slcick-slide {
      margin-left: 15px;
    }
  }
`;

const ImageSlider = ({ id, search }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 752,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  const frontSub = workData.frontendList
    .filter((item) => {
      if (id == item.id) {
        return item;
      }
    })
    .map((item) => {
      return (
        <ImageArea key={item.id}>
          <Row>
            <Col md={24}>
              {id == item.id ? (
                <SliderWrap>
                  <Slider {...settings}>
                    {item.subList.map((images) => {
                      return (
                        <div key={images.name}>
                          <Card
                            className='crop'
                            hoverable
                            style={{ display: 'block', margin: '0.5rem' }}
                            ls={6}
                            md={6}
                            xs={24}
                            cover={
                              <Image
                                alt='example'
                                style={{ maxHeight: '226px' }}
                                src={`/content/sub/${images.name}.png`}
                              />
                            }
                          >
                            <Meta
                              title='서브페이지'
                              description='Sub Page Image'
                            />
                          </Card>
                        </div>
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

  const publishuerSub = workData.publishList
    .filter((item) => {
      if (id == item.id) {
        return item;
      }
    })
    .map((item) => {
      return (
        <ImageArea key={item.id}>
          <Row>
            <Col md={24}>
              {id == item.id ? (
                <SliderWrap>
                  <Slider {...settings}>
                    {item.subList.map((images) => {
                      return (
                        <div key={images.name}>
                          <Card
                            className='crop'
                            hoverable
                            style={{ display: 'block', margin: '0.5rem' }}
                            ls={6}
                            md={6}
                            xs={24}
                            cover={
                              <Image
                                alt='example'
                                style={{ maxHeight: '226px' }}
                                src={`/content/sub/${images.name}.png`}
                              />
                            }
                          >
                            <Meta
                              title='서브페이지'
                              description='Sub Page Image'
                            />
                          </Card>
                        </div>
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

  return (
    <>
      {search === 'front' ? (
        <>
          <Video /> {frontSub}
        </>
      ) : (
        publishuerSub
      )}
    </>
  );
};

ImageSlider.propTypes = {
  id: PropTypes.any.isRequired,
  search: PropTypes.any.isRequired,
};

export default ImageSlider;
