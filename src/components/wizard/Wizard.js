import React, { useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Show,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { mode } from "@chakra-ui/theme-tools";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import { useEventContext } from "contexts/EventContext";
import EventMediaForm from "./ThirdComponent";




function Wizard() {
  const [steps, setSteps] = useState([
    {
      key: "firstStep",
      label: "My First Step",
      isDone: true,
      component: FirstComponent,
    },
    {
      key: "secondStep",
      label: "My Second Step",
      isDone: false,
      component: SecondComponent,
    },
    {
      key: "thirdStep",
      label: "My Third Step",
      isDone: false,
      component: EventMediaForm,
    },
  ]);

  const { event, updateEvent } = useEventContext();
  const [activeStep, setActiveStep] = useState(steps[0]);
  
  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert("You have completed all steps.");
      return;
    }

    const index = steps.findIndex((x) => x.key === activeStep.key);
    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      })
    );
    setActiveStep(steps[index + 1]);
  };

  const handleBack = () => {
    const index = steps.findIndex((x) => x.key === activeStep.key);
    if (index === 0) return;

    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = false;
        return x;
      })
    );
    setActiveStep(steps[index - 1]);
  };

  return (
      <Card
        align="center"
        direction="column"
        maxW="max-content"
        p="20px 15px"
        minW="100%"
        minH="70vh"
      >
        <Stack className="steps">
          <Flex justifyContent="center" gap={10}>
            {steps.map((step, i) => {
              return (
                <Button
                  key={i}
                  borderRadius={50}
                  height={2}
                  flex={1}
                  textAlign="center"
                  bg={
                    activeStep.key === step.key
                      ? "brand.400"
                      : step.isDone
                      ? "brand.300"
                      : "gray.300"
                  }
                ></Button>
              );
            })}
          </Flex>
        </Stack>
        <Box my="14"><activeStep.component event={event} setEvent={updateEvent}/></Box>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          align="center"
          mt="16px"
        >
          <Button
            colorScheme="brandScheme"
            size="md"
            value="Back"
            onClick={handleBack}
            disabled={steps[0].key === activeStep.key}
          >
            Back
          </Button>
          <Button
            colorScheme="brandScheme"
            size="md"
            value={
              steps[steps.length - 1].key !== activeStep.key ? "Next" : "Submit"
            }
            onClick={handleNext}
          >
            Next
          </Button>
        </Flex>
      </Card>
  );
}

export default Wizard;
