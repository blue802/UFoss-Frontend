import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import './style.css';
import { Box, Icon } from '@chakra-ui/react';

const Paginator = props => {
  const { pages, total, size } = props;

  const handlePageClick = data => {
    console.log(data);
  };

  return (
    <Box w="full" mb="5">
      <ReactPaginate
        previousLabel={<Icon as={FaAngleLeft} />}
        nextLabel={<Icon as={FaAngleRight} />}
        pageCount={pages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Box>
  );
};

Paginator.propTypes = {
  pages: PropTypes.number,
  total: PropTypes.number,
  size: PropTypes.number,
};

export default Paginator;
