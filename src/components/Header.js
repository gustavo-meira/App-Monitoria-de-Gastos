import React, { useState } from 'react';
import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import DrawerMenu from './DrawerMenu';

const Header = () => {
  const [drawerView, setDrawerView] = useState(false);

  return (
    <>
      <Flex
        as="header"
        alignItems="center"
        justifyContent="start"
        p="2"
        backgroundColor="cyan.600"
      >
        <IconButton
          onClick={ () => setDrawerView(!drawerView) }
          icon={ <GiHamburgerMenu /> }
          variant="ghost"
          alignSelf="flex-start"
          size="lg"
          color="gray.700"
        />
        <Heading flexGrow="1" textAlign="center" color="gray.700">
          Monitoria de Gastos
        </Heading>
      </Flex>
      <DrawerMenu drawerView={ drawerView } setDrawerView={ setDrawerView } />
    </>
  );
};

export default Header;
