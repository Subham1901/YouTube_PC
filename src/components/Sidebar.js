import {
  Box,
  Button,
  Divider,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./Style.css";
import React from "react";
import { MdHomeFilled, MdOutlineSubscriptions, MdMovie } from "react-icons/md";
import trending from "../assets/trending.jpg";
import { IoIosMusicalNote } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { BiBulb, BiNews } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import short from "../assets/short.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isMenuToggled } = useSelector((data) => data.app);

  if (!isMenuToggled) {
    return;
  }

  // if (
  //   isToggle.origin === "header" &&
  //   isToggle.isMenuToggled &&
  //   isToggle.origin !== "watch"
  // ) {
  //   return (
  //     <Box>
  //       <VStack>
  //         <Link to={"/"}>
  //           <Button
  //             fontWeight={"thin"}
  //             p={8}
  //             bgColor={"white"}
  //             css={{
  //               "&:hover": {
  //                 backgroundColor: "#D3D3D3",
  //               },
  //             }}
  //           >
  //             <MdHomeFilled
  //               size={25}
  //               style={{ position: "absolute", left: 11 }}
  //             />
  //           </Button>
  //         </Link>
  //         <Button
  //           p={8}
  //           bgColor={"white"}
  //           css={{
  //             "&:hover": {
  //               backgroundColor: "#D3D3D3",
  //             },
  //           }}
  //         >
  //           <Img
  //             style={{ position: "absolute", left: 15 }}
  //             objectFit={"cover"}
  //             h={5}
  //             src={short}
  //           />
  //         </Button>
  //         <Button
  //           p={8}
  //           bgColor={"white"}
  //           css={{
  //             "&:hover": {
  //               backgroundColor: "#D3D3D3",
  //             },
  //           }}
  //         >
  //           <MdOutlineSubscriptions
  //             size={25}
  //             style={{ position: "absolute", left: 10 }}
  //           />{" "}
  //         </Button>
  //       </VStack>
  //     </Box>
  //   );
  // }
  return (
    <Box
      position="fixed"
      backgroundColor="white"
      h="100"
      zIndex={"docked"}
      sx={{
        position: "-webkit-sticky",
        /* Safari */ position: "sticky",
        top: "0",
      }}
    >
      <VStack>
        <Link to={"/"}>
          <Button
            mt={2}
            w={200}
            bgColor={"white"}
            css={{
              "&:hover": {
                backgroundColor: "#D3D3D3",
              },
            }}
          >
            <MdHomeFilled
              size={25}
              style={{ position: "absolute", left: 11 }}
            />{" "}
            Home
          </Button>
        </Link>
        <Button
          w={200}
          bgColor={"white"}
          css={{
            "&:hover": {
              backgroundColor: "#D3D3D3",
            },
          }}
        >
          <Img
            style={{ position: "absolute", left: 15 }}
            objectFit={"cover"}
            h={5}
            src={short}
          />
          Shorts
        </Button>
        <Button
          w={200}
          bgColor={"white"}
          css={{
            "&:hover": {
              backgroundColor: "#D3D3D3",
            },
          }}
        >
          <MdOutlineSubscriptions
            size={25}
            style={{ position: "absolute", left: 10 }}
          />{" "}
          Subscriptions
        </Button>
      </VStack>
      <Divider />
      <VStack>
        <Button
          w={200}
          bgColor={"white"}
          css={{
            "&:hover": {
              backgroundColor: "#D3D3D3",
            },
          }}
        >
          <Img
            style={{ position: "absolute", left: 5 }}
            objectFit={"cover"}
            h={9}
            src={trending}
          />
          Explore
        </Button>
        <Button
          w={200}
          bgColor={"white"}
          css={{
            "&:hover": {
              backgroundColor: "#D3D3D3",
            },
          }}
        >
          <IoIosMusicalNote
            size={25}
            style={{ position: "absolute", left: 8 }}
          />
          Music
        </Button>
        <Button
          w={200}
          bgColor={"white"}
          css={{
            "&:hover": {
              backgroundColor: "#D3D3D3",
            },
          }}
        >
          <MdMovie size={25} style={{ position: "absolute", left: 8 }} />
          Movies
        </Button>
        <Button
          w={200}
          bgColor={"white"}
          css={{
            "&:hover": {
              backgroundColor: "#D3D3D3",
            },
          }}
        >
          <SiYoutubegaming
            size={25}
            style={{ position: "absolute", left: 8 }}
          />
          Gaming
        </Button>
        <Button
          w={200}
          bgColor={"white"}
          css={{
            "&:hover": {
              backgroundColor: "#D3D3D3",
            },
          }}
        >
          <BiNews size={25} style={{ position: "absolute", left: 8 }} />
          News
        </Button>
        <Button
          w={200}
          bgColor={"white"}
          css={{
            "&:hover": {
              backgroundColor: "#D3D3D3",
            },
          }}
        >
          <BsTrophy size={25} style={{ position: "absolute", left: 8 }} />
          Sports
        </Button>
        <Button
          w={200}
          bgColor={"white"}
          css={{
            "&:hover": {
              backgroundColor: "#D3D3D3",
            },
          }}
        >
          <BiBulb size={25} style={{ position: "absolute", left: 8 }} />
          Learning
        </Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
