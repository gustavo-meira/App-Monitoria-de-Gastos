import React, { useContext } from 'react';
import { Container } from '@chakra-ui/react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import ContentMainPage from '../components/ContentMainPage';
import OutlaysContext from '../contexts/OutlaysContext';

const MainPage = () => {
  const { outlays } = useContext(OutlaysContext);

  return (
    <Container maxW="full" p="0">
      <Header />
      <ContentMainPage />
      { outlays.length === 0 && (
        <Redirect to="/expenses" />
      )}
    </Container>
  );
};

export default MainPage;
