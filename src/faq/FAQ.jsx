import { Box, Flex, Heading,Text} from '@chakra-ui/react'
import React, { useState } from 'react'

const FAQ = ({question,answer}) => {
  const [show,setShow]=useState(false)
  return (
    <Box w="90%" m="auto" border="2px solid gray" p="10px" borderRadius="15px">
        <Box >
            <Flex bg="lightgray" onClick={()=>setShow(!show)} _hover={{cursor:"pointer"}}>
              <Heading size="md" mb="10px">{show ? "-":"+"}</Heading>
              <Heading size="md" mb="10px" >{question}</Heading>
            </Flex>
            <Box>
              <Text >{show ? answer: null}</Text>
            </Box>
        </Box>
    </Box>
  )
}


export default FAQ