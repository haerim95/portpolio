import React from 'react';
import StyledTitle from './Titles';
import styled from 'styled-components';
import { Col, Row, Image } from 'antd';
import { GithubOutlined, BoldOutlined } from '@ant-design/icons';
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

  a {
    span {
      &:hover {
        text-decoration: underline;
      }
    }
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
              <span>웹 개발과 만난지 2년 6개월!</span>
            </p>
            <p className='intro'>
              웹 퍼블리셔로 2년 6개월 간 근무한 경력이 있습니다!
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
              과정을 들으며 React와 Node의 전반적인 지식을 배웠으며, 배운
              기술들을 활용해 팀프로젝트 Travelary 라는 개인여행블로그
              웹어플리케이션도 만들었고, 직접 Azure 를 통해 클라우드 서버에
              배포도 해보았습니다. 하루가 다르게 변화하는 IT 산업에서 웹
              프론트엔드 개발자 김해림도 나날이 업그레이드 될 것입니다.
            </p>
          </Paragraph>
          <Paragraph>
            <p className='subTitle'>
              <span>✅</span>
              <span>배움의 의지!</span>
            </p>
            <p className='intro'>
              개발의 즐거움은 &#39;알아가는 것&#39; 이라고 생각합니다!
            </p>
            <p className='txt'>
              웹코딩은 무궁무진한 분야하고 생각합니다. 그리고 좋은 웹 개발자가
              되기 위해 가장 중요한 것은 &#39;배우려는 의지&#39; 라고
              생각합니다. 제가 작성한 코드들이 웹 어플리케이션이 되는 기쁨을
              느낀 뒤로 배우려는 자세를 늦추지 않고 있습니다. 개인 노션과
              티스토리 블로그를 이용해 배운 것을 기록하는 습관을 가지고
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
              2년 6개월 간 퍼블리셔 일을 하고, 팀 프로젝트 개발을 하면서 느꼈던
              것은, 팀원들 간에 커뮤니케이션이 굉장이 중요하다는 것입니다.
              케이체인이라는 곳에서 웹 퍼블리셔로 일하면서 주로 디자인에 맞춘 웹
              퍼블리싱 업무를 했고, 백엔드 개발자와의 소통이 중요했습니다. 잘
              모르는 언어로 일을 진행하게 되는 경우, 퇴근 후에도 인터넷 강의와
              개발 서적을 찾아보고 스터디 모임을 가지며 공부하여 팀원들과 소통이
              가능하도록 노력했고, 주어진 기간 내에 프로젝트를 마무리할 수
              있었습니다. 팀원간의 미세한 의사소통 실수에도 개발에는 큰 영향을
              끼친다는 것을 알고 있기 때문에 저는 상대방에게 부탁할때는
              &#39;COP&#39;로, 지시를 받았을 때는 &#39;디브리핑&#39;으로 되묻는
              습관을 들였습니다.
            </p>
          </Paragraph>
        </Col>
        <Col xs={24} md={8} xl={8}>
          <ProfileImg>
            <Image src={Profile} alt='프로필 이미지' />
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
            <p className='intro'>
              그린컴퓨터아트 학원 UIUX 과정 수료 <span>1048 시간</span>
            </p>
            <p className='intro'>
              (청년여성) 클라우드 기술활용 웹개발자 과정 수료{' '}
              <span>216 시간</span>
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
      <Row style={{ marginTop: '1rem' }}>
        <Col xs={24} md={12} xl={12}>
          <Paragraph>
            <p className='subTitle'>
              <span>
                <GithubOutlined />
              </span>
              <span>깃 허브 주소</span>
            </p>
            <p className='intro'>
              <a
                href='https://github.com/haerim95'
                target='_blank'
                rel='noreferrer'
              >
                <span style={{ color: '#9e73a5' }}>
                  https://github.com/haerim95
                </span>
              </a>
            </p>
          </Paragraph>
        </Col>
        <Col xs={24} md={12} xl={12}>
          <Paragraph>
            <p className='subTitle'>
              <span>
                <BoldOutlined />
              </span>
              <span>블로그 주소</span>
            </p>
            <p className='intro'>
              <a
                href='https://haerim95.tistory.com/'
                target='_blank'
                rel='noreferrer'
              >
                <span style={{ color: '#9e73a5' }}>
                  림찌의 개발일기 바로가기
                </span>
              </a>
            </p>
          </Paragraph>
        </Col>
      </Row>
      <Skill />
    </div>
  );
};

export default AboutMe;
