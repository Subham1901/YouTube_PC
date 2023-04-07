import React from "react";
import ButtonList from "./ButtonList";
import VideoList from "./VideoList";
import { VStack } from "@chakra-ui/react";

const MainContainer = () => {
  return (
    <VStack>
      <ButtonList />

      <VideoList />
    </VStack>
  );
};

export default MainContainer;
