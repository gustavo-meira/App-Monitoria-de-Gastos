import React from 'react';
import { Button, Link as RouterLink } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonLink = ({ text, linkTo, firstLink }) => (
  <RouterLink
    as={ Link }
    to={ linkTo }
    width="full"
    margin="0"
  >
    <Button
      width="full"
      p="6"
      variant="ghost"
      border="1px solid black"
      borderLeft="0"
      borderRight="0"
      borderRadius="0"
      rightIcon={ <FaArrowRight /> }
      borderTop={ !firstLink && 0 }
    >
      { text }
    </Button>
  </RouterLink>
);

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  firstLink: PropTypes.bool,
};

ButtonLink.defaultProps = {
  firstLink: false,
};

export default ButtonLink;
