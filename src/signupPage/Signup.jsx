import { Box, Button, FormErrorMessage, FormHelperText,FormControl, Input} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'

const Signup = () => {
  const toast = useToast()
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
                  value={user}
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
                  value={email}
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
                  value={password}
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

              <Button  
            
              onClick={() =>
                    toast({
                      title: 'Account created.',
                      description: "Your account successfuly created.",
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