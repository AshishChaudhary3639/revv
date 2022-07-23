import { Box, Circle, Container, Flex, Heading, Icon,Image,Text} from '@chakra-ui/react'

import React from 'react'

const HowWorks = () => {
  return (
        <>
        <Flex gap="150px" mt="40px">
            <Box w="20%">
                <Circle 
                    border="15px solid lightgray" 
                    boxShadow="dark-lg" size='120px'  
                    _hover={{
                        background: "teal",
                        color: "white",
                        cursor:"pointer",
                        fontSize:"30px"
                    }} >
                    <Image 
                        p="15px" 
                        src="https://cdn-icons.flaticon.com/png/128/657/premium/657076.png?token=exp=1658509895~hmac=e06e5093113db0660ef854f0c1332bff" 
                        alt="steering" 
                       />

                </Circle>
                <Heading size="md" mt="40px">Book {"&"} Pay</Heading>
                <Text>Pick your favourite car, time and place</Text>
            </Box>
            <Box w="20%">
                <Circle border="15px solid lightgray" boxShadow="dark-lg" size='120px' >
                    <Image p="8px" src="https://cdn-icons-png.flaticon.com/128/89/89102.png" alt="book-and-pay"/>
                </Circle>
                <Heading size="md" mt="40px">Receive</Heading>
                <Text>We will deliver the car to your doorstep</Text>
            </Box>
            <Box w="20%">
                <Circle border="15px solid lightgray" boxShadow="dark-lg" size='120px' >
                    <Image p="10px" src="https://cdn-icons-png.flaticon.com/128/2/2087.png" alt="steering" />
                </Circle>
                <Heading size="md" mt="40px">Drive</Heading>
                <Text>Enjoy your Revv self drive</Text>
            </Box>  <Box w="20%">
                <Circle border="15px solid lightgray" boxShadow="dark-lg" size='120px' >
                    <Image p="10px" src="https://cdn-icons-png.flaticon.com/128/770/770444.png" alt="steering" />
                </Circle>
                <Heading size="md" mt="40px">Return</Heading>
                <Text>Get the car back to your preferred return location, and we will take it from there</Text>
            </Box>

        </Flex>
        </>
  
  )
}

export default HowWorks