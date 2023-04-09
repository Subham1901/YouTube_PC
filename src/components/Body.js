import { Box, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import ButtonList from "./ButtonList";
import VideoList from "./VideoList";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <Stack display={"flex"} flexDirection={"row"}>
        {/* <Sidebar /> */}

        <Outlet />
      </Stack>
    </>
  );
};

export default Body;
