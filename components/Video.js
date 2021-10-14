import React from 'react';
import { Row, Col, Typography } from 'antd';
import ReactPlayer from 'react-player';

const { Title } = Typography;

const Video = () => {
  return (
    <Row
      style={{
        borderTop: '2px solid #eeeeee',
        borderBottom: '2px solid #eeeeee',
        marginTop: '1rem',
        padding: '1rem 0',
      }}
    >
      <Col xs={24} md={12} style={{ padding: '1rem' }}>
        <Title level={3} style={{ color: '#5e4462' }}>
          <span style={{ color: '#cccccc' }}>Travelary</span> 시연 영상
        </Title>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=lfv6GsVSSkI'
          playing
          controls
          style={{ maxWidth: '100%' }}
        />
      </Col>
      <Col xs={24} md={12} style={{ padding: '1rem' }}>
        <Title level={3} style={{ color: '#5e4462' }}>
          <span style={{ color: '#cccccc' }}>Travelary</span> 프로젝트 소개 영상
        </Title>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=DeDLg2NXJ-o'
          controls
          style={{ maxWidth: '100%' }}
        />
      </Col>
    </Row>
  );
};

export default Video;
