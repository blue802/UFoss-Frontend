import { Box, Heading, HStack } from '@chakra-ui/react';
import React from 'react'
import Course from './Course';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Data from "./MOCK_DATA.json";

const courseSessions = [];
    while(Data.length) courseSessions.push(Data.splice(0,5));
function ListCourses() {
    const listCourses = courseSessions.map(session => (
        <HStack>
            {
                session.map(item =>
                        <Course key={item.id} {...item} />
                )
            }
        </HStack>
    ))
    return (
       <>
            <Box>
                <Heading m={3} fontSize="20px">It</Heading>
                <Carousel showIndicators={false} showArrows={true} showStatus={false}> 
                {listCourses}
                </Carousel>
            </Box>
            <Box>
                <Heading m={3} fontSize="20px">Design</Heading>
                <Carousel showIndicators={false} showArrows={true} showStatus={false}> 
                {listCourses}
                </Carousel>
            </Box>
       </>
    )
}

export default ListCourses
