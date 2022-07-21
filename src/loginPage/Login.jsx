import { Box, Button, FormErrorMessage, FormHelperText,FormControl, Input, Flex, Text, Spacer} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
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
              <Link to="signupModal"><Text color="blue"> Signup</Text></Link>
              
            </Flex>
              
          
        </Box>
        <Box  mt="10px">

              <Button>Submit</Button>
        </Box>

       
    </>
  )
}

export default Signup