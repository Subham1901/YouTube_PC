import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import "./components/Style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import Feeds from "./components/Feeds";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "result",
        element: <Feeds />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Container maxW={"100%"}>
      <RouterProvider router={appRouter} />
    </Container>
  );
};

export default App;
