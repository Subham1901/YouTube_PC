import {
  Avatar,
  Box,
  Button,
  Container,
  Img,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../assets/YouTube-Logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"row"}
    >
      <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
        <Button
          borderRadius={"full"}
          css={{
            "&:hover": {
              backgroundColor: "#EDEADE",
            },
          }}
          width={12}
          height={12}
          p={3}
          onClick={(e) => dispatch(toggleMenu())}
          variant={"unstyled"}
        >
          <MdMenu size={25} />
        </Button>
        <Img ml={6} objectFit={"cover"} w={100} alt="YouTube" src={Logo} />
        <form>
          <InputGroup ml={"96"}>
            <Input w={"md"} borderLeftRadius={"full"} placeholder="Search" />
            <Button
              type="submit"
              cursor={"pointer"}
              onClick={() => console.log("hello")}
              borderRightRadius={"full"}
              children={<AiOutlineSearch size={25} />}
            />
          </InputGroup>
        </form>
      </Box>

      <Box>
        <Avatar src="https://bit.ly/kent-c-dodds" size={"sm"} />
      </Box>
    </Box>
  );
};

export default Header;
