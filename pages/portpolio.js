import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const portpolio = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title> 포트폴리오 | Haerim Portpolio</title>
      </Head>
      <AppLayout>내 포트폴리오</AppLayout>
    </>
  );
};

export default portpolio;
