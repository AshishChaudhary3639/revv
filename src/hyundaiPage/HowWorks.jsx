import { Box, Circle, Container, Flex, Heading, Icon,Text} from '@chakra-ui/react'

import React from 'react'

const HowWorks = () => {
  return (
        <>
        <Flex gap="150px" mt="40px">
            <Box w="20%">
                <Circle border="15px solid lightgray" boxShadow="dark-lg" size='120px' >

                </Circle>
                <Heading size="md" mt="40px">Book {"&"} Pay</Heading>
                <Text>Pick your favourite car, time and place</Text>
            </Box>
            <Box w="20%">
                <Circle border="15px solid lightgray" boxShadow="dark-lg" size='120px' >

                </Circle>
                <Heading size="md" mt="40px">Receive</Heading>
                <Text>We will deliver the car to your doorstep</Text>
            </Box>
            <Box w="20%">
                <Circle border="15px solid lightgray" boxShadow="dark-lg" size='120px' >

                </Circle>
                <Heading size="md" mt="40px">Drive</Heading>
                <Text>Enjoy your Revv self drive</Text>
            </Box>  <Box w="20%">
                <Circle border="15px solid lightgray" boxShadow="dark-lg" size='120px' >

                </Circle>
                <Heading size="md" mt="40px">Return</Heading>
                <Text>Get the car back to your preferred return location, and we will take it from there</Text>
            </Box>

        </Flex>
        </>
  
  )
}

export default HowWorks