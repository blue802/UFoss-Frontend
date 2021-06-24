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
                     <HStack p="15px 0" borderBottom="solid 1px #ddd"> 
                        <Image 
                            w="24%"
                            h="150px"
                            objectFit="cover"
                            src={props.urlImage}
                            alt="Dan Abramov"
                        />
                        <Box w="75%" >
                            <Heading as="h4" fontSize="lg" p="0 5px 5px 5px">
                                <LinkOverlay href="">{props.nameCourse}</LinkOverlay>
                            </Heading>
                            <Text p="5px">{truncateString(props.decription,140)}</Text>
                            <Text p="5px" color="gray.400">{props.nameInstructor}</Text>
                            <StarGroup votes={props.scoreVote} />
                         </Box>
                         <Box top="20px" right="0" position="absolute" fontWeight="bold">
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
