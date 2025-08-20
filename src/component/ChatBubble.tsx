import { Avatar, Box, Flex, HStack, Span, Text } from "@chakra-ui/react";
import type { Chat } from "./type";
import ReactMarkdown from "react-markdown";

interface ChatBubbleProps {
  chat: Chat;
}

function AIMessageBubble({ message }: { message: string }) {
  return (
    <HStack width="100%" alignItems="start">
      <Avatar.Root variant="solid">
        <Avatar.Fallback name="AI" />
      </Avatar.Root>
      <Box width="90%" color="gray.950" borderRadius="md" p="0.5rem">
        <ReactMarkdown>{message}</ReactMarkdown>
      </Box>
    </HStack>
  );
}

function AISpinnerBubble() {
  return (
    <HStack width="100%" alignItems="center">
      <Avatar.Root variant="solid">
        <Avatar.Fallback name="AI" />
      </Avatar.Root>

      <Span
        width="12px"
        height="12px"
        borderRadius=" 50%"
        display="block"
        position="relative"
        color="gray.950"
        ml="50px"
        boxSizing="border-box"
        animation="animloader 2s linear infinite"
      />
    </HStack>
  );
}

function HumanMessageBubble({ message }: { message: string }) {
  return (
    <Flex width="100%" justifyContent="right">
      <Box bg="blueviolet" maxW="70%" borderRadius="md" p="0.5rem">
        <Text>{message}</Text>
      </Box>
    </Flex>
  );
}

export default function CharBubble({ chat }: ChatBubbleProps) {
  const renderChatBubble = () => {
    switch (chat.role) {
      case "ai":
        return <AIMessageBubble message={chat.message} />;
      case "human":
        return <HumanMessageBubble message={chat.message} />;
      case "ai_loading":
        return <AISpinnerBubble />;
      default:
        return <Box color="gray.950">Wrong format</Box>;
    }
  };

  return renderChatBubble();
}
