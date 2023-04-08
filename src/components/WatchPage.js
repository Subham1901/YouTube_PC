import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeToggleMenu, toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { AspectRatio, Box, Button, HStack, Text, Link } from "@chakra-ui/react";
import { BiLike } from "react-icons/bi";
import axios from "axios";
import millify from "millify";
import moment from "moment";

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
    <Box mt={1} w={["sm", "sm", "md", "lg", "5xl"]}>
      <AspectRatio ratio={16 / 9}>
        <iframe
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

          <Text color={"gray.600"} fontWeight={"medium"} mt={1} fontSize={"sm"}>
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
        mb={5}
        borderRadius={"lg"}
        shadow={"md"}
        w={["sm", "sm", "md", "lg", "5xl"]}
        p={5}
        backgroundColor={"#FAF9F6"}
        mt={5}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Text mb={2} fontSize={16} color={"#818589"} fontWeight={"semibold"}>
            {moment(videoInfo?.snippet?.publishedAt, "YYYYMMDD").fromNow()}
          </Text>
          <Text
            mb={2}
            ml={2}
            fontSize={14}
            color={"#818589"}
            fontWeight={"semibold"}
          >
            {millify(videoInfo?.statistics?.viewCount)} views
          </Text>
        </Box>
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
          {showmore ? " show less" : " show more"}
        </Link>
      </Box>

      <Box p={2}>
        <Text fontSize={"md"}>
          {Number(videoInfo?.statistics?.commentCount).toLocaleString("en-US")}{" "}
          Comments
        </Text>
      </Box>
    </Box>
  );
};

export default WatchPage;
