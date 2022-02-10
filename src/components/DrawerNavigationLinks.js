import React from 'react';
import { Flex } from '@chakra-ui/react';
import ButtonLink from './ButtonLink';

const DrawerNavigationLinks = () => (
  <Flex as="nav" flexDir="column" width="full">
    <ButtonLink firstLink text="Home" linkTo="/" />
    <ButtonLink text="Entradas e Saidas" linkTo="/income-outcome" />
  </Flex>
);

export default DrawerNavigationLinks;
