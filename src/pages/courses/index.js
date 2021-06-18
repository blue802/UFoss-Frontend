import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Flex, Box, Heading, Text, AspectRatio, Button } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { BsFillStarFill } from 'react-icons/bs'
function Courses(props) {
  const { course } = props;
  Courses.propTypes = {
    course: PropTypes.shape({
      title: PropTypes.string,
      descriptions: PropTypes.string,
      price: PropTypes.number,
      instructorId: PropTypes.string,
      videoIds: PropTypes.string,
      imageUrl: PropTypes.string,
      rateId: PropTypes.string,
      categoryId: PropTypes.string
    })
  }
  const [isNotSmallScreen] = useMediaQuery('(min-width: 640)');
  return (
    <Stack>
      <Flex direction={isNotSmallScreen ? "row" : 'column'}>
        <Box w='100%' h='395px' bg='#000' padding='32px 0px'>
          <Flex>
            <Box w='70%' margin='auto' >
              <Flex>
                <Box >
                  <Flex>
                    <Box w='70%' padding='0 30px'>
                      <Heading color='#fff' lineHeight='1.2' letterSpacing='-2px' fontWeight='700' marginBottom='16px'>
                        2021 Complete Python Bootcamp From Zero to Hero in Python
                      </Heading>
                      <Text color='#fff' fontSize='19px' paddingBottom='16px'> Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</Text>
                      <Flex>
                        <Box marginRight='4px'>
                          <Text fontSize='14px' fontWeight='700' color='#AE8863' >5</Text>
                        </Box>
                        <Box paddingTop='3px'>
                          <Flex>
                            <BsFillStarFill fontSize='14px' fontWeight='700' color='#AE8863' />
                            <BsFillStarFill fontSize='14px' fontWeight='700' color='#AE8863' />
                            <BsFillStarFill fontSize='14px' fontWeight='700' color='#AE8863' />
                            <BsFillStarFill fontSize='14px' fontWeight='700' color='#AE8863' />
                            <BsFillStarFill fontSize='14px' fontWeight='700' color='#AE8863' />
                          </Flex>
                        </Box>
                        <Box>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex >
      <Flex>
        <Box w='70%' margin='auto' >
          <Flex>
            <Box w='65%' bg='red' >
              <Text>123</Text>
            </Box>
            <Box width='35%' justifyContent='center'>
              <Flex direction='column'>
                <Box margin="auto">
                  <AspectRatio width='390px' height='192px' ratio={1}>
                    <iframe
                      title='naruto'
                      src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                      allowFullScreen
                    />
                  </AspectRatio>
                </Box>
                <Box>
                  <Text color='#3c3b37' fontSize='32px'>
                    $13.99
                  </Text>
                  <Button>
                    Add to cart
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Stack >
  )
}

export default Courses;
