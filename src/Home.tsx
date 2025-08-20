import { Flex, Image, Stack, Box } from "@chakra-ui/react";

import AgentView from "./AgentView";
import PlanePic from "./assets/plane.jpg";

export default function Home() {
  return (
    <Box>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        bg="white"
      >
        <AgentView />
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"cover"} src={PlanePic} />
        </Flex>
      </Stack>
    </Box>
  );
}
