import React, { useState } from 'react';
import { Tabs } from 'antd';
import StyledTitle from './Titles';
import StyledList from './Lists';
import workData from './workData.json';
import HoverContent from './HoverContent';

const { TabPane } = Tabs;
// const shortid = shortId.generate();

function HoverItem({ src, list }) {
  const [hoverInfo, setHoverInfo] = useState(false);

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setHoverInfo(!hoverInfo)}
      onMouseLeave={() => setHoverInfo(!hoverInfo)}
    >
      <img height={200} src={src} />
      {hoverInfo === true ? (
        <HoverContent>
          <span>{list.title}</span>
          <span>{list.skill}</span>
          {list.url !== '' ? (
            <a
              href={list.url}
              target='_blank'
              rel='noreferrer'
              style={{ marginTop: '1rem' }}
            >
              <span>{list.url}</span>
            </a>
          ) : (
            <span style={{ marginTop: '1rem' }}>{list.closed}</span>
          )}
        </HoverContent>
      ) : null}
    </div>
  );
}

const PortpolioList = () => {
  const legnth = workData.frontendList.length;
  const legnth2 = workData.publishList.length;

  return (
    <div>
      <StyledTitle>
        <span>Portpolio List ✨</span>
      </StyledTitle>
      <Tabs defaultActiveKey='1' centered>
        <TabPane tab={`Front-end(${legnth})`} key='1'>
          <p style={{ textAlign: 'center' }}>
            🍏 react.js node.js 로 만든 풀스택 프로젝트 입니다.
          </p>
          <StyledList>
            {workData.frontendList.map((list) => {
              return (
                <li key={list.id}>
                  <HoverItem
                    src={`/list/${list.img}.png`}
                    list={list.explain}
                  />
                  <p>{list.title}</p>
                </li>
              );
            })}
          </StyledList>
        </TabPane>
        <TabPane tab={`Publishing(${legnth2})`} key='2'>
          <p style={{ textAlign: 'center' }}>
            🍎 웹 퍼블리셔로 근무하며 작업한 작업물 입니다.
          </p>
          <StyledList>
            {workData.publishList.map((list) => {
              return (
                <li key={list.id}>
                  <HoverItem
                    src={`/list/${list.img}.png`}
                    list={list.explain}
                  />
                  <p>{list.title}</p>
                </li>
              );
            })}
          </StyledList>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PortpolioList;
