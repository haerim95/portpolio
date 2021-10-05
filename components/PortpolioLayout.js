import React from 'react';
import PropTypes from 'prop-types';
import workData from './workData.json';
import ImageGroup from './ImageGroup';
import styled from 'styled-components';

const WorkInfo = styled.div`
  dl {
    display: flex;
  }
`;

const PortpolioLayout = ({ id }) => {
  return (
    <div>
      {workData.publishList.map((item) => {
        return (
          <div key={item.id}>
            {id == item.id ? (
              <div>
                <div>
                  <ImageGroup id={item.id} />
                </div>
                <WorkInfo>
                  <dl>
                    <dt>프로젝트명 : </dt>
                    <dd>{item.title}</dd>
                  </dl>
                  <dl>
                    <dt>작업 기간 : </dt>
                    <dd>{item.title}</dd>
                  </dl>
                  <dl>
                    <dt>사용 언어 : </dt>
                    <dd>{item.explain.skill}</dd>
                  </dl>
                  <dl>
                    <dt>작업 내용 : </dt>
                    <dd>{item.explain.work}</dd>
                  </dl>
                  {item.explain.url !== '' ? (
                    <dl>
                      <dt>사이트 URL : </dt>
                      <dd>{item.explain.url}</dd>
                    </dl>
                  ) : (
                    <dl>
                      <dt>Git repository : </dt>
                      <dd>{item.explain.git}</dd>
                    </dl>
                  )}
                </WorkInfo>
              </div>
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

export default PortpolioLayout;
