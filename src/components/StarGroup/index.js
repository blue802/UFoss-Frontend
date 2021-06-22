import { Box, Icon } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarGroup = ({ score, votes }) => {
  let point = Math.ceil(score / votes);

  const listStar = new Array(5);
  for (let i = 0; i < 5; i++) {
    if (point >= 2) {
      listStar.push(FaStar);
      point -= 2;
    } else if (point === 1) {
      listStar.push(FaStarHalfAlt);
      point -= 1;
    } else {
      listStar.push(FaRegStar);
    }
  }

  return (
    <Box display="flex" alignItems="center" fontSize="sm" mb="1">
      {listStar.map(icon => (
        <Icon as={icon} fontSize="lg" color="yellow.500" mr="0.5" />
      ))}
      ({votes})
    </Box>
  );
};

StarGroup.prototype = {
  score: PropTypes.number,
  votes: PropTypes.number,
};

export default StarGroup;
