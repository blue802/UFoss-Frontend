import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Flex, Box, Heading, Text, AspectRatio, Button, Spacer } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { BsFillStarFill } from 'react-icons/bs';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';


import Lesson from './compnents/lesson'

function CourseDetail(props) {
  const { course } = props;
  const [valueScrollY, setValueScrollY] = React.useState();
  CourseDetail.propTypes = {
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
  const currentScroll = () => {
    setValueScrollY(window.scrollY);
  }
  window.addEventListener('scroll', currentScroll);
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
        <Box w='70%' margin='auto' position='relative'>
          <Flex >
            <Box w='65%' borderWidth='1px' borderColor='#DCDACB' position='relative' height='1000px'>
              <Flex direction='column' justifyContent='space-between'>
                <Box>
                  <Flex direction='column'>
                    <Box borderWidth='1px' borderColor='#DCDACB'>
                      <Flex direction='column'>
                        {/* This is lessons */}
                        <Lesson />
                        <Lesson />
                        <Lesson />
                        <Lesson />
                        <Lesson />
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Box position='absolute' bottom='0' left='0' width='100%'>
                  <Button colorScheme='#fff' width='100%' textAlign='center' padding='20px 0px' border='1px solid #0F7C90' color='#0F7C90'>Show more</Button>
                </Box>
              </Flex>
            </Box>
            <Box width='35%' justifyContent='center' position={valueScrollY > 399 ? "fixed" : "absolute"} top={valueScrollY > 399 ? "30px" : "-350px"} right={valueScrollY > 399 ? "115px" : "-80px"} zIndex='9'>
              <Flex direction='column'>
                <Box margin="auto" bg='#fff' boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;" border='1px solid #fff'>
                  <AspectRatio width='390px' height='192px' ratio={1}>
                    <iframe
                      title='naruto'
                      src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                      allowFullScreen
                    />
                  </AspectRatio>
                  <Box padding='24px'>
                    <Text color='#3c3b37' fontSize='32px' fontWeight='700'>
                      $13.99
                    </Text>
                    <Button w='full' fontWeight='800' bg='#EC5252' textColor='#fff' fontSize='16px' padding='25px 0px' marginBottom='10px'>
                      Add to cart
                    </Button>
                    <Button w='full' fontWeight='800' borderColor='#0F7C90' borderWidth='1px' bg='#fff' textColor='#0F7C90' fontSize='16px' padding='25px 0px' marginBottom='25px'>
                      Buy now
                    </Button>
                    <Text fontSize='12px' textAlign='center' >30-Day Money-Back Guarantee</Text>
                    <Box>
                      <Text marginBottom='8px' color='#3c3b37' fontWeight='900'>This course include:</Text>
                      <Flex direction='column'>
                        <Box padding='4px 0'>
                          <Flex >
                            <Box paddingTop='2px'><AiOutlinePlaySquare /></Box>
                            <Text marginLeft='10px' fontSize='14px' color='#3c3b37'>22 hours on-demand video</Text>
                          </Flex>
                        </Box>
                        <Box padding='4px 0'>
                          <Flex >
                            <Box paddingTop='2px'><AiOutlinePlaySquare /></Box>
                            <Text marginLeft='10px' fontSize='14px' color='#3c3b37'>22 hours on-demand video</Text>
                          </Flex>
                        </Box>
                        <Box padding='4px 0'>
                          <Flex >
                            <Box paddingTop='2px'><AiOutlinePlaySquare /></Box>
                            <Text marginLeft='10px' fontSize='14px' color='#3c3b37'>22 hours on-demand video</Text>
                          </Flex>
                        </Box>
                        <Box padding='4px 0'>
                          <Flex >
                            <Box paddingTop='2px'><AiOutlinePlaySquare /></Box>
                            <Text marginLeft='10px' fontSize='14px' color='#3c3b37'>22 hours on-demand video</Text>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex >
    </Stack >
  )
}

export default CourseDetail;
