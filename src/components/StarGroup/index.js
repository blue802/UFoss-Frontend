import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarGroup = ({ votes, showAvg = false }) => {
  let point = votes.total > 0 && votes.score / (votes.total * 2);
  const avgScore = point.toPrecision(2);

  const listStar = new Array(5);
  for (let i = 0; i < 5; i++) {
    if (point >= 1) {
      listStar.push(FaStar);
      point -= 1;
    } else if (point >= 0.5) {
      listStar.push(FaStarHalfAlt);
      point -= 0.5;
    } else {
      listStar.push(FaRegStar);
    }
  }

  return (
    <HStack display="flex" fontSize="sm" mb="1">
      {showAvg && <Text pt="0.5">{avgScore} </Text>}
      <Box>
        {listStar.map((icon, index) => (
          <Icon
            as={icon}
            key={index}
            fontSize="lg"
            color="yellow.400"
            mr="0.5"
          />
        ))}
      </Box>
      <Text pt="0.5">({votes.total} ratings)</Text>
    </HStack>
  );
};

StarGroup.prototype = {
  votes: PropTypes.shape({
    total: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
  }),
  showAvg: PropTypes.bool,
};

export default StarGroup;
