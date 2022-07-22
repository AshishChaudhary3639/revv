import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function WhyRevv(){
    const SlideRef=useRef(null)

    return (
      <Box>
        <Flex justifyContent="space-between" w="93%" alignItems="center" m="auto">
          <Heading color="gray" p="10">Why revv?</Heading>
          <Box>
            <Button onClick={()=>SlideRef.current.slickPrev()}>{"< "}</Button>
            <Button onClick={()=>SlideRef.current.slickNext()}>{">"}</Button>
          </Box>
        </Flex>
        <Slider ref={SlideRef} slidesToShow={3}>
          <Box p="5px" w="100%">
            <Flex  alignItems="center" justifyContent="space-evenly" bg="white" borderRadius="6px" p="2" gap="10px">
                <Image  height="50px" src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/maintained.png' alt='Dan Abramov' />
                <Box>
                    <Heading size="md" color="gray">Well maintained cars</Heading>
                    <Text color="gray">Regular service {"&"} maintainance inspected before each</Text>
                </Box>
            </Flex>
          </Box>
          <Box p="5px" w="100%">
                <Flex  alignItems="center" justifyContent="space-evenly" bg="white" borderRadius="6px" p="2" gap="10px">
                    <Image  height="50px" src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/price.png' alt='Dan Abramov' />
                    <Box>
                        <Heading color="gray" size="md">Flexble pricing</Heading>
                        <Text color="gray">Choose 'Ultimate kms' or 'with fuels' plans</Text>
                    </Box>
                </Flex>
          </Box>
          <Box p="5px" w="100%">
            <Flex  alignItems="center" justifyContent="space-evenly" bg="white" borderRadius="6px" p="2" gap="10px">
                <Image  height="50px" src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/home.png' alt='Dan Abramov' />
                <Box>
                    <Heading size="md" color="gray">Home delivery {"&"} return</Heading>
                    <Text color="gray">On-time doorstep serice,at your preferred location and time</Text>
                </Box>
             </Flex>
          </Box >
          <Box p="5px" w="100%">
            <Flex  alignItems="center" justifyContent="space-evenly" bg="white" borderRadius="6px" p="2" gap="10px">
                <Image  height="50px" src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/home.png' alt='Dan Abramov' />
                <Box>
                    <Heading size="md" color="gray">Home delivery {"&"} return</Heading>
                    <Text color="gray">On-time doorstep serice,at your preferred location and time</Text>
                </Box>
            </Flex>
          </Box>
          <Box p="5px" w="100%">
            <Flex  alignItems="center" justifyContent="space-evenly" bg="white" borderRadius="6px" p="2"gap="10px">
                <Image  height="50px" src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/maintained.png' alt='Dan Abramov' />
                <Box>
                    <Heading size="md" color="gray">Well maintained cars</Heading>
                    <Text color="gray">Regular service {"&"} maintainance inspected before each</Text>
                </Box>
            </Flex>
          </Box>
          <Box p="5px" w="100%">
                <Flex  alignItems="center" justifyContent="space-evenly" bg="white" borderRadius="6px" p="2"gap="10px">
                    <Image  height="50px" src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/price.png' alt='Dan Abramov' />
                    <Box>
                        <Heading color="gray" size="md">Flexble pricing</Heading>
                        <Text color="gray">Choose 'Ultimate kms' or 'with fuels' plans</Text>
                    </Box>
                </Flex>
          </Box>
          <Box p="5px" w="100%">
            <Flex  alignItems="center" justifyContent="space-evenly" bg="white" borderRadius="6px" p="2"gap="10px">
                <Image  height="50px" src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/home.png' alt='Dan Abramov' />
                <Box>
                    <Heading size="md" color="gray">Home delivery {"&"} return</Heading>
                    <Text color="gray">On-time doorstep serice,at your preferred location and time</Text>
                </Box>
             </Flex>
          </Box>
          <Box p="5px" w="100%">
            <Flex  alignItems="center" justifyContent="space-evenly" bg="white" borderRadius="6px" p="2"gap="10px">
                <Image  height="50px" src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/home.png' alt='Dan Abramov' />
                <Box>
                    <Heading size="md" color="gray">Home delivery {"&"} return</Heading>
                    <Text color="gray">On-time doorstep serice,at your preferred location and time</Text>
                </Box>
            </Flex>
          </Box>
         
        </Slider>
      </Box>
    );
  }

