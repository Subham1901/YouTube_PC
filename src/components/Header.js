import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Img,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../assets/YouTube-Logo.png";
import { useDispatch, useSelector } from "react-redux";
import jsonpAdapter from "axios-jsonp";
import {
  clearSeachSuggestion,
  setSeachSuggestion,
  toggleMenu,
} from "../utils/appSlice";
import axios from "axios";
import SearchBox from "./SearchBox";
import { setSearchCacheInfo } from "../utils/searchSlice";
import Sidebar from "./Sidebar";

const Header = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState();
  const [placement, setPlacement] = React.useState("left");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const cacheData = useSelector((state) => state.seacrhCache);
  console.log(cacheData);

  useEffect(() => {
    let timer;
    if (searchQuery) {
      if (cacheData[searchQuery]) {
        dispatch(setSeachSuggestion(cacheData[searchQuery][0]));
      } else {
        timer = setTimeout(() => getSuggestions(), 300);
      }
    }

    return () => {
      dispatch(clearSeachSuggestion());
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // console.log(searchQuery);

  const getSuggestions = async () => {
    try {
      const res = await axios({
        url: "https://clients1.google.com/complete/search",
        adapter: jsonpAdapter,
        params: {
          client: "firefox",
          hl: "en",
          ds: "yt",
          q: searchQuery,
        },
      });

      dispatch(setSeachSuggestion(res.data[1]));
      dispatch(
        setSearchCacheInfo({
          [searchQuery]: [res.data[1]],
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box
      as="header"
      position="fixed"
      zIndex={"dropdown"}
      backgroundColor="white"
      w="100%"
      sx={{
        position: "-webkit-sticky",
        /* Safari */ position: "sticky",
        top: "0",
      }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"row"}
    >
      <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
        <Button
          onClick={onOpen}
          borderRadius={"full"}
          css={{
            "&:hover": {
              backgroundColor: "#D3D3D3",
            },
          }}
          width={12}
          height={12}
          p={3}
          // onClick={(e) => dispatch(toggleMenu())}
          variant={"unstyled"}
        >
          <MdMenu size={25} />
        </Button>

        <Img
          cursor={"pointer"}
          ml={6}
          objectFit={"cover"}
          w={100}
          alt="YouTube"
          src={Logo}
        />
        <VStack w={"md"}>
          <form>
            <InputGroup ml={"96"}>
              <Input
                onFocus={(e) => setShowSuggestion(true)}
                onBlur={(e) => setShowSuggestion(false)}
                onChange={(e) => setSearchQuery(e.target.value)}
                defaultValue={searchQuery}
                name="search"
                w={"md"}
                borderLeftRadius={"full"}
                placeholder="Search"
              />
              <Button
                type="submit"
                cursor={"pointer"}
                onClick={() => console.log("hello")}
                borderRightRadius={"full"}
                children={<AiOutlineSearch size={25} />}
              />
            </InputGroup>
          </form>
          {<SearchBox show={showSuggestion} />}
        </VStack>
      </Box>

      <Box>
        <Avatar src="https://bit.ly/kent-c-dodds" size={"sm"} />
      </Box>
      <Sidebar placement={placement} onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default Header;
