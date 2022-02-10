import React from 'react';
import { Box, Flex, Icon, Skeleton, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const BoxMoney = ({ text, total }) => {
  const moneyColor = text === 'Entradas' ? 'green' : 'red';
  const arrow = text === 'Entradas' ? FaArrowUp : FaArrowDown;
  const totalFixed = total.toFixed(2);

  return (
    <Box>
      <Box textAlign="center">
        <Text border="1px solid black" p="2">{ text }</Text>
        <Text
          border="1px solid black"
          borderTop="0"
          p="2"
          color={ moneyColor }
          alignItems="center"
        >
          { total !== 0 ? (
            <Flex as="span" alignItems="center">
              { totalFixed }
              <Icon m="1" as={ arrow } />
            </Flex>
          ) : (
            <Skeleton as="span">R$ 0.00</Skeleton>
          ) }
        </Text>
      </Box>
    </Box>
  );
};

BoxMoney.propTypes = {
  text: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default BoxMoney;
