import { Box, Button, Container, Flex,Heading,Image,Spacer,Text } from '@chakra-ui/react'
import React, { useRef,Component } from 'react'
import LandingModal from './LandingModal'
import DateModal from "./DateModal"
import Slider from "react-slick"
import TopSearch from './TopSearch'

const LandingPage = () => {
  const featuredref=useRef(null)
  const featured=[
    {
      id:1,
      src:"https://revvselfdrivecar.s3.us-west-2.amazonaws.com/offers/Banner-Flat+500+off+blue.png",
      alt:"image-1",
      height:"180px"
    },
    {
      id:2,
      src:"https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png",
      alt:"image-2",
      height:"180px"
    },
    {
      id:3,
      src:"https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png",
      alt:"image-3",
      height:"180px"
    },
    {
      id:4,
      src:"https://revvselfdrivecar.s3.us-west-2.amazonaws.com/offers/Banner-Flat+500+off+blue.png",
      alt:"image-4",
      height:"180px"
    },
  ]

  const senitized=[
    {id:1,src:"https://revvselfdrivecar.s3-us-west-2.amazonaws.com/thumbnails/Group+84.png",alt:"image-1",height:"180px"},
    {id:2,src:"https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_01-min.jpg",alt:"image-2",height:"180px"},
    {id:3,src:"https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_02-min.jpg",alt:"image-3",height:"180px"}
  ]
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
        <Flex justifyContent="space-between" w="93%" alignItems="center" m="auto">
          <Heading color="gray" p="10">Featured</Heading>
          <Box>
            <Button>{"< "}</Button>
            <Button>{">"}</Button>
          </Box>
        </Flex>
        <Flex w="93%" alignItems="center" justifyContent="center" gap="20px" m="auto">
            {featured.map((e)=>(
             <Box  >
               <Image src={e.src} alt={e.alt} height={e.height}/>
              </Box>
            ))}
 
         
        </Flex>
        <Flex justifyContent="space-between" w="93%" alignItems="center" m="auto">
          <Heading color="gray" p="10">Sanitized {"&"} safe cars</Heading>
          <Box>
            <Button>{"< "}</Button>
            <Button>{">"}</Button>
          </Box>
        </Flex>
        <Flex w="100%" alignItems="center" justifyContent="center" gap="20px">
          {senitized.map((e,ind)=>(
          <Box  >
            <Image key={ind}   src={e.src} alt={e.alt} height={e.height} />
          </Box>

          ))}
         
         
        </Flex>
        <Flex justifyContent="space-between" w="93%" alignItems="center" m="auto">
          <Heading color="gray" p="10">Why revv?</Heading>
          <Box>
            <Button>{"< "}</Button>
            <Button>{">"}</Button>
          </Box>
        </Flex>
        <Flex w="90%" justifyContent="center" m="auto" gap="30px">
          <Flex  alignItems="center" justifyContent="space-evenly" bg="white" borderRadius="6px" p="2">
            <Image  height="50px" src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/home.png' alt='Dan Abramov' />
            <Box>
              <Heading size="md" color="gray">Home delivery {"&"} return</Heading>
              <Text color="gray">On-time doorstep serice,at your preferred location and time</Text>
            </Box>
          </Flex>
          <Flex  alignItems="center" justifyContent="space-evenly" bg="white" borderRadius="6px" p="2">
            <Image  height="50px" src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/price.png' alt='Dan Abramov' />
            <Box>
              <Heading color="gray" size="md">Flexble pricing</Heading>
              <Text color="gray">Choose 'Ultimate kms' or 'with fuels' plans</Text>
            </Box>
          </Flex>
          <Flex  alignItems="center" justifyContent="space-evenly" bg="white" borderRadius="6px" p="2">
            <Image  height="50px" src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/maintained.png' alt='Dan Abramov' />
            <Box>
              <Heading size="md" color="gray">Well maintained cars</Heading>
              <Text color="gray">Regular service {"&"} maintainance; inspected before each</Text>
            </Box>
          </Flex>
         
        </Flex>
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