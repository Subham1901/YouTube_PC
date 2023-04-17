import React, { useState } from "react";
import ButtonList from "./ButtonList";
import VideoList from "./VideoList";
import { VStack } from "@chakra-ui/react";

const MainContainer = () => {
  const [videoCategory, setVideoCategory] = useState();

  const setCat = (value) => {
    console.log(value);
    setVideoCategory(value);
  };

  return (
    <VStack>
      <ButtonList setCategory={setCat} />

      <VideoList videoCategory={videoCategory} />
    </VStack>
  );
};

export default MainContainer;
