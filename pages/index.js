import React from 'react';
import AboutMe from '../components/AboutMe';
import AppLayout from '../components/AppLayout';
import ContactMe from '../components/ContactMe';
import PortpolioList from '../components/PortpolioList';
import TypingIndex from './TypingIndex';

const Home = () => {
  return (
    <AppLayout>
      <TypingIndex />
      <AboutMe />
      <PortpolioList />
      <ContactMe />
    </AppLayout>
  );
};

export default Home;
