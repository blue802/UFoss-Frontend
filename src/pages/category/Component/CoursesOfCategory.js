import React from 'react'

import { LinkBox,
    Box, Image,
    Text, LinkOverlay,
    Popover,PopoverArrow,PopoverTrigger,
    PopoverContent,PopoverBody, PopoverFooter, Button, HStack, Heading
} from '@chakra-ui/react';

import { truncateString } from '../../../utils/stringUtils';

import StarGroup from '../../../components/StarGroup';

function CoursesOfCategory(props) {
    return (
        <LinkBox  to="" >
            <Popover trigger="hover" placement="auto">
                <PopoverTrigger >
                    <LinkOverlay href="">
                     <HStack py="5" alignItems="start" borderBottomWidth="1px" borderColor="gray.200"> 
                        <Image 
                            w="248px"
                            h="160px"
                            objectFit="cover"
                            src={props.urlImage}
                            alt="Dan Abramov"
                        />
                        <Box flex="1" pl="2">
                            <Heading as="h4" fontSize="lg" pb="2">
                                <LinkOverlay href="">{props.nameCourse}</LinkOverlay>
                            </Heading>
                            <Text pb="2">{truncateString(props.decription, 140)}</Text>
                            <Text pb="2" color="gray.400">{props.nameInstructor}</Text>
                            <StarGroup votes={props.scoreVote} />
                         </Box>
                         <Box fontWeight="bold">
                             <Text>${props.priceCourse}</Text>
                         </Box>
                     </HStack>
                    </LinkOverlay>
                </PopoverTrigger>
                <PopoverContent
                    color="black"
                    bg="white"
                    borderColor="gray.300"
                    px="3"
                    py="4"
                >
                <PopoverArrow />
                <PopoverBody>
                    <Heading as="h4" fontSize="2xl" mb="2">
                        {truncateString(props.nameCourse, 50)}
                    </Heading>
                    <Text mb="3" fontSize="sm" color="gray.400">
                        {props.nameInstructor}
                    </Text>
                    <Text
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="wrap"
                    fontSize="sm"
                    >
                    {truncateString(props.decription, 180)}
                    </Text>
                </PopoverBody>
                <PopoverFooter
                    border="0"
                    d="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}
                >
                    <Button colorScheme="red" width="full" color="white">
                    Add To Card
                    </Button>
                </PopoverFooter>
                </PopoverContent>
            </Popover>
        </LinkBox>
    )
}

export default CoursesOfCategory
