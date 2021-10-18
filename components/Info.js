import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ title, date, skill, work, url, git, information }) => {
  return (
    <>
      <dl>
        <dt>프로젝트명 : </dt>
        <dd>{title}</dd>
      </dl>
      {!date ? null : (
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
      {!git ? null : (
        <dl>
          <dt>Git : </dt>
          <dd>
            <a href={git} target='_blank' rel='noreferrer'>
              {git}
            </a>
          </dd>
        </dl>
      )}
      {!url ? null : (
        <dl>
          <dt>사이트 URL : </dt>
          <dd>
            <a href={url} target='_blank' rel='noreferrer'>
              {url}
            </a>
          </dd>
        </dl>
      )}
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

export default Info;

Info.propTypes = {
  title: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
  work: PropTypes.node.isRequired,
  git: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
  skill: PropTypes.node.isRequired,
  information: PropTypes.string.isRequired,
};
