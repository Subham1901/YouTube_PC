import { Box, Button, HStack, Text, list } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { lists, videoCatgories } from "../utils/Constants";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const ButtonList = (props) => {
  const [catgories, setCatgories] = useState([]);
  const buttonRef = useRef();
  const scroll = (Offset) => {
    buttonRef.current.scrollLeft += Offset;
  };
  const handleClick = (id) => {
    props.setCategory(id);
  };
  const getVideoCatgories = async () => {
    const { data } = await axios.get(
      "https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=AIzaSyBrZ8OaRNaZHPxwK1NMmQGeI9tjeLwa15I"
    );

    setCatgories(
      data?.items.filter((data) => data?.snippet?.assignable === true)
    );
  };

  useEffect(() => {
    getVideoCatgories();
  }, []);

  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <Button
        bgColor={"white"}
        h={50}
        w={50}
        p={0}
        m={"1rem !important"}
        borderRadius={"full"}
        css={{
          "&:hover": {
            backgroundColor: "rgb(230, 230, 230)",
          },
        }}
        onClick={() => scroll(-200)}
      >
        <IoIosArrowBack size={20} />
      </Button>
      <HStack
        maxWidth={["12rem", "20rem", "25rem", "30rem", "50rem", "75rem"]}
        className="buttonlist"
        ref={buttonRef}
        display={"flex"}
        flexWrap={"nowrap"}
        overflow={"auto"}
        whiteSpace={"nowrap"}
      >
        {catgories.map((data) => (
          <Text
            onClick={(e) => handleClick(data?.id)}
            bgColor={"rgb(250, 249, 246)"}
            cursor={"pointer"}
            fontWeight={"medium"}
            borderRadius={"lg"}
            p={2}
            css={{
              "&:hover": {
                backgroundColor: "rgb(230, 230, 230)",
              },
            }}
            m={"1rem !important"}
            key={data.id}
            display={"inline-block"}
          >
            {data?.snippet?.title}
          </Text>
        ))}
      </HStack>

      <Button
        m={"1rem !important"}
        borderRadius={"full"}
        bgColor={"white"}
        h={50}
        w={50}
        p={0}
        textAlign={"center"}
        css={{
          "&:hover": {
            backgroundColor: "rgb(230, 230, 230)",
          },
        }}
        onClick={() => scroll(200)}
      >
        <IoIosArrowForward size={20} />
      </Button>
    </Box>
  );
};

export default ButtonList;
