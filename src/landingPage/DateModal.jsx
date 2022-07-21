import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure,Text, Heading, Input, Box, Flex, Spacer } from "@chakra-ui/react"
import { useState } from "react"
import CalendarPage from "./Calendar"

function LandingModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState('inside')

    return (
      <>
        <Button variant='ghost' onClick={onOpen} w="100%">Start Date</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Start Date</ModalHeader>
            <ModalCloseButton />
            <ModalBody overflow-y="scroll">
                   <CalendarPage />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default LandingModal