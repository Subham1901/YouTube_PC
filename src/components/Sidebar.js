import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./Style.css";
import React from "react";
import { MdHomeFilled, MdOutlineSubscriptions, MdMovie } from "react-icons/md";
import trending from "../assets/trending.jpg";
import Logo from "../assets/YouTube-Logo.png";
import { IoIosMusicalNote } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { BiBulb, BiNews } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import short from "../assets/short.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ({ placement, onClose, isOpen }) => {
  // const { isMenuToggled } = useSelector((data) => data.app);

  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Img
            cursor={"pointer"}
            objectFit={"cover"}
            w={100}
            alt="YouTube"
            src={Logo}
          />
        </DrawerHeader>
        <DrawerBody>
          <Link to={"/"}>
            <Button
              mt={2}
              w={"full"}
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

          <Link to={"/result?q=shorts"}>
            <Button
              w={"full"}
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
          </Link>
          <Button
            w={"full"}
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
          <Divider mt={2} />
          <Link to={"/result?q=explore"}>
            <Button
              w={"full"}
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
          </Link>
          <Link to={"/result?q=music"}>
            <Button
              w={"full"}
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
          </Link>
          <Link to={"/result?q=movies"}>
            <Button
              w={"full"}
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
          </Link>
          <Link to={"/result?q=gaming"}>
            <Button
              w={"full"}
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
          </Link>
          <Link to={"/result?q=news"}>
            <Button
              w={"full"}
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
          </Link>
          <Link to={"/result?q=sports"}>
            <Button
              w={"full"}
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
          </Link>
          <Link to={"/result?q=learning"}>
            <Button
              w={"full"}
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
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
