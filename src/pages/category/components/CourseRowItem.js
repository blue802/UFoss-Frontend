import React from 'react'

import PropTypes from 'prop-types';

import { LinkBox,
    Box, Image,
    Text, LinkOverlay, Button, HStack, Heading
} from '@chakra-ui/react';

import { truncateString } from '../../../utils/stringUtils';

import StarGroup from '../../../components/StarGroup';

function CourseRowItem(props) {
    const { id, nameCourse, nameInstructor, priceCourse, scoreVote, decription, urlImage } =props.data;
    const { total, score } = scoreVote;
    const handleAddCart = ()=>{
        const itemAddCart = {
            id: id,
            name : nameCourse,
            instructor: nameInstructor,
            image: urlImage,
            price: priceCourse,
            decription: decription,
            rate: scoreVote
        }
    }
    const point = total > 0 && score / (total * 2);
    return (
        <HStack py="5" alignItems="start" borderBottomWidth="1px" borderColor="gray.200" justifyContent="space-between">
            <LinkBox  to="" >
                <LinkOverlay href="">
                    <HStack>
                        <Image 
                            w="248px"
                            h="160px"
                            objectFit="cover"
                            src={urlImage}
                            alt="Dan Abramov"
                        />
                        <Box flex="1" pl="2">
                            <Heading as="h4" fontSize="lg" pb="2">
                                <LinkOverlay href="">{nameCourse}</LinkOverlay>
                            </Heading>
                            <Text pb="2">{truncateString(decription, 140)}</Text>
                            <Text pb="2" color="gray.400">{nameInstructor}</Text>
                            <StarGroup point={point} rating={total} />
                        </Box> 
                    </HStack>
                </LinkOverlay>
            </LinkBox>
            <Box fontWeight="bold" >
                <Text>${priceCourse}</Text>
                <Button colorScheme="red" variant="outline" onClick={handleAddCart} mt="90px">
                    Add Cart
                </Button>
            </Box>
        </HStack>
    )

}

export default CourseRowItem
