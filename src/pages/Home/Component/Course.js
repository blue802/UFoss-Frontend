import React from 'react'
import { LinkBox,
    Box, Image, Flex,
    Text, LinkOverlay,
    Popover,PopoverArrow,PopoverTrigger,
    PopoverContent, PopoverCloseButton
    ,PopoverHeader,PopoverBody, PopoverFooter, ButtonGroup, Button } from '@chakra-ui/react';
import { MdStar } from "react-icons/md";
import {Link} from "react-router-dom";
import './course.css';

function Course(props) {
    return (
        // <LinkBox  to="" p="5" maxW="320px" className="abc">
        //     <LinkOverlay href="">
        //         <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
        //         <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short" height="45px"overflow="hidden" >
        //         {props.nameCourse}
        //         </Text>
        //         <Text mt={2}>{props.nameInstructor}</Text>
        //         <Text mt={2}>{props.priceCourse}</Text>    
        //         <Flex mt={2} align="center">
        //             <Box as={MdStar} color="orange.400" />
        //             <Text ml={1} fontSize="sm">
        //             <b>{props.scoreVote}</b>
        //             </Text>
        //         </Flex>
        //     </LinkOverlay>
        //     <Image src="/banner.png" alt="Segun Adebayo" className="xyz" />
        // </LinkBox>
        <LinkBox  to="" p="5" maxW="320px" >
            <Popover trigger="hover" placement="auto">
                <PopoverTrigger >
                    <LinkOverlay href="">
                        <Box align="left">
                            <Image borderRadius="md" src="https://bit.ly/2k1H1t6"  />
                            <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short" height="45px"overflow="hidden" >
                            {props.nameCourse}
                            </Text>
                            <Text mt={2}>{props.nameInstructor}</Text>
                            <Text mt={2}>{props.priceCourse}$</Text>    
                            <Flex mt={2} align="center">
                                <Box as={MdStar} color="orange.400" />
                                <Text ml={1} fontSize="sm">
                                <b>{props.scoreVote}</b>
                                </Text>
                            </Flex>
                        </Box>
                    </LinkOverlay>
                </PopoverTrigger>
                <PopoverContent color="#333" bg="white" borderColor="#dcdacb">
                    <PopoverHeader pt={4} fontWeight="bold" border="0">
                    {props.nameCourse}
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        <Text pb={4} align="left" fontWeight="bold">Intrustor: {props.nameInstructor}</Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </PopoverBody>
                    <PopoverFooter
                    border="0"
                    d="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}
                    >
                    
                    <ButtonGroup size="lg" width="100%">
                        <Button backgroundColor="#ec5252" width="100%" _hover={{backgroundColor: "#cc4848"}}>Add To Card</Button>
                    </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </LinkBox>
        
    )
}

export default Course
 