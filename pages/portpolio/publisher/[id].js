import React from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/AppLayout';
import workData from '../../../components/workData.json';
import PortpolioLayout from '../../../components/PortpolioLayout';
import { useRouter } from 'next/router';

const Portpolio = () => {
  const router = useRouter();
  const { id } = router.query;

  // filter로 걸러주고 map 으로 데이터 받아오기
  const layout = workData.publishList
    .filter((item) => {
      if (id == item.id) {
        return item;
      }
    })
    .map((item) => {
      return (
        <div key={item.id}>
          {id == item.id ? <PortpolioLayout id={item.id} /> : null}
        </div>
      );
    });

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title> 포트폴리오 | Haerim Portpolio</title>
      </Head>
      <AppLayout>{layout}</AppLayout>
    </>
  );
};

export default Portpolio;
