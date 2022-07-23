import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure,Text, Heading,  Flex, Image } from "@chakra-ui/react"
import { useState } from "react"

function LandingModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState('inside')

    return (
      <>
        <Button 
            variant='ghost' 
            onClick={onOpen} 
            w="100%">
            <Flex justifyContent="start">
                <Image w="30px" src="https://cdn-icons.flaticon.com/png/128/2838/premium/2838912.png?token=exp=1658509074~hmac=fe725146b07e47e11c4cf7739b5a1003"/>
                
                </Flex> Location</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody overflow-y="scroll">
                    <Text>Top-cities</Text>
                    <Flex justifyContent="space-between" w="90%" m="auto" p="10px">
                        <Heading size="sm"> Bangalore</Heading>
                        <input type="radio"/>
                    </Flex>
                    <Flex justifyContent="space-between" w="90%" m="auto" p="10px">
                        <Heading size="sm"> Hydrabad</Heading>
                        <input type="radio"/>
                    </Flex>
                    <Flex justifyContent="space-between" w="90%" m="auto" p="10px">
                        <Heading size="sm">Mumbai</Heading>
                        <input type="radio"/>
                    </Flex>
                    <Flex justifyContent="space-between" w="90%" m="auto" p="10px">
                        <Heading size="sm">Delhi-NRC</Heading>
                        <input type="radio"/>
                    </Flex>
                    <Flex justifyContent="space-between" w="90%" m="auto" p="10px">
                        <Heading size="sm">Chennai</Heading>
                        <input type="radio"/>
                    </Flex>
                    <Flex justifyContent="space-between" w="90%" m="auto" p="10px">
                        <Heading size="sm">Pune</Heading>
                        <input type="radio"/>
                    </Flex>
                     <hr />
                     
                    <Text p="10px">Other-cities</Text>
                    <Flex justifyContent="space-between" w="90%" m="auto" p="10px">
                        <Heading size="sm" color="gray">Kolkata</Heading>
                        <input type="radio"/>
                    </Flex>
                    <Flex justifyContent="space-between" w="90%" m="auto" p="10px">
                        <Heading size="sm" color="gray">Bhubneswar</Heading>
                        <input type="radio"/>
                    </Flex>
                    <Flex justifyContent="space-between" w="90%" m="auto" p="10px">
                        <Heading size="sm" color="gray">Chandigarh</Heading>
                        <input type="radio"/>
                    </Flex>
                    <Flex justifyContent="space-between" w="90%" m="auto" p="10px">
                        <Heading size="sm" color="gray">Ahamdabad</Heading>
                        <input type="radio"/>
                    </Flex> <Flex justifyContent="space-between" w="90%" m="auto" p="10px">
                        <Heading size="sm" color="gray">Lucknow</Heading>
                        <input type="radio"/>
                    </Flex>

           
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default LandingModal