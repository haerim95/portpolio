import React from 'react';
import { Tabs } from 'antd';
import StyledTitle from './Titles';
import StyledList from './Lists';
import shortId from 'shortid';
import workData from './publisher.json';

const { TabPane } = Tabs;
// const shortid = shortId.generate();

const frontendList = [
  {
    id: shortId.generate(),
    title: 'Travelary',
    img: '',
  },
];

// const publishList = [
//   {
//     id: shortId.generate(),
//     title: 'Publish Soft CMS',
//     explain: {
//       title: '퍼블리시 소프트 Admin Page',
//       work: '퍼블리싱 / 유지보수',
//     },
//     img: (
//       <img height={200} src={require('../public/list/publishsoftAdmin2.png')} />
//     ),
//   },
//   {
//     id: shortId.generate(),
//     title: 'Publish Soft PMS',
//     img: (
//       <img height={200} src={require('../public/list/publishsoftAdmin2.png')} />
//     ),
//   },
//   {
//     id: shortId.generate(),
//     title: '인터넷 신문 협회',
//     img: <img height={200} src={require('../public/list/internetNews.png')} />,
//   },
//   {
//     id: shortId.generate(),
//     title: 'KLB',
//     img: <img height={200} src={require('../public/list/klb.png')} />,
//   },
//   {
//     id: shortId.generate(),
//     title: '토큰포스트',
//     img: <img height={200} src={require('../public/list/tp.png')} />,
//   },
//   {
//     id: shortId.generate(),
//     title: 'EconoTimes',
//     img: <img height={200} src={require('../public/list/econotimes.png')} />,
//   },
//   {
//     id: shortId.generate(),
//     title: '퍼블리시 링크 V2',
//     img: <img height={200} src={require('../public/list/link.png')} />,
//   },
//   {
//     id: shortId.generate(),
//     title: '코인고스트 V1 / V2',
//     img: <img height={200} src={require('../public/list/cg.png')} />,
//   },
//   {
//     id: shortId.generate(),
//     title: '본다빈치',
//     img: <img height={200} src={require('../public/list/bdvc.png')} />,
//   },
//   {
//     id: shortId.generate(),
//     title: 'Big Issue',
//     img: <img height={200} src={require('../public/list/bis.png')} />,
//   },
//   {
//     id: shortId.generate(),
//     title: 'Publish Protocol',
//     img: <img height={200} src={require('../public/list/protocol.png')} />,
//   },
//   {
//     id: shortId.generate(),
//     title: 'Publish Toolkit',
//     img: <img height={200} src={require('../public/list/toolkit.png')} />,
//   },
// ];

const PortpolioList = () => {
  const legnth = frontendList.length;
  // const legnth2 = publishList.length;
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
            {frontendList.map((list) => {
              return (
                <li key={list.id}>
                  <div>{list.img}</div>
                  <p>{list.title}</p>
                </li>
              );
            })}
          </StyledList>
        </TabPane>
        <TabPane tab={`Publishing(2)`} key='2'>
          <p style={{ textAlign: 'center' }}>
            🍎 웹 퍼블리셔로 근무하며 작업한 작업물 입니다.
          </p>
          <StyledList>
            {workData.publishList.map((list) => {
              const url = list.img;
              return (
                <li key={list.id}>
                  <div>
                    <img
                      height={200}
                      src={require('../public/list/' + url + '.png')}
                    />
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
