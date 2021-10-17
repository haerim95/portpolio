import React from 'react';
import PropTypes from 'prop-types';
import workData from './workData.json';
import ImageSlider from './ImageSlider';
import styled from 'styled-components';
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

const Info = ({ title, date, skill, work, url, git, information }) => {
  return (
    <>
      <dl>
        <dt>프로젝트명 : </dt>
        <dd>{title}</dd>
      </dl>
      {date === undefined ? null : (
        <dl>
          <dt>작업 기간 : </dt>
          <dd>{date}</dd>
        </dl>
      )}
      <dl>
        <dt>사용 언어 : </dt>
        <dd>{skill}</dd>
      </dl>
      <dl>
        <dt>작업 내용 : </dt>
        <dd>{work}</dd>
      </dl>
      {JSON.hasOwnProperty[url] ? (
        <dl>
          <dt>사이트 URL : </dt>
          <dd>
            <a href={url} target='_blank' rel='noreferrer'>
              {url}
            </a>
          </dd>
        </dl>
      ) : null}
      <dl style={{ display: 'inline-block' }}>
        <dt
          style={{
            textAlign: 'center',
            maxWidth: '135px',
            borderBottom: '1px solid #e7d8ee',
          }}
        >
          사이트 소개
        </dt>
        <dd style={{ fontSize: '0.9rem', marginTop: '1rem', paddingLeft: '0' }}>
          {information}
        </dd>
      </dl>
    </>
  );
};

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
        <div key={item.id}>
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
            <ImageSlider id={item.id} search={search} />
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
        <div key={item.id}>
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
            <ImageSlider id={item.id} search={search} />
          </>
        </div>
      );
    });

  return (
    <div
      style={{
        minHeight: '85vh',
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyItems: 'center',
      }}
    >
      {search === 'front' ? front : publisher}
    </div>
  );
};

PortpolioLayout.propTypes = {
  id: PropTypes.any.isRequired,
};

Info.propTypes = {
  title: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
  work: PropTypes.node.isRequired,
  git: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
  skill: PropTypes.node.isRequired,
  information: PropTypes.string.isRequired,
};

export default PortpolioLayout;
