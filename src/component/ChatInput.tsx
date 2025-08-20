import { HStack, IconButton, Icon } from "@chakra-ui/react";
import { FaFan, FaPaperPlane } from "react-icons/fa";

import ExpandableTextArea from "./ExpandableTextArea";
import { useEffect, useState } from "react";

interface ChatInputProps {
  text?: string;
  onChatSend: (text: string) => void;
}

export default function ChatInput({ text, onChatSend }: ChatInputProps) {
  const [value, setValue] = useState(text || "");

  useEffect(() => {
    if (value !== text) setValue(text || "");
  }, [text]);

  const onChange = e => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const onSendButtonClick = () => {
    if (value !== "") onChatSend(value);
    setValue("");
  };

  return (
    <HStack
      alignItems="end"
      color="black"
      outline="2px solid"
      outlineColor="gainsboro"
      p="0.25rem"
      w="100%"
    >
      <Icon color="blueviolet" height="2.2rem" width="2.2rem">
        <FaFan />
      </Icon>

      <ExpandableTextArea
        placeholder="Ask for help"
        resize="none"
        variant="subtle"
        overflow="hidden"
        onChange={onChange}
        value={value}
      />
      <IconButton onClick={onSendButtonClick}>
        <FaPaperPlane color="white" />
      </IconButton>
    </HStack>
  );
}
