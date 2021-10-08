import React from 'react';
import PropTypes from 'prop-types';
import workData from './workData.json';
import ImageSlider from './ImageSlider';
import styled from 'styled-components';
import { Row, Col, Image } from 'antd';

const Copy = styled.div`
  padding-top: 4rem;
  dl {
    display: flex;
    align-items: center;
    dt {
      flex-basis: 135px;
      min-width: 135px;
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
      <dl>
        <dt>작업 기간 : </dt>
        <dd>{title}</dd>
      </dl>
      <dl>
        <dt>사용 언어 : </dt>
        <dd>{skill}</dd>
      </dl>
      <dl>
        <dt>작업 내용 : </dt>
        <dd>{work}</dd>
      </dl>
      {url !== '' ? (
        <dl>
          <dt>사이트 URL : </dt>
          <dd>
            <a href={url} target='_blank' rel='noreferrer'>
              {url}
            </a>
          </dd>
        </dl>
      ) : (
        <dl>
          <dt>Git repository : </dt>
          <dd>{git}</dd>
        </dl>
      )}
      <dl style={{ display: 'inline-block' }}>
        <dt style={{ textAlign: 'center', maxWidth: '135px' }}>사이트 소개</dt>
        <dd style={{ fontSize: '0.9rem', marginTop: '1rem', paddingLeft: '0' }}>
          {information}
        </dd>
      </dl>
    </>
  );
};

const PortpolioLayout = ({ id }) => {
  const current = decodeURI(window.location.href);
  const search = current.split(`/`)[4];

  const frame = {
    height: '500px',
    overflow: 'hidden',
    overflowY: 'scroll',
    border: 'solid 1px #d6d6d6',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  };

  return (
    <div>
      {search === 'front'
        ? workData.frontendList.filter((item) => {
            return (
              <div key={item.id}>
                {id == item.id ? (
                  <>
                    <Row>
                      <Col md={24}>
                        <Row>
                          <Col xs={24} md={24} style={{ padding: '0.5rem' }}>
                            <div style={frame}>
                              <Image
                                height={500}
                                src={`/content/main/${item.image.main}.png`}
                              />
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
                    <ImageSlider id={item.id} />
                  </>
                ) : null}
              </div>
            );
          })
        : workData.publishList.map((item) => {
            return (
              <div key={item.id}>
                {id == item.id ? (
                  <>
                    <Row>
                      <Col xs={12} md={12} style={{ padding: '0.5rem' }}>
                        <div style={frame}>
                          <Image src={`/content/main/${item.image.main}.png`} />
                        </div>
                      </Col>
                      <Col md={12} style={{ padding: '0.5rem' }}>
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
                    <ImageSlider id={item.id} />
                  </>
                ) : null}
              </div>
            );
          })}
    </div>
  );
};

Copy.propTypes = {
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

export default Copy;
