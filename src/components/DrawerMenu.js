import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import DrawerNavigationLinks from './DrawerNavigationLinks';

const DrawerMenu = ({ setDrawerView, drawerView }) => (
  <Drawer
    onClose={ () => setDrawerView(false) }
    placement="left"
    isOpen={ drawerView }
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Menu de navegação</DrawerHeader>

      <DrawerBody p="8px 0">
        <DrawerNavigationLinks />
      </DrawerBody>

      <DrawerFooter>
        <Text fontSize="sm" color="gray.500">Desenvolvido por Gustavo (Wolfi) Meira</Text>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

DrawerMenu.propTypes = {
  drawerView: PropTypes.bool.isRequired,
  setDrawerView: PropTypes.func.isRequired,
};

export default DrawerMenu;
