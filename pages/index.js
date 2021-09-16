import React from 'react';
import AboutMe from '../components/AboutMe';
import AppLayout from '../components/AppLayout';
import PortpolioList from '../components/PortpolioList';
import TypingIndex from './TypingIndex';

const Home = () => {
  return (
    <AppLayout>
      <TypingIndex />
      <AboutMe />
      <PortpolioList />
    </AppLayout>
  );
};

export default Home;
