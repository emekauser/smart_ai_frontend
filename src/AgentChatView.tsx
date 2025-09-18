import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import CharBubble from "./component/ChatBubble";
import ChatInput from "./component/ChatInput";
import type { Chat } from "./component/type";
import askAgentApi from "./api/askAgentApi";
import { getCookie, getToken } from "./api/AppCookie";
import UserForm from "./UserForm";

interface AgentChatViewProps {
  onCancel: () => void;
  query: string;
}

export default function AgentChatView({ onCancel, query }: AgentChatViewProps) {
  const [email, setEmail] = useState<string | null>(getCookie("fw_email"));
  const [fullname, setFullname] = useState<string | null>(
    getCookie("fw_fullname")
  );
  const [canUserAccessChat, setCanUserAccessChat] = useState(
    getToken() !== null
  );
  const [chatHistory, setChatHistory] = useState<Chat[]>(
    canUserAccessChat
      ? [
          {
            role: "ai",
            message: `Welcome ${fullname?.split(" ")[0]}, how can i help you`
          }
        ]
      : []
  );

  const onSubmitUserData = async (
    token: string | null,
    email: string,
    fullname: string
  ) => {
    setEmail(email);
    setFullname(fullname);
    setCanUserAccessChat(token !== null);

    setChatHistory([
      ...chatHistory,
      {
        role: "ai",
        message: `Welcome ${fullname?.split(" ")[0]}, how can i help you`
      }
    ]);

    if (query !== "") sendMessage(query);
  };

  const onCancelForm = () => {
    onCancel();
  };

  const sendMessage = async (message: string) => {
    setChatHistory([
      ...chatHistory,
      {
        role: "human",
        message: message
      },
      {
        role: "ai_loading",
        message: ""
      }
    ]);

    const res = await askAgentApi(message);
    const chatHistoryCurrent = chatHistory.filter(chat => {
      return chat.role !== "ai_loading";
    });

    setChatHistory([
      ...chatHistoryCurrent,
      {
        role: "ai",
        message: res.data.reply
      }
    ]);
  };

  // useEffect(() => {
  //   if (canUserAccessChat && query !== "") {
  //     sendMessage(query);
  //   }
  // }, [query]);

  return (
    <>
      {canUserAccessChat ? (
        <Box width="100%">
          <VStack width="100%">
            <Heading fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}>
              <Text color="blue.400" as="span" textAlign="left">
                Flywell AI Agent
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Wellcome {fullname?.split(" ")[0]}
            </Text>
          </VStack>
          <VStack h="500px" overflowY="auto">
            {chatHistory.map((chat, key) => {
              return <CharBubble chat={chat} key={key} />;
            })}
          </VStack>

          <ChatInput onChatSend={sendMessage} />
        </Box>
      ) : (
        <UserForm
          onCancelForm={onCancelForm}
          onSubmitUserData={onSubmitUserData}
        />
      )}
    </>
  );
}
