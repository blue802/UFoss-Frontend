import { Container } from '@chakra-ui/react'
import React from 'react'
import ListCourses from './Component/CategoryDetail'

function index() {
    return (
        <Container maxW="container.2xl" mt="8vh" minH="90vh">
            <ListCourses/>
        </Container>
    )
}

export default index
