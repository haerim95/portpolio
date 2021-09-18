import React from 'react';
import { List, Card, Image } from 'antd';
import styled from 'styled-components';

const SkillList = styled.div`
  margin-top: 3rem;
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .ant-card-bordered {
    border: none !important;
  }
`;

const Skill = () => {
  const data = [
    {
      title: 'React.js',
      img: <Image src={require('../public/img/react.png')} />,
    },
    {
      title: 'Javascript',
      img: <Image src={require('../public/img/javascript.png')} />,
    },
    {
      title: 'CSS',
      img: <Image src={require('../public/img/css.png')} />,
    },
    {
      title: 'Sass',
      img: <Image src={require('../public/img/sass.png')} />,
    },
    {
      title: 'Git',
      img: <Image src={require('../public/img/git.png')} />,
    },
    {
      title: 'node.js',
      img: <Image src={require('../public/img/node.png')} />,
    },
    {
      title: 'Express',
      img: <Image src={require('../public/img/express.png')} />,
    },
    {
      title: 'Jquery',
      img: <Image src={require('../public/img/jquery.png')} />,
    },
    {
      title: 'MySQL',
      img: <Image src={require('../public/img/mysql.png')} />,
    },
    {
      title: 'Azure',
      img: <Image src={require('../public/img/azure.png')} />,
    },
  ];

  return (
    <SkillList>
      <h3>🔥 My SKILL</h3>
      <List
        grid={{ gutter: 16, column: 5 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card style={{ textAlign: 'center;' }}>
              {item.img}
              <p style={{ marginTop: '.5rem' }}>{item.title}</p>
            </Card>
          </List.Item>
        )}
      />
    </SkillList>
  );
};

export default Skill;
