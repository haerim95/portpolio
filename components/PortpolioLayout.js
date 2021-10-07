import React from 'react';
import PropTypes from 'prop-types';
import workData from './workData.json';
import ImageGroup from './ImageGroup';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const WorkInfo = styled.div`
  dl {
    display: flex;
  }
`;

const Info = ({ title, date, skill, work, url, git }) => {
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
          <dd>{url}</dd>
        </dl>
      ) : (
        <dl>
          <dt>Git repository : </dt>
          <dd>{git}</dd>
        </dl>
      )}
    </>
  );
};

const PortpolioLayout = ({ id }) => {
  const current = decodeURI(window.location.href);
  const search = current.split(`/`)[4];

  return (
    <div>
      {search === 'front'
        ? workData.frontendList.map((item) => {
            return (
              <div key={item.id}>
                {id == item.id ? (
                  <Row>
                    <Col md={12}>
                      <ImageGroup id={item.id} />
                    </Col>
                    <Col md={12}>
                      <WorkInfo>
                        <Info
                          title={item.title}
                          git={item.explain.git}
                          url={item.explain.url}
                          work={item.explain.work}
                          skill={item.explain.skill}
                          date={item.explain.date}
                        />
                      </WorkInfo>
                    </Col>
                  </Row>
                ) : null}
              </div>
            );
          })
        : workData.publishList.map((item) => {
            return (
              <div key={item.id}>
                {id == item.id ? (
                  <Row>
                    <Col md={12}>
                      <ImageGroup id={item.id} />
                    </Col>
                    <Col md={12}>
                      <WorkInfo>
                        <Info
                          title={item.title}
                          git={item.explain.git}
                          url={item.explain.url}
                          work={item.explain.work}
                          skill={item.explain.skill}
                          date={item.explain.date}
                        />
                      </WorkInfo>
                    </Col>
                  </Row>
                ) : null}
              </div>
            );
          })}
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
};

export default PortpolioLayout;
