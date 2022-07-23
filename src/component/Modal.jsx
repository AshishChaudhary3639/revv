import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,  useDisclosure, Box,} from "@chakra-ui/react"
import { useState } from "react"
import Signup from "../signupPage/Signup"

function SignupModal2() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState('inside')

    return (
      <>
        <Box variant='ghost' onClick={onOpen} w="100%">Signup</Box>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Signup now</ModalHeader>
            <ModalCloseButton />
            <ModalBody overflow-y="scroll">
                <Signup/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default SignupModal2