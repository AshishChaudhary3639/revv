import { Box, Button, Container, Flex,Heading,Image,Text } from '@chakra-ui/react'
import React, { useRef} from 'react'
import TopSearch from './TopSearch'
import Slider from 'react-slick'
import SafeSlide from "./SafeSlide"
import WhyRevv from './WhyRev'
import FeaturedSlide from './FeaturedSlide'

const LandingPage = () => {
  const SlideRef=useRef(null)
 
  return (
    <>
    <Container maxW='100%' h="90vh" bg='#fff7e2' centerContent>
      <Flex w="100%" h="70vh" gap="20px" alignItems="center" justifyContent="center">
        <Box w="47%" >
          <TopSearch/>
        </Box>
          <Box width="40%" >
              <Image src='https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp' alt='revv' w="400px" />
          </Box>
      </Flex>
    </Container>
    <Container maxW="100%" bg="#f1f4f8" h="auto">
      <Box w="90%"  m="auto" >
       
        <Box w="93%" justifyContent="center" m="auto" gap="30px">
            <FeaturedSlide/>
        </Box>
         
        <Box w="93%" justifyContent="center" m="auto" gap="30px">
            <SafeSlide/>
        </Box>
        <Box w="93%"  m="auto" >
           <WhyRevv/>
        </Box>
        <Flex justifyContent="space-between" w="93%" alignItems="center" m="auto">
          <Heading color="gray" p="10">FAQ</Heading>
        </Flex>
        <Box p="5" bg="white" borderRadius="7px" w="93%" m="auto" >
          <Box p="5">
            <Heading size="md" >Is there a speed limit?</Heading>
            <Text>Revv allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Revv strictly advises to follow local speed limits.</Text>
          </Box>
          <Box p="5">
            <Heading size="md" >Can I extend/ cancel/ modify?</Heading>
            <Text>Yes, extensions are possible subject to availability {"&"} charges. Cancellations {"&"} modifications will attract nominal charges as per our policy.</Text>
          </Box>
          <Box p="5">
            <Heading size="md" >Booking criteria {"&"} documents?</Heading>
            <Text>Min. 21 years old, have valid original government ID (Aadhar, Passport, or PAN only) and a valid driving licence for “Light Motor Vehicles”, which is min. 1 year old at the time of starting the trip..</Text>
          </Box>
          <Box p="5">
            <Heading size="md" >Are there any restricted areas?</Heading>
            <Text>Leh/Ladhakh, Spiti Valley {"&"} Kaza/Nako regions are not permitted to take Revv cars. Customer will be fully liable for any damages incurred to the car in that region.</Text>
          </Box>
        </Box>
        <Flex justifyContent="space-between" w="93%" alignItems="center" m="auto">
          <Heading color="gray" p="10" size="lg">Happy customers</Heading>
          <Box>
            <Button>{"< "}</Button>
            <Button>{">"}</Button>
          </Box>
        </Flex>
        <Flex w="93%" justifyContent="center" alignItems="center" m="auto" gap="10px">
          <Box bg="white" w="93%" p="7px">
            <Heading size="md" p="5px">Prateek Srivastava</Heading>
            <Text p="5px" fontSize='sm'>
            Nice service with on time pickup and delivery. Good customer support with friendly and very helpful staff. The car was also very smooth and the packages are pocket friendly. Overall an amazing experience. Would highly recommend😄
            </Text>
          </Box>
          <Box bg="white" w="93%" p="7px">
            <Heading size="md" p="5px">Roshan Raval</Heading>
            <Text p="5px" fontSize='sm'>
            Nice service with on time pickup and delivery. Good customer support with friendly and very helpful staff. The car was also very smooth and the packages are pocket friendly. Overall an amazing experience. Would highly recommend
            </Text>
          </Box>
          <Box bg="white" w="93%" p="7px">
            <Heading size="md" p="5px">Sanjib Sarkar</Heading>
            <Text p="5px" fontSize='sm'>
            Nice service with on time pickup and delivery. Good customer support with friendly and very helpful staff. The car was also very smooth and the packages are pocket friendly. Overall an amazing experience. Would highly recommend ❤️
            </Text>
          </Box>
          <Box bg="white" w="93%" p="7px">
            <Heading size="md" p="5px">Arijit Sarkar</Heading>
            <Text p="5px" fontSize='sm'>
            Nice service with on time pickup and delivery. Good customer support with friendly and very helpful staff. The car was also very smooth and the packages are pocket friendly. Overall an amazing experience. Would highly recommend😄
            </Text>
          </Box>
        </Flex>
       
      </Box>
      
       
    </Container>
    </>
  )
}

export default LandingPage