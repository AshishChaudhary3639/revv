import { Box, Button, Flex, Heading, Icon, Image } from "@chakra-ui/react";
import { ArrowBackIcon,ArrowForwardIcon } from '@chakra-ui/icons'
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function FeaturedSlide(){
    const sliderRef=useRef(null)

    return (
      <div>
        <Flex justifyContent="space-between" w="93%" alignItems="center" m="auto">
          <Heading color="gray" p="10">Featured</Heading>
          <Box>
            <Button onClick={()=>sliderRef.current.slickPrev()}>
              <Icon as={ArrowBackIcon}/>
            </Button>
            <Button onClick={()=>sliderRef.current.slickNext()}>
              <Icon as={ArrowForwardIcon}/>
            
            </Button>
          </Box>
        </Flex>
        <Slider ref={sliderRef} slidesToShow={3}>
           

            <div style={{padding:"5px", width:"100%"}}>
                <img style={{width:"95%",borderRadius:"16px"}} src='https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png' alt='feature-1' height="170px" />
            </div>
            <div style={{paddingLeft:"15px"}}>
                <img  style={{width:"95%",borderRadius:"16px"}} src='https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png' alt='feature-2' height="180px" />
            </div>
            <div style={{padding:"5px", width:"100%"}}>
                <img style={{width:"95%"}}  src='https://revvselfdrivecar.s3.us-west-2.amazonaws.com/offers/Banner-Flat+500+off+blue.png' alt='feature-3' height="180px" />
            </div>
            <div style={{padding:"5px", width:"100%"}}>
                <img style={{width:"95%",borderRadius:"16px"}}  src='https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png' alt='feature-2' height="180px" />
            </div>
          
           
        </Slider>
      </div>
    );
  }

