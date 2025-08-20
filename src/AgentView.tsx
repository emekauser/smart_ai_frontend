import {
  Button,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  Icon
} from "@chakra-ui/react";
import { FaFan } from "react-icons/fa";
import { useState } from "react";

import ChatInput from "./component/ChatInput";
import AgentChatView from "./AgentChatView";

export default function AgentView() {
  const [showLandingInfo, setShowlandingInfo] = useState(true);
  const [query, setQuery] = useState("");

  const toggleLandingInfo = () => {
    setShowlandingInfo(!showLandingInfo);
  };

  const askAI = (text: string) => {
    setQuery(text);
    toggleLandingInfo();
  };

  return (
    <Flex p={8} flex={1} align={"center"} justify={"center"}>
      {showLandingInfo ? (
        <VStack gap={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"blue.400"} as={"span"}>
              Flywell AI Agent
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The number 1 intelligent assistant to help you book flights, manage
            itineraries, and answer travel questions.
          </Text>
          <HStack>
            <Button
              colorPalette="teal"
              variant="outline"
              bg="white"
              onClick={() => askAI("book my flight")}
            >
              <Icon color="blueviolet">
                <FaFan />
              </Icon>
              book a flight
            </Button>
            <Button
              colorPalette="teal"
              variant="outline"
              bg="white"
              onClick={() => askAI("Reschedule my flight")}
            >
              <Icon color="blueviolet">
                <FaFan />
              </Icon>
              Reschedule my flight
            </Button>
            <Button
              colorPalette="teal"
              variant="outline"
              bg="white"
              onClick={() => askAI("Cancel my flight")}
            >
              <Icon color="blueviolet">
                <FaFan />
              </Icon>
              Cancel my flight
            </Button>
          </HStack>
          <ChatInput onChatSend={text => askAI(text)} />
        </VStack>
      ) : (
        <AgentChatView
          query={query}
          onCancel={() => setShowlandingInfo(true)}
        />
      )}
    </Flex>
  );
}
