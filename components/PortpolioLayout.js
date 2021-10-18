import React from 'react';
import PropTypes from 'prop-types';
import workData from './workData.json';
import ImageSlider from './ImageSlider';
import styled from 'styled-components';
import Info from './Info';
import { Row, Col, Image } from 'antd';

const WorkInfo = styled.div`
  dl {
    display: flex;
    align-items: center;
    dt {
      flex-basis: 140px;
      min-width: 140px;
      font-size: 1.2rem;
      font-weight: 700;
      text-align: right;
      word-spacing: normal;
      padding: 0.2rem 1rem;
      background-color: #e7d8ee;
      color: #5e4462;
    }
    dd {
      padding-left: 15px;
      font-size: 1rem;
      word-break: keep-all;
      color: #5e4462;
      a {
        color: #5e4462;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const PortpolioLayout = ({ id }) => {
  // front / publish 나누기
  const current = decodeURI(window.location.href);
  const search = current.split(`/`)[4];

  // 메인 이미지 영역 css
  const frame = {
    height: '100%',
    maxHeight: '500px',
    overflow: 'hidden',
    overflowY: 'scroll',
    border: 'solid 1px #d6d6d6',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  };

  // filter로 걸러주고 map 으로 데이터 받아오기 - front 리스트
  const front = workData.frontendList
    .filter((item) => {
      if (id == item.id) {
        return item;
      } else {
        return null;
      }
    })
    .map((item) => {
      return (
        <div
          key={item.id}
          style={{
            display: 'flex',
            width: '100%',
            minHeight: '85vh',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <>
            <Row style={{ alignItems: 'center' }}>
              <Col md={12} xs={24}>
                <Row>
                  <Col xs={24} md={24} style={{ padding: '0.5rem' }}>
                    <div style={frame}>
                      <Image src={`/content/main/${item.image.main}.png`} />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12} style={{ padding: '0.5rem' }}>
                <WorkInfo>
                  <Info
                    title={item.title}
                    git={item.explain.git}
                    url={item.explain.url}
                    work={item.explain.work}
                    skill={item.explain.skill}
                    date={item.explain.date}
                    information={item.explain.information}
                  />
                </WorkInfo>
              </Col>
            </Row>
            <ImageSlider
              id={item.id}
              search={search}
              style={{ width: '100%' }}
            />
          </>
        </div>
      );
    });
  // filter로 걸러주고 map 으로 데이터 받아오기 - 퍼블리셔 리스트
  const publisher = workData.publishList
    .filter((item) => {
      if (id == item.id) {
        return item;
      }
    })
    .map((item) => {
      return (
        <div
          key={item.id}
          style={{
            display: 'flex',
            width: '100%',
            minHeight: '85vh',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div>
            <Row>
              <Col md={12} xs={24}>
                <Row>
                  <Col xs={24} md={24} style={{ padding: '0.5rem' }}>
                    <div style={frame}>
                      <Image src={`/content/main/${item.image.main}.png`} />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12} style={{ padding: '0.5rem' }}>
                <WorkInfo>
                  <Info
                    title={item.title}
                    git={item.explain.git}
                    url={item.explain.url}
                    work={item.explain.work}
                    skill={item.explain.skill}
                    date={item.explain.date}
                    information={item.explain.information}
                  />
                </WorkInfo>
              </Col>
            </Row>
            <ImageSlider
              id={item.id}
              search={search}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      );
    });

  return <div>{search === 'front' ? front : publisher}</div>;
};

PortpolioLayout.propTypes = {
  id: PropTypes.any.isRequired,
};

export default PortpolioLayout;
