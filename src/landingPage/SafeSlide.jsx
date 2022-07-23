import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";
import { ArrowBackIcon,ArrowForwardIcon } from '@chakra-ui/icons'

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SafeSlide(){
    const sliderRef=useRef(null)

    return (
      <div>
        <Flex justifyContent="space-between" w="93%" alignItems="center" m="auto">
          <Heading color="gray" p="10">Why revv?</Heading>
          <Box>
            <Button onClick={()=>sliderRef.current.slickPrev()}>
              <Icon as={ArrowBackIcon}/>

            </Button>
            <Button onClick={()=>sliderRef.current.slickNext()}>
              <Icon as={ArrowForwardIcon}/>

            </Button>
          </Box>
        </Flex>
        <Slider ref={sliderRef} slidesToShow={4}>
            <div style={{padding:"5px", width:"100%"}}>
                <img style={{width:"95%",borderRadius:"16px"}}  src='https://revvselfdrivecar.s3-us-west-2.amazonaws.com/thumbnails/Group+84.png' alt='safeslide' height="180px" />
            </div>
            <div style={{padding:"5px", width:"100%"}}>
                <img style={{width:"95%",borderRadius:"16px"}}  src='https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_01-min.jpg' alt='sanitised' height="180px" />
            </div>
            <div style={{padding:"5px", width:"100%"}}>
                <img  style={{width:"95%",borderRadius:"16px"}} src='https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_02-min.jpg' alt='' height="180px" />
            </div>
            <div style={{padding:"5px", width:"100%"}}>
                <img style={{width:"95%",borderRadius:"16px"}}  src='https://revvselfdrivecar.s3-us-west-2.amazonaws.com/thumbnails/Group+84.png' alt='amazon' height="180px" />
            </div>
            <div  style={{padding:"5px", width:"100%"}}>
                <img style={{width:"95%",borderRadius:"16px"}}  src='https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_03-min.jpg' alt='staging' height="180px" />
            </div>
           
        </Slider>
      </div>
    );
  }

