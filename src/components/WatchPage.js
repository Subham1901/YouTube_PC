import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeToggleMenu, toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { AspectRatio, Box, Button, HStack, Text, Link } from "@chakra-ui/react";
import { BiLike } from "react-icons/bi";
import axios from "axios";
import millify from "millify";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [queryParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState({});
  const [showmore, setShowMore] = useState(false);

  const getVideoInfo = async () => {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${queryParams.get(
        "v"
      )}&key=AIzaSyBrZ8OaRNaZHPxwK1NMmQGeI9tjeLwa15I`
    );
    setVideoInfo(data.items[0]);
  };

  console.log(videoInfo);

  useEffect(() => {
    dispatch(closeToggleMenu());
    getVideoInfo();
  }, []);
  return (
    <>
      <Box
        className="container"
        pl={6}
        mt={5}
        w={["sm", "sm", "md", "lg", "5xl"]}
      >
        <AspectRatio w={["sm", "sm", "md", "lg", "5xl"]} ratio={16 / 9}>
          <iframe
            class="responsive-iframe"
            width="1000"
            height="515"
            src={`https://www.youtube.com/embed/${queryParams.get(
              "v"
            )}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </AspectRatio>
        <HStack display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Text fontWeight={"bold"} mt={1} fontSize={"lg"}>
              {videoInfo?.snippet?.title}
            </Text>

            <Text
              color={"gray.600"}
              fontWeight={"medium"}
              mt={1}
              fontSize={"sm"}
            >
              {videoInfo?.snippet?.channelTitle}
            </Text>
          </Box>

          <Box>
            <Button borderRadius={"full"}>
              <BiLike size={25} style={{ marginRight: "8px" }} />
              {millify(videoInfo?.statistics?.likeCount)}
            </Button>
          </Box>
        </HStack>
        <Box
          borderRadius={"lg"}
          shadow={"md"}
          w={["sm", "sm", "md", "lg", "5xl"]}
          p={5}
          backgroundColor={"#E5E4E2"}
          mt={5}
        >
          {showmore
            ? videoInfo?.snippet?.description
            : videoInfo?.snippet?.description.substring(0, 100)}{" "}
          <Link
            fontWeight={"bold"}
            p={0}
            m={0}
            variant={"unstyled"}
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showmore ? "show less" : "show more"}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default WatchPage;
