import { Box, Button, FormErrorMessage, FormHelperText,FormControl, Input} from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [email,setEmail]=useState("")
    const [user,setUser]=useState("")
    const [password,setPassword]=("")

    const isEmail = email === ''
    const isUser = user === ''
    const isPassword = password === ''
  return (
    <>
        <Box >
           <FormControl isInvalid={isUser}>
              <Input 
                  onChange={(e)=>setUser(e.target.value)}  
                  type="text" placeholder="Enter user"/>

                  {!isUser ? (
                    <FormHelperText>
                    
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>User is required.</FormErrorMessage>
                  )}
            </FormControl>
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
              
          
        </Box>
        <Box  mt="10px">

              <Button>Submit</Button>
        </Box>

       
    </>
  )
}

export default Signup