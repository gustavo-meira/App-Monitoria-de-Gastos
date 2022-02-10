import { Flex } from '@chakra-ui/react';
import React from 'react';
import EntriesAndWithdrawals from './EntriesAndWithdrawals';

const ContentMainPage = () => (
  <Flex as="main">
    <EntriesAndWithdrawals />
  </Flex>
);

export default ContentMainPage;
