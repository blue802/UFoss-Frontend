import { Container } from '@chakra-ui/react'
import React from 'react'
import CategoryDetail from './Component/CategoryDetail'

function CategoryPage() {
    return (
        <Container maxW="container.2xl" mt="8vh" minH="90vh">
            <CategoryDetail/>
        </Container>
    )
}

export default CategoryPage 
