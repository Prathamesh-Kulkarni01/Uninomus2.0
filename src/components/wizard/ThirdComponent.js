import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Switch,
  Flex,
  Button,
  Icon,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdUpload, MdAdd, MdDelete } from "react-icons/md"; // Import Chakra UI and custom icons
import Dropzone from 'react-dropzone';



const EventMediaForm = ({ event, setEvent }) => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );


  const [showGalleryInput, setShowGalleryInput] = useState(false);

  const handleGalleryToggle = () => {
    setShowGalleryInput(!showGalleryInput);
  };

  const updateEvent = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setEvent((prevEvent) => ({ ...prevEvent, [key]: value }));
  };

  return (
    <FormControl>
      <FormLabel
        display="flex"
        ms="4px"
        fontSize="sm"
        fontWeight="500"
        color={textColor}
        mb="8px"
      >
        Event Banner
      </FormLabel>
      {/* <Dropzone
        w={{ base: "100%", "2xl": "268px" }}
        me="36px"
        maxH={{ base: "60%", lg: "50%", "2xl": "100%" }}
        minH={{ base: "60%", lg: "50%", "2xl": "100%" }}
        content={
          <Box>
            <Icon as={MdUpload} w="80px" h="80px" color={googleHover} />
            <Flex justify="center" mx="auto" mb="12px">
              <Text fontSize="xl" fontWeight="700" color={googleHover}>
                Upload Banner
              </Text>
            </Flex>
            <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
              PNG, JPG, and GIF files are allowed
            </Text>
          </Box>
        }
      /> */}

      <Flex align="center" mt="20px">
        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="0"
          mr="16px"
        >
          Event Gallery
        </FormLabel>
        <Switch
          colorScheme="brandScheme"
          size="md"
          isChecked={showGalleryInput}
          onChange={handleGalleryToggle}
        />
      </Flex>

      {showGalleryInput && (
        <Box mt="16px">
          {/* Add gallery input fields */}
          <Dropzone
          w={{ base: "100%", "2xl": "268px" }}
          me='36px'
          maxH={{ base: "60%", lg: "50%", "2xl": "100%" }}
          minH={{ base: "60%", lg: "50%", "2xl": "100%" }}
          content={
            <Box>
              <Icon as={MdUpload} w='80px' h='80px' color={googleActive} />
              <Flex justify='center' mx='auto' mb='12px'>
                <Text fontSize='xl' fontWeight='700' color={googleActive}>
                  Upload Files
                </Text>
              </Flex>
              <Text fontSize='sm' fontWeight='500' color='secondaryGray.500'>
                PNG, JPG and GIF files are allowed
              </Text>
            </Box>
          }
        />
          <Button
            mt="12px"
            colorScheme="brandScheme"
            leftIcon={<Icon as={MdAdd} />}
          >
            Add More Images
          </Button>
          <Text mt="8px" fontSize="sm" color="secondaryGray.500">
            PNG, JPG, and GIF files are allowed for gallery images.
          </Text>
        </Box>
      )}

      <Flex align="center" mt="20px">
        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="0"
          mr="16px"
        >
          Request Banner Design
        </FormLabel>
        <Switch colorScheme="brandScheme" size="md" />
      </Flex>
    </FormControl>
  );
};

export default  EventMediaForm;
