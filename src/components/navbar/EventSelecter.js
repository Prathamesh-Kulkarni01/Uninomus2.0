import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Model } from "components/Model/Model";
import Wizard from "components/wizard/Wizard";

const EventSelection = () => {
  const [selectedEvent, setSelectedEvent] = useState("Event 1"); // Initial selected event
  const cardBg = useColorModeValue("white", "navy.800");
  const darkBg = useColorModeValue("white", "navy.900");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEventChange = (event) => {
    setSelectedEvent(event);
  };

  return (
    <Box mx={2}>
      <Menu bg={cardBg}>
        <MenuButton as={Button} rightIcon={<Icon />}>
          {selectedEvent.length <= 10
            ? selectedEvent
            : `${selectedEvent.substring(0, 10)}...`}
        </MenuButton>
        <MenuList pb={-2} bg={cardBg}>
          <MenuItem onClick={() => handleEventChange(" Poster Presentation")}>
            Poster Presentation
          </MenuItem>
          <MenuItem onClick={() => handleEventChange("Event 2")}>
            Event 2
          </MenuItem>
          <MenuItem
            bg={darkBg}
            borderRadius={10}
            justifyContent="space-between"
            onClick={() => {
              onOpen();
            }}
          >
            Create Event
            <AddIcon mx={2} />
          </MenuItem>
        </MenuList>
      </Menu>
      <Model isOpen={isOpen} onClose={onClose}>
        <Wizard />
      </Model>
    </Box>
  );
};

export default EventSelection;

const Icon = () => {
  const ethBg = useColorModeValue("secondaryGray.300", "navy.900");
  const ethBox = useColorModeValue("white", "navy.800");
  const ethColor = useColorModeValue("gray.700", "white");
  return (
    <Flex
      align="center"
      justify="center"
      bg={ethBox}
      h="29px"
      w="29px"
      borderRadius="30px"
      me="-7px"
    >
      <ChevronDownIcon color={ethColor} w="9px" h="14px" />
    </Flex>
  );
};
