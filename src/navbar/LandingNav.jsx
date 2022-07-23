import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Flex,Spacer,Image, Icon } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import LoginModal from '../loginPage/LoginModal'
import SignupModal from '../signupPage/SignupModal'

const LandingNav = () => {
  return (
    <Box >
        <Flex minWidth='max-content' alignItems='center' gap='2' color="black" w="88%" m="auto">
            <Link to="/"><Button  variant='outline'> <Icon as={ArrowBackIcon}/></Button></Link>

            

            <Box p='2' >
            <Image src='https://www.revv.co.in/grapheneImages/newopen/logo.svg' alt='revv' />
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Link to="hyundai"><Button colorScheme='teal' variant='outline'>Hyundai Subscription</Button></Link>
                <Button colorScheme='teal' variant='outline'>Mahindra Subscription</Button>
                <Link to="/FAQData"><Button colorScheme='teal' variant='outline'>FAQ</Button></Link>
                <Button >
                  <SignupModal />
                </Button>
                <Button>
                  <LoginModal/>
                </Button>
            </ButtonGroup>
        </Flex>
    </Box>
  )
}

export default LandingNav