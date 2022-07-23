import { Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import LandingModal from './LandingModal'
import DateModal from './DateModal'

const TopSearch = () => {
  return (

        <Box w="100%" h="70vh" bg="white" borderRadius='10px' boxShadow= "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" mt="15px">
            <Box mt="20px" pt="15px">
              <Flex  gap={6} bg="#49a6ba" w="70%" color="white" borderRadius="8px" m="auto" p="5px" >
                <Box >
                  <Box textAlign="center" bg="white" borderRadius="5px" color="black" p="3px" >
                    <Heading size="md">Rentals</Heading>
                    <Text>For hours {"&"} days</Text>
                    <Flex h="5px" justifyContent="space-evenly">
                      <Box transform="rotate(45deg)"   w="12px" h="12px" bg="white" m="0px" borderRadius="10px 2px 2px 2px"></Box>
                    </Flex>
                  </Box>
                </Box>
                <Box>
                  <Heading size="md">Subscribe</Heading>
                  <Text>For months{"&"} years</Text>
                </Box>
              </Flex>
                <Box p="5px" mt="15" >
                  <Flex justifyContent="center">
                    <Image src="https://www.revv.co.in/imgs/logo-rentals.svg" alt="image"/>
                  </Flex>
                    <Text mt="4" textAlign="center">Self drive car rentals in India</Text>
                </Box>
           
                <Box textAlign="center" mt="10">
                  <Button variant='outline' w="70%">
                    <LandingModal />
                  </Button>
                </Box>
                <Flex textAlign="center" w="70%" justifyContent="center" m="auto">
                    <Button variant='outline' w="70%">
                      <DateModal/>
                    </Button>
                    <Button variant='outline' w="70%">
                      <Text>End Date</Text>
                        <DateModal />
                    </Button>
                </Flex>
            </Box>
            <Spacer/>
            <Box textAlign="center" mt="10">

              <Button w="70%">Search..</Button>
            </Box>

          </Box>
  )
}

export default TopSearch