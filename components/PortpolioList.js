import React from 'react';
import { Image, Tabs } from 'antd';
import StyledTitle from './Titles';
import StyledList from './Lists';
import shortId from 'shortid';

const { TabPane } = Tabs;
// const shortid = shortId.generate();

const frontendList = [
  {
    id: shortId.generate(),
    title: 'Travelary',
    img: '',
  },
];

const publishList = [
  {
    id: shortId.generate(),
    title: 'Publish Soft CMS',
    img: (
      <Image
        height={200}
        src={require('../public/list/publishsoftAdmin2.png')}
      />
    ),
  },
  {
    id: shortId.generate(),
    title: 'Publish Soft PMS',
    img: '',
  },
  {
    id: shortId.generate(),
    title: '인터넷 신문 협회',
    img: '',
  },
  {
    id: shortId.generate(),
    title: 'KLB',
    img: '',
  },
  {
    id: shortId.generate(),
    title: '토큰포스트',
    img: '',
  },
  {
    id: shortId.generate(),
    title: 'econotimes',
    img: '',
  },
  {
    id: shortId.generate(),
    title: '퍼블리시 링크 V2',
    img: '',
  },
  {
    id: shortId.generate(),
    title: '코인고스트 V1 / V2',
    img: '',
  },
  {
    id: shortId.generate(),
    title: '본다빈치',
    img: '',
  },
  {
    id: shortId.generate(),
    title: 'Big Issue',
    img: '',
  },
  {
    id: shortId.generate(),
    title: 'Publish Protocol',
    img: '',
  },
];

const PortpolioList = () => {
  const legnth = frontendList.length;
  const legnth2 = publishList.length;
  return (
    <div>
      <StyledTitle>
        <span>Portpolio List ✨</span>
      </StyledTitle>
      <Tabs defaultActiveKey='1' centered>
        <TabPane tab={`Front-end(${legnth})`} key='1'>
          <StyledList>
            {frontendList.map((list) => {
              return (
                <li key={list.id}>
                  <Image />
                  <p>{list.title}</p>
                </li>
              );
            })}
          </StyledList>
        </TabPane>
        <TabPane tab={`Publishing(${legnth2})`} key='2'>
          <StyledList>
            {publishList.map((list) => {
              return (
                <li key={list.id}>
                  <div>{list.img}</div>
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
