import React from 'react';
import { FormControl, FormLabel, Text, Input, Textarea, Select, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const FirstComponent = ({ event, setEvent }) => {
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
        Event Name<Text color={brandStars}>*</Text>
      </FormLabel>
      <Input
        isRequired={true}
        variant="auth"
        fontSize="sm"
        ms={{ base: "0px", md: "0px" }}
        type="text"
        placeholder="Enter event name"
        mb="16px"
        fontWeight="500"
        size="lg"
        name="eventName"
        value={event.eventName} // Controlled component
        onChange={updateEvent}
      />

      <FormLabel
        display="flex"
        ms="4px"
        fontSize="sm"
        fontWeight="500"
        color={textColor}
        mb="8px"
      >
        Event Description<Text color={brandStars}>*</Text>
      </FormLabel>
      <Textarea
        isRequired={true}
        variant="auth"
        fontSize="sm"
        ms={{ base: "0px", md: "0px" }}
        placeholder="Enter event description"
        mb="16px"
        fontWeight="500"
        color={textColor}
        size="lg"
        bg={mode("transparent", "navy.800")}
        border="1px solid "
        borderColor={mode("secondaryGray.100", "whiteAlpha.100")}
        borderRadius={"16px"}
        name="eventDescription"
        value={event.eventDescription} // Controlled component
        onChange={updateEvent}
      />

      <Grid templateColumns="repeat(2, 1fr)" columnGap={10}>
        <GridItem>
          <FormLabel
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            Event Type<Text color={brandStars}>*</Text>
          </FormLabel>
          <Select
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            placeholder="Select event type"
            mb="16px"
            fontWeight="500"
            size="lg"
            name="eventType"
            value={event.eventType} // Controlled component
            onChange={updateEvent}
          >
            <option value="conference">Mega Event</option>
            <option value="workshop">Solo Event</option>
          </Select>
        </GridItem>
        <GridItem>
          <FormLabel
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            Event Level<Text color={brandStars}>*</Text>
          </FormLabel>
          <Select
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            placeholder="Select event type"
            mb="16px"
            fontWeight="500"
            size="lg"
            name="eventLevel"
            value={event.eventLevel} // Controlled component
            onChange={updateEvent}
          >
            <option value="collegeLevel">This Is College Level Main Event/Competition</option>
            <option value="departmentalLevel">This Is Departmental Level Main Event/Competition</option>
            <option value="other">Other</option>
          </Select>
        </GridItem>
      </Grid>

      <>
        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          College Name<Text color={brandStars}>*</Text>
        </FormLabel>
        <Select
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          placeholder="Select event type"
          mb="16px"
          fontWeight="500"
          size="lg"
          name="collegeName"
          value={event.collegeName} // Controlled component
          onChange={updateEvent}
        >
          <option value="Walchand Institute of Technology,Sangli" selected>Walchand Institute of Technology,Sangli </option>
        </Select>

        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          Department Name<Text color={brandStars}>*</Text>
        </FormLabel>
        <Textarea
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          placeholder="Department"
          mb="16px"
          fontWeight="500"
          size="lg"
          bg={mode("transparent", "navy.800")}
          border="1px solid "
          color={mode("secondaryGray.900", "white")}
          borderColor={mode("secondaryGray.100", "whiteAlpha.100")}
          borderRadius={"16px"}
          name="departmentName"
          value={event.departmentName} // Controlled component
          onChange={updateEvent}
        />
      </>
    </FormControl>
  );
};

export default FirstComponent;
