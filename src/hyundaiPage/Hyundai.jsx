import { Box, Container, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import TopSearch from '../landingPage/TopSearch'
import HowWorks from './HowWorks'

const Hyundai = () => {
  return (
    <>
    <Container maxW='100%' h="auto"  centerContent m="0px" p="0px">
        <Flex 
            w="100%" 
            h="90vh" 
            gap="20px" 
            background="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejDyPr9eRs0puyVWlhlY4SDLAd-d7LhlgEw&usqp=CAU') center/cover no-repeat"  
            justifyContent="center" 
            objectFit="cover"
            >
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
    </Box >
    <Box mt="50px">
      <Flex w="90%" justifyContent="center" gap="30px">
        <Box 
         _hover={{
          cursor:"pointer",
          borderRadius:"13px",
          border:"2px solid lightgray"

         }}
        >
          <Image w="150px" src="https://www.revv.co.in/imgs/company_logo/the-hindu-newpaper.webp" alt="the hindu"/>
        </Box>
        <Box 
         _hover={{
          cursor:"pointer",
          borderRadius:"13px",
          border:"2px solid lightgray"

         }}
        >
          <Image w="150px" src="https://www.revv.co.in/imgs/company_logo/The-Economic-Times.webp" alt="the economic"/>
        </Box>
        <Box 
         _hover={{
          cursor:"pointer",
          borderRadius:"13px",
          border:"2px solid lightgray"

         }}
        >
          <Image w="150px" src="https://www.revv.co.in/imgs/company_logo/Indian_express.webp" alt="the indian express"/>
        </Box>
        <Box 
         _hover={{
          cursor:"pointer",
          borderRadius:"13px",
          border:"2px solid lightgray"

         }}
        >
          <Image w="150px" src="https://www.revv.co.in/imgs/company_logo/BW-logo.png" alt="Business world"/>
        </Box>
        <Box 
         _hover={{
          cursor:"pointer",
          borderRadius:"13px",
          border:"2px solid lightgray"

         }}
        >
          <Image w="150px" src="https://www.revv.co.in/imgs/company_logo/YourStory.png" alt="your story"/>
        </Box>
        <Box 
         _hover={{
          cursor:"pointer",
          borderRadius:"13px",
          border:"2px solid lightgray"

         }}
        >
          <Image w="150px" src="https://www.revv.co.in/imgs/company_logo/businessinsider.png" alt="Business insider"/>
        </Box>
      
      
      </Flex>
    </Box>
    <Box w="90%" m="auto" >
      <Flex mt="120px">
        <Heading>Our Journey </Heading>
        <Heading color="gray">so far</Heading>
      </Flex>
     
      <Flex justifyContent="space-between" gap="30px" w="100%"  mt="40px">
        <Box>
          <Image src="https://www.revv.co.in/grapheneImages/newopen/ic-happy-cus.svg" alt="subscriber"/>
          <Heading mt="10px">2500+</Heading>
          <Text>Happy Subscribers</Text>
        </Box>
        <Box>
          <Image src="https://www.revv.co.in/grapheneImages/newopen/ic-across-india.svg" alt="cities"/>
          <Heading mt="10px">22+ Cities</Heading>
          <Text>Across India</Text>
        </Box>
        <Box>
          <Image src="https://www.revv.co.in/grapheneImages/newopen/ic-subscription.svg" alt="Traveled"/>
          <Heading mt="10px">50Mn+</Heading>
          <Text>Kms Travelled</Text>
        </Box>
        <Box>
          <Image src="https://www.revv.co.in/grapheneImages/newopen/ic-customer-rating.svg" alt="Rating"/>
          <Heading mt="10px">4.8 / 5</Heading>
          <Text>20k+ reviewers</Text>
        </Box>
      </Flex>
    </Box>
    <Box bg="black" mt="50px" p="40px">
      <Flex justifyContent="center" gap="30px" pt="50px" alignItems="center">
        <Box lineHeight="25px">
          <Heading color="white" size="md">Top 7 Hyundai Car Subscription Cities</Heading>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}} >Hyundai Car Subscription in Bangalore</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Hyderabad</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Mumbai</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Delhi-NCR</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Chennai</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Pune</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Kolkata</Text>
        </Box>
        <Box lineHeight="25px">
          <Heading size="md" color="white">Top 7 Hyundai Car Subscription Cities</Heading>
          <Text  color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Bangalore</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Hyderabad</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Mumbai</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Delhi-NCR</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Chennai</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Pune</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Kolkata</Text>
        </Box>
        <Box lineHeight="25px" color="white">
          <Heading size="md">Top 7 Hyundai Car Subscription Cities</Heading>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}} >Hyundai Car Subscription in Bangalore</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Hyderabad</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Mumbai</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Delhi-NCR</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Chennai</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Pune</Text>
          <Text color="gray" pt="10px" lineHeight="100%" _hover={{cursor:"pointer",color:"white"}}>Hyundai Car Subscription in Kolkata</Text>
        </Box>
      </Flex>
    </Box>
    </>
  )
}

export default Hyundai