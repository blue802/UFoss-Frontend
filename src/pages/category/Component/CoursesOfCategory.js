import React from 'react'

import { LinkBox,
    Box, Image,
    Text, LinkOverlay, Button, HStack, Heading
} from '@chakra-ui/react';

import { truncateString } from '../../../utils/stringUtils';

import StarGroup from '../../../components/StarGroup';

function CoursesOfCategory(props) {
    const handleAddCart = ()=>{
        const itemAddCart = {
            id: props.id,
            name : props.nameCourse,
            instructor: props.nameInstructor,
            image: props.urlImage,
            price: props.priceCourse,
            decription: props.decription,
            rate: props.scoreVote
        }
    }
    const point = props.scoreVote.total > 0 && props.scoreVote.score / (props.scoreVote.total * 2);
    return (
        <HStack py="5" alignItems="start" borderBottomWidth="1px" borderColor="gray.200" justifyContent="space-between">
            <LinkBox  to="" >
                <LinkOverlay href="">
                    <HStack>
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
                            <StarGroup point={point} rating={props.scoreVote.total} />
                        </Box> 
                    </HStack>
                </LinkOverlay>
            </LinkBox>
            <Box fontWeight="bold" >
                <Text>${props.priceCourse}</Text>
                <Button colorScheme="red" variant="outline" onClick={handleAddCart} mt="90px">
                    Add Cart
                </Button>
            </Box>
        </HStack>
    )
}

export default CoursesOfCategory
