import React from 'react'
import { Container,Image,Box  } from "@chakra-ui/react"
import ListCourses from './Component/ListCourses'
import Slider from 'react-slick'
function Home() {
    return (
        <Container maxW="container.xxl" >
            <Box w="100%">
                <Image src="/banner.png" alt="Segun Adebayo" />
            </Box>
            <ListCourses></ListCourses>
        </Container>
    )
}

export default Home

