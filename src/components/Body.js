import { Box, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import ButtonList from "./ButtonList";

const Body = () => {
  return (
    <Stack display={"flex"} flexDirection={"row"}>
      <Sidebar />
      <VStack>
        <ButtonList />
      </VStack>
    </Stack>
  );
};

export default Body;
