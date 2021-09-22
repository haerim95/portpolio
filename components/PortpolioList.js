import React, { useState } from 'react';
import { Tabs } from 'antd';
import StyledTitle from './Titles';
import StyledList from './Lists';
import workData from './workData.json';
import HoverContent from './HoverContent';

const { TabPane } = Tabs;
// const shortid = shortId.generate();

const PortpolioList = () => {
  const legnth = workData.frontendList.length;
  const legnth2 = workData.publishList.length;

  const [hoverInfo, setHoverInfo] = useState(false);

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
                <li
                  onMouseEnter={() => setHoverInfo(!hoverInfo)}
                  onMouseLeave={() => setHoverInfo(!hoverInfo)}
                  key={list.id}
                >
                  <div style={{ position: 'relative' }}>
                    <img height={200} src={`/list/${list.img}.png`} />
                    {hoverInfo === true ? (
                      <HoverContent>
                        <span>{list.explain.title}</span>
                        <span>{list.explain.skill}</span>
                      </HoverContent>
                    ) : null}
                  </div>
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
                  <div>
                    <img height={200} src={`/list/${list.img}.png`} />
                  </div>
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
