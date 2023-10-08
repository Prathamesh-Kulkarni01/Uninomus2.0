import React from 'react';
import { FormControl, FormLabel, Text, Input, Textarea, Select, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const SecondComponent = ({ event, setEvent }) => {
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
            Event Date<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="date"
            placeholder="Select event date"
            mb="16px"
            fontWeight="500"
            size="lg"
            name="eventDate" // Add name attribute
            value={event.eventDate} // Controlled component
            onChange={updateEvent} // Add onChange event handler
          />
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
            Event Time<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="time"
            placeholder="Select event time"
            mb="16px"
            fontWeight="500"
            size="lg"
            name="eventTime" // Add name attribute
            value={event.eventTime} // Controlled component
            onChange={updateEvent} // Add onChange event handler
          />
        </GridItem>
      </Grid>
      <FormLabel
        display="flex"
        ms="4px"
        fontSize="sm"
        fontWeight="500"
        color={textColor}
        mb="8px"
      >
        Event Location (Venue Name, Address)
      </FormLabel>
      <Textarea
        isRequired={true}
        variant="auth"
        fontSize="sm"
        ms={{ base: "0px", md: "0px" }}
        placeholder="Enter event location"
        mb="16px"
        fontWeight="500"
        size="lg"
        bg={mode("transparent", "navy.800")}
        border="0.5px solid "
        color={mode("secondaryGray.900", "white")}
        borderColor={mode("secondaryGray.100", "rgba(135, 140, 189, 0.3)")}
        borderRadius={"16px"}
        name="eventLocation" // Add name attribute
        value={event.eventLocation} // Controlled component
        onChange={updateEvent} // Add onChange event handler
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
            Registration Deadline<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="date"
            placeholder="Select registration deadline"
            mb="16px"
            fontWeight="500"
            size="lg"
            name="registrationDeadline" // Add name attribute
            value={event.registrationDeadline} // Controlled component
            onChange={updateEvent} // Add onChange event handler
          />
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
            Event Duration<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="number"
            placeholder="Enter Event Duration"
            mb="16px"
            fontWeight="500"
            size="lg"
            name="eventDuration" // Add name attribute
            value={event.eventDuration} // Controlled component
            onChange={updateEvent} // Add onChange event handler
          />
        </GridItem>
      </Grid>
      <FormLabel
        display="flex"
        ms="4px"
        fontSize="sm"
        fontWeight="500"
        color={textColor}
        mb="8px"
      >
        Event Registration Fee (Amount)
      </FormLabel>
      <Input
        variant="auth"
        fontSize="sm"
        ms={{ base: "0px", md: "0px" }}
        type="number"
        placeholder="Enter registration fee amount"
        mb="16px"
        fontWeight="500"
        size="lg"
        name="registrationFee" // Add name attribute
        value={event.registrationFee} // Controlled component
        onChange={updateEvent} // Add onChange event handler
      />

      <FormLabel
        display="flex"
        ms="4px"
        fontSize="sm"
        fontWeight="500"
        color={textColor}
        mb="8px"
      >
        Event Registration Fee (Payment Options)
      </FormLabel>
      <Input
        variant="auth"
        fontSize="sm"
        ms={{ base: "0px", md: "0px" }}
        type="text"
        placeholder="Enter payment options"
        mb="16px"
        fontWeight="500"
        size="lg"
        name="paymentOptions" // Add name attribute
        value={event.paymentOptions} // Controlled component
        onChange={updateEvent} // Add onChange event handler
      />

      <FormLabel
        display="flex"
        ms="4px"
        fontSize="sm"
        fontWeight="500"
        color={textColor}
        mb="8px"
      >
        Event Website or Social Media Links
      </FormLabel>
      <Input
        variant="auth"
        fontSize="sm"
        ms={{ base: "0px", md: "0px" }}
        type="url"
        placeholder="Enter website or social media links"
        mb="16px"
        fontWeight="500"
        size="lg"
        name="websiteLinks" // Add name attribute
        value={event.websiteLinks} // Controlled component
        onChange={updateEvent} // Add onChange event handler
      />

    </FormControl>
  );
};

export default SecondComponent;
