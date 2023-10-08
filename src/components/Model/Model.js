import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, ModalFooter, useDisclosure, ModalOverlay, useColorModeValue } from "@chakra-ui/react";

export function Model({ children,isOpen, onOpen, onClose  }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const bg = useColorModeValue("white", "navy.800");
  return (
    <>

      <Modal  size='6xl' isCentered isOpen={isOpen} onClose={onClose}>
        {showOverlay && (
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(50deg)"
          />
        )}
        <ModalContent bg={bg}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
