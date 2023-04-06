import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import "./components/Style.css";
const App = () => {
  return (
    <Container maxW={"100%"}>
      <Header />
      <Body />
    </Container>
  );
};

export default App;
