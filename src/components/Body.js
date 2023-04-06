import { Box, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import ButtonList from "./ButtonList";
import VideoList from "./VideoList";

const Body = () => {
  return (
    <Stack display={"flex"} flexDirection={"row"}>
      <Sidebar />
      <VStack>
        <ButtonList />
        <Box>
          <VideoList />
        </Box>
      </VStack>
    </Stack>
  );
};

export default Body;
