import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Checkbox,
    Icon,
    Text,
    HStack,
    Stack,
  } from "@chakra-ui/react"
  import Data from "./MOCK_DATA.json";
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Radio, RadioGroup } from "@chakra-ui/react"
function Filter() {
    let courseFiveStar = 0; 
    let courseFourStar =0;
    let courseThreeStar =0;
    let courseLessStar =0
    Data.category.courses.forEach(item =>{
        let point = Math.floor(item.scoreVote.score / (item.scoreVote.total * 2));
        point===5 ? courseFiveStar+= 1: point===4 ? courseFourStar+= 1: point===3 ? courseThreeStar+= 1: courseLessStar+= 1
    })
    const [value, setValue] = React.useState("1")
    return (
        <Accordion>
            <AccordionItem >
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold" fontSize="20px">
                        Ratings
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="column">
                    <Radio value="1">
                        <HStack>
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Text color="gray.400" fontSize="sm">(5*)</Text>
                            <Text color="gray.400" fontSize="sm">({courseFiveStar})</Text>
                        </HStack>
                    </Radio>
                    <Radio value="2">
                        <HStack>
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaRegStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Text color="gray.400" fontSize="sm">(4*)</Text>
                            <Text color="gray.400" fontSize="sm">({courseFourStar})</Text>
                        </HStack>
                    </Radio>
                    <Radio value="3">
                        <HStack>
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaRegStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaRegStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Text color="gray.400" fontSize="sm">(3*)</Text>
                            <Text color="gray.400" fontSize="sm">({courseThreeStar})</Text>
                        </HStack>
                    </Radio>
                    <Radio value="4">
                        <HStack>
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaRegStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaRegStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Icon as={FaRegStar}  fontSize="lg" color="yellow.400" mr="0.5" />
                            <Text color="gray.400" fontSize="sm">(2* & down)</Text>
                            <Text color="gray.400" fontSize="sm">({courseLessStar})</Text>
                        </HStack>
                    </Radio>
                    </Stack>
                </RadioGroup>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left"  fontWeight="bold" fontSize="20px">
                        Price
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <HStack p="2">
                        <Checkbox defaultIsChecked/>
                        <Text color="gray.400" fontSize="sm">Paid</Text>
                    </HStack>
                    <HStack p="2">
                        <Checkbox defaultIsChecked/>
                        <Text color="gray.400" fontSize="sm">Free</Text>
                    </HStack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Filter
