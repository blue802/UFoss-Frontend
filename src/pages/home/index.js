import React, { Fragment } from 'react'
import { Image,Box  } from "@chakra-ui/react"
import ListCourses from './Component/ListCourses'
function HomePage() {
    return (
        <Fragment>
            <Box w="100%">
                <Image src="/banner.png" alt="Segun Adebayo" />
            </Box>
            <ListCourses></ListCourses>
        </Fragment>


    )
}

export default HomePage

