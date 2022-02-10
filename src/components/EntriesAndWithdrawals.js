import { Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import OutlaysContext from '../contexts/OutlaysContext';
import monthToString from '../services/monthToString';
import BoxMoney from './BoxMoney';

const EntriesAndWithdrawals = () => {
  const currentDay = new Date().toLocaleDateString();
  const currentMonth = currentDay.split('/')[1];
  const { outlays } = useContext(OutlaysContext);
  const dayEntries = outlays.filter((item) => (
    item.type === 'entry' && item.date === currentDay
  ));
  const dayWithdrawals = outlays.filter((item) => (
    item.type === 'withdrawal' && item.date === currentDay
  ));
  const totalWithdrawals = dayWithdrawals.reduce(((curr, item) => curr + item.value), 0);
  const totalEntries = dayEntries.reduce(((curr, item) => curr + item.value), 0);
  console.log(totalEntries, totalWithdrawals);

  return (
    <Flex width="full" flexDir="column">
      <Text
        textAlign="center"
        fontSize="2xl"
        marginTop="4"
      >
        { `Dia ${currentDay}` }
      </Text>
      <Text m="4" textAlign="center">
        { monthToString(currentMonth) }
      </Text>
      <Flex justifyContent="space-evenly">
        <BoxMoney text="Entradas" total={ totalWithdrawals } />
        <BoxMoney text="Saidas" total={ totalEntries } />
      </Flex>
    </Flex>
  );
};

export default EntriesAndWithdrawals;
