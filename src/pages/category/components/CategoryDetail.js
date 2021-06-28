import {
    Box,Button, Heading, Select, HStack, Text, Collapse, useDisclosure
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

import React from 'react'

import Data from "./MOCK_DATA.json";

import { MdDehaze} from 'react-icons/md';

import CourseRowItem from './CourseRowItem';

import Filter from './FilterComponent';

function CategoryDetail(props) {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <Box>
            {[Data.category].map(item =>{
                 return (
                     <Box key={item.id}>
                         <Heading p="30px 0" size="xl">
                         {item.nameCategory}
                        </Heading>
                        <HStack position="relative">
                            <Button leftIcon={<MdDehaze />} onClick={onToggle} color="skyblue" border="1px solid skyblue">
                                Filter
                            </Button>
                            <Select placeholder="Select option" w="17%">
                                <option value="mostPopular">Most Popular</option>
                                <option value="hightestRated">Hightest Rated </option>
                                <option value="newest">Newest</option>
                            </Select>
                            <Text position="absolute" right="0" color="gray.400" fontSize="18px" >{item.courses.length} result</Text>
                        </HStack>
                        <HStack alignItems="flex-start">
                            <Collapse in={isOpen} style={{width: '32%',paddingTop: '15px'}} animateOpacity mt="18px">
                                <Filter />
                            </Collapse>
                            <Box w="100%" pl="15px" >
                                {item.courses.map(course => {
                                    return (
                                        <CourseRowItem key={course.id} data={course}/>
                                    )
                                })}
                            </Box>  
                        </HStack>
                     </Box>
                 )
             })}
        </Box>
    )
}

export default CategoryDetail
