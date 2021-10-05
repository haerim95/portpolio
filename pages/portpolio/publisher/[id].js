import React from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/AppLayout';
import workData from '../../../components/workData.json';
import PortpolioLayout from '../../../components/PortpolioLayout';
import { useRouter } from 'next/router';

const Portpolio = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title> 포트폴리오 | Haerim Portpolio</title>
      </Head>
      <AppLayout>
        {workData.publishList.map((item) => (
          <div key={item.id}>
            {id == item.id ? <PortpolioLayout id={item.id} /> : null}
          </div>
        ))}
      </AppLayout>
    </>
  );
};

export default Portpolio;
