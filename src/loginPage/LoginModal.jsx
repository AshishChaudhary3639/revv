import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure,Box } from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login"

function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState('inside')

    return (
      <>
        <Box variant='ghost' onClick={onOpen} w="100%">Login</Box>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody overflow-y="scroll">
                <Login/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default LoginModal