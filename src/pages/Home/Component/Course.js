import React from 'react'
import { LinkBox,
    Box, Image, Flex,
    Text, LinkOverlay,
    Popover,PopoverArrow,PopoverTrigger,
    PopoverContent,PopoverHeader,PopoverBody, PopoverFooter, ButtonGroup, Button
} from '@chakra-ui/react';

import { MdStar } from "react-icons/md";
import trancateString from '../../../utils/trancateString'
function CourseCard(props) {
    console.log("abc")
    return (
        <LinkBox  to="" p="5" maxW="320px" >
            <Popover trigger="hover" placement="auto">
                <PopoverTrigger >
                    <LinkOverlay href="">
                        <Box align="left">
                            <Image borderRadius="md" src="https://bit.ly/2k1H1t6"  />
                            <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short" height="45px" overflow="hidden" >
                            {props.nameCourse}
                            </Text>
                            <Text mt={2}>{props.nameInstructor}</Text>
                            <Text mt={2}>{props.priceCourse}$</Text>    
                            <Flex mt={2} align="center">
                                <Box as={MdStar} color="orange.400" />
                                <Text ml={1} fontSize="sm" fontWeight="bold">
                                    {props.scoreVote}
                                </Text>
                            </Flex>
                        </Box>
                    </LinkOverlay>
                </PopoverTrigger>
                <PopoverContent color="black" bg="white" borderColor="gray.300">
                    <PopoverHeader pt={4} fontWeight="bold" border="0">
                    {props.nameCourse}
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverBody >
                        <Text pb={4} align="left" fontWeight="bold" >Intrustor: {props.nameInstructor}</Text>
                        <Text textOverflow="ellipsis"
                            overflow="hidden"
                            whiteSpace="wrap">
                            {trancateString(props.decription,180)}
                        </Text>
                    </PopoverBody>
                    <PopoverFooter
                    border="0"
                    d="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}
                    >
                    
                    <ButtonGroup size="lg" width="100%">
                        <Button backgroundColor="red.500" width="100%" _hover={{backgroundColor: "red.600"}}>Add To Card</Button>
                    </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </LinkBox>
        
    )
}

export default CourseCard
 