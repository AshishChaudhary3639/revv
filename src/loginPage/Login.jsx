import { Box, Button, FormErrorMessage, FormHelperText,FormControl, Input, Flex, Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import SignupModal2 from '../component/Modal'


const Signup = () => {
     const toast = useToast()

    const [email,setEmail]=useState("")
    const [password,setPassword]=("")

    const isEmail = email === ''
    const isPassword = password === ''
  return (
    <>
        <Box >
         
           <FormControl isInvalid={isEmail}>

              <Input 
                  onChange={(e)=>setEmail(e.target.value)}  
                  type="email" 
                  placeholder="Enter Email"/>
                  {!isEmail ? (
                    <FormHelperText>
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
            </FormControl>
           <FormControl isInvalid={isPassword}>
            
              <Input 
                  onChange={(e)=>setPassword(e.target.value)} 
                  type="password" 
                  placeholder="Enter Password"/>

                  {!isPassword ? (
                    <FormHelperText>
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                  )}
            </FormControl>
            <Flex justifyContent="space-evenly" w="60%">
              <Text>Don't have account yet?</Text>
             <Button color="blue" variant="link"> <SignupModal2/></Button>
              
            </Flex>
              
          
        </Box>
        <Box  mt="10px">
        <Button  onClick={() =>
                    toast({
                      title: 'Account created.',
                      description: "You are successfuly logedin.",
                      status: 'success',
                      duration: 9000,
                      isClosable: true,
                    })
                   }
             >Submit</Button>
        </Box>

       
    </>
  )
}

export default Signup