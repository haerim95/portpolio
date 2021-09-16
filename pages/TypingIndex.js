import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';

const IndexBg = styled.div`
  padding: 10rem 2rem;
  font-size: 3rem;
  background-color: #e7d8ee;
  color: #5e4462;
`;

const TypingIndex = () => {
  const txt = '안녕하세요';
  const [Text, setText] = useState('');
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
      setCount(Count + 1); // 개수 만큼 체크
    }, 100);

    if (Count === txt.length) {
      // Count를 따로 두지 않고 Text.length 체크도 가능
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
    }

    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  });

  return (
    // <>
    //   <p className='text'>{Text}</p>
    // </>
    <IndexBg>
      <ReactTypingEffect
        text={['안녕하세요', '웹 프론트엔드 개발자', '김해림 입니다.']}
        speed='200'
        eraseSpeed='200'
        eraseDelay='200'
        typingDelay='500'
      />
    </IndexBg>
  );
};

export default TypingIndex;
