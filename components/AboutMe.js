import React from 'react';
import StyledTitle from './Titles';
import styled from 'styled-components';
import { Col, Row, Image } from 'antd';
import Profile from '../public/img/profile.jpeg';
import Skill from './Skill';

const Paragraph = styled.div`
  p.subTitle {
    font-size: 1rem;
    font-weight: bold;
    span + span {
      margin-left: 10px;
    }
  }
  .intro {
    font-size: 1rem;
    color: #9e73a5;
    margin-bottom: 0.5rem;
    span {
      display: inline-block;
      margin-left: 1rem;
      color: #666666;
    }
  }
  .txt {
    word-break: keep-all;
    color: #666666;
  }

  & + & {
    margin-top: 2rem;
  }
`;

const ProfileImg = styled.div`
  margin-left: 1rem;
  text-align: right;
  img {
    max-width: 100%;
    max-height: 400px;
  }
  @media only screen and (max-width: 752px) {
    text-align: center;
  }
`;

const AboutMe = () => {
  return (
    <div style={{ padding: '0 2rem' }}>
      <StyledTitle>
        <span>웹 프론트엔드 개발자 김해림은 어떤 사람? 🤔</span>
      </StyledTitle>
      <Row>
        <Col xs={24} md={16} xl={16} className='intGroup'>
          <Paragraph>
            <p className='subTitle'>
              <span>✅</span>
              <span>웹 퍼블리셔 경력 2년 6개월! 반올림 해서 3년!</span>
            </p>
            <p className='intro'>
              웹 프론트엔드 개발자 김해림은 퍼블리싱을 2년 6개월 동안 한 경력이
              있습니다!
            </p>
            <p className='txt'>
              자사의 서비스 웹 페이지부터 Admin 페이지 및 SI 서비스를 퍼블리싱한
              경력이 있습니다. HTML, CSS3, JavaScript, Jquery, Ajax 언어를
              사용해왔습니다. 또한 php 객체에서 데이터를 가져오는 간단한
              프론트엔드 업무도 함께 해왔습니다. 언제나 프로젝트는 책임감을
              가지고 기간 내에 서비스를 완성해 냈습니다!
            </p>
            <p className='txt'>
              또한, 남부여성발전센터에서 진행한 클라우드 기술활용 웹개발자
              과정을 들으며 React와 Node의 전반적인 지식을 배웠으며, 직접 Azure
              를 통해 클라우드 서버에 배포하는 경험도 겪었습니다.
            </p>
          </Paragraph>
          <Paragraph>
            <p className='subTitle'>
              <span>✅</span>
              <span>배움의 의지!</span>
            </p>
            <p className='intro'>
              개발의 즐거움은 &#39;알아가는 것 &#39; 이라고 생각합니다!
            </p>
            <p className='txt'>
              눈 깜박하면 바뀌는 개발 시장에서 가장 중요한 것은 &#39;배우려는
              의지&#39; 라고 생각합니다. 제가 작성한 코드들이 웹 어플리케이션이
              되는 기쁨을 느낀 뒤로 배우려는 자세를 늦추지 않고 있습니다. 개인
              노션과 티스토리 블로그를 이용해 배운 것을 기록하는 습관을 가지고
              있습니다.
            </p>
          </Paragraph>
          <Paragraph>
            <p className='subTitle'>
              <span>✅</span>
              <span>COP와 디브리핑을 익힌 개발자!</span>
            </p>
            <p className='intro'>
              불화는 싫어요! 커뮤니케이션을 중시하는 개발자입니다!
            </p>
            <p className='txt'>
              3년 간 퍼블리셔 일을 하고, 팀 프로젝트 개발을 하면서 느꼈던 것은,
              팀원들 간에 커뮤니케이션이 굉장이 중요하다는 것입니다. 팀원간의
              미세한 의사소통 실수에도 개발에는 큰 영향을 끼친다는 것을 알고
              있기 때문입니다. 때문에 저는 상대방에게 부탁할때는
              &#39;COP&#39;로, 지시를 받았을 때는 &#39;디브리핑&#39;으로 되묻는
              습관을 들였습니다.
            </p>
          </Paragraph>
        </Col>
        <Col xs={24} md={8} xl={8}>
          <ProfileImg>
            <Image
              src={process.env.BACKEND_URL + '/public/img/profile.jpeg'}
              alt='프로필 이미지'
            />
          </ProfileImg>
        </Col>
      </Row>
      <Row style={{ marginTop: '2rem' }}>
        <Col xs={24} md={12} xl={12}>
          <Paragraph>
            <p className='subTitle'>
              <span>🎓</span>
              <span>교육 이수 내용</span>
            </p>
            <p className='intro'>그린컴퓨터아트 학원 UIUX 과정 수료</p>
            <p className='intro'>
              (청년여성) 클라우드 기술활용 웹개발자 과정 수료
            </p>
          </Paragraph>
        </Col>
        <Col xs={24} md={12} xl={12}>
          <Paragraph>
            <p className='subTitle'>
              <span>📝</span>
              <span>경력</span>
            </p>
            <p className='intro'>
              ㈜케이체인
              <span>웹 퍼블리셔 - 2018.12 ~ 2021.05</span>
            </p>
          </Paragraph>
        </Col>
      </Row>
      <Skill />
    </div>
  );
};

export default AboutMe;
