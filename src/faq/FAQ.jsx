import { Box, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

const FAQ = () => {
  return (
    <Box w="90%" m="auto" border="2px solid gray" p="10px">
        <Box>
            <Heading size="lg" mb="10px">What is Revv?</Heading>
            <details>Revv is a self drive car rental service that provides you with all the privacy, fun and convenience of your own car, without the hassles of owning and maintaining one. We drop and pick-up cars from your doorstep, so that you can spend time on the more important thing - your drive! The doorstep drop and pick-up of cars is our standard way of serving you, and is available throughout the areas served by us.</details>
        </Box>
        
        <Box>
            <Heading size="lg" mb="10px">Am I eligible to use Revv's services?</Heading>
            <details>To avail Revv's services, you must be at least 21 years old, and your driving license for "Light Motor Vehicles" must be at least 1 year old (at the time of starting the trip). Driving license printed on A4 sheet of paper (original or otherwise), driving license on Digilocker or M-Parivaahan app and commercial driving licenses will not be accepted.</details>
        </Box>
    </Box>
  )
}


export default FAQ