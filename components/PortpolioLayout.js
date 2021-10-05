import React from 'react';
import PropTypes from 'prop-types';
import workData from './workData.json';
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
                <div></div>
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
