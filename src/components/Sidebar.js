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
const Sidebar = () => {
  const isToggle = useSelector((data) => data.app.isMenuToggled);

  if (isToggle) {
    return (
      <Box>
        <VStack>
          <Button
            p={8}
            bgColor={"white"}
            css={{
              "&:hover": {
                backgroundColor: "#EDEADE",
              },
            }}
          >
            <MdHomeFilled
              size={25}
              style={{ position: "absolute", left: 11 }}
            />
          </Button>
          <Button
            p={8}
            bgColor={"white"}
            css={{
              "&:hover": {
                backgroundColor: "#EDEADE",
              },
            }}
          >
            <Img
              style={{ position: "absolute", left: 15 }}
              objectFit={"cover"}
              h={5}
              src={short}
            />
          </Button>
          <Button
            p={8}
            bgColor={"white"}
            css={{
              "&:hover": {
                backgroundColor: "#EDEADE",
              },
            }}
          >
            <MdOutlineSubscriptions
              size={25}
              style={{ position: "absolute", left: 10 }}
            />{" "}
          </Button>
        </VStack>
      </Box>
    );
  }
  return (
    <Box>
      <VStack>
        <Button
          mt={2}
          w={200}
          bgColor={"white"}
          css={{
            "&:hover": {
              backgroundColor: "#EDEADE",
            },
          }}
        >
          <MdHomeFilled size={25} style={{ position: "absolute", left: 11 }} />{" "}
          Home
        </Button>
        <Button
          w={200}
          bgColor={"white"}
          css={{
            "&:hover": {
              backgroundColor: "#EDEADE",
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
              backgroundColor: "#EDEADE",
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
              backgroundColor: "#EDEADE",
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
              backgroundColor: "#EDEADE",
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
              backgroundColor: "#EDEADE",
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
              backgroundColor: "#EDEADE",
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
              backgroundColor: "#EDEADE",
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
              backgroundColor: "#EDEADE",
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
              backgroundColor: "#EDEADE",
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
