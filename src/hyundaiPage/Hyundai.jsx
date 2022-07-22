import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import TopSearch from '../landingPage/TopSearch'
import HowWorks from './HowWorks'

const Hyundai = () => {
  return (
    <>
    <Container maxW='100%' h="auto"  centerContent m="0px" p="0px">
        <Flex w="100%" h="90vh" gap="20px" bg='#5e7175' justifyContent="center" >
          <Box w="47%" >
            <TopSearch/>
          </Box>
          <Flex w="40%" h="20vh" mt="21px" >

            <Box w="100%" bg="white" p="15px" borderRadius="10px">
              <Text>Looking for Hyundai Subscription</Text>
              <Flex>
                  <Heading size="lg">By the year</Heading>
                  <Heading size="lg" color="blue">Explore </Heading>
              </Flex>
              
            </Box>
          </Flex>
        </Flex>
    </Container>
    <Box w="87%" m="auto">
       <Heading size="lg" mt="40px">How it works</Heading>
       <HowWorks/>
    </Box>
    </>
  )
}

export default Hyundai