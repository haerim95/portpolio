import React, { useCallback, useEffect } from 'react';
import useInput from '../hooks/useInput';
import StyledTitle from './Titles';
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Form = styled.form`
  background-color: #5e4462;
  padding: 2rem 4rem;
  div {
    + div {
      margin-top: 1rem;
    }
  }
  label {
    line-height: 24px;
    display: inline-block;
    text-align: right;
    font-size: 14px !important;
    color: #eeeeee;
  }
  input {
    width: 100%;
    padding-left: 10px;
    padding-bottom: 5px;
    border: none;
    border-bottom: 1px solid #eeeeee;
    background-color: transparent;
    outline: none;
    color: #e7d8ee;
    ::placeholder {
      color: #e7d8ee;
    }
  }
  textarea {
    width: 100%;
    height: calc(100% - 24px);
    padding: 10px;
    vertical-align: top;
    border: 1px solid #eeeeee;
    background-color: transparent;
    outline: none;
    resize: none;
    color: #e7d8ee;
    ::placeholder {
      color: #e7d8ee;
    }
  }
  .btnWrap {
    text-align: right;
    button {
      width: 100px;
      height: 40px;
      border-radius: 5px;
      background-color: #e7d8ee;
      border: 1px solid #e7d8ee;
      color: #5e4462;
    }
  }
`;

const ContactMe = () => {
  // emailjs 초기 세팅
  useEffect(() => {
    init('user_O303wSkf7tVofLIJptu7o');
  }, []);
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [website, setWebsite] = useInput('');
  const [introduction, setIntroduction] = useInput('');

  const onSubmit = useCallback((e) => {
    const inputNum = e.target.childElementCount - 1;
    const data = new FormData(e.target);
    const entries = data.entries();
    let failNum = 0;

    for (let i = 0; i < inputNum; i++) {
      const next = entries.next();
      const key = next.value[0];
      const value = next.value[1];

      if (!value) {
        failNum++;
        alert(`${key} 을 입력해주세요.`);
        break;
      }
    }

    if (!failNum) {
      emailjs
        .sendForm(
          'service_d84t3za',
          'template_sv21t8n',
          e.target,
          'user_O303wSkf7tVofLIJptu7o'
        )
        .then(
          (result) => {
            console.log('result.text', result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }, []);

  return (
    <div>
      <StyledTitle>
        <span>💌 Contact Me </span>
      </StyledTitle>

      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs={24} md={12} style={{ paddingRight: '3rem' }}>
            <div>
              <label>성함</label>
              <input
                type='text'
                name='name'
                placeholder='성함을 입력해주세요'
                value={name}
                onChange={setName}
              />
            </div>
            <div>
              <label>기업명</label>
              <input
                type='text'
                name='website'
                placeholder='기업명을 입력해주세요'
                value={website}
                onChange={setWebsite}
              />
            </div>
            <div>
              <label>이메일</label>
              <input
                type='text'
                name='email'
                placeholder='이메일을 입력해주세요'
                value={email}
                onChange={setEmail}
              />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <label>메일 내용</label>
            <textarea
              name='introduction'
              placeholder='메세지를 입력해주세요.'
              value={introduction}
              onChange={setIntroduction}
            />
          </Col>
        </Row>
        <div className='btnWrap'>
          <button type='submit'> 발송 </button>
        </div>
      </Form>
    </div>
  );
};

export default ContactMe;
