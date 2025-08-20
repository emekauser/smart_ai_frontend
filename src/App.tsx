import { ChakraProvider } from "@chakra-ui/react";

import Home from "./Home";
import { system } from "./theme";

function App() {
  return (
    <ChakraProvider value={system}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
