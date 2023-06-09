import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, API_KEY } from "../utils/Constants";
import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import moment from "moment/moment";
import millify from "millify";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";
const VideoList = ({ videoCategory }) => {
  const [videos, setVideos] = useState([]);

  const getVideoAPI = async () => {
    await axios
      .get("https://youtube.googleapis.com/youtube/v3/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: "50",
          videoCategoryId: videoCategory,
          key: API_KEY,
        },
      })
      .then((res) => {
        setVideos(res.data.items);
      });
  };
  console.log(videos);
  useEffect(() => {
    getVideoAPI();
  }, [videoCategory]);

  const videoInfo = videos.map((data) => {
    return { ...data, publishedAt: moment().format(data?.publishedAt) };
  });

  if (!videoInfo) {
    return;
  }

  return (
    <Box
      mt={8}
      display={"flex"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      flexDirection={"row"}
    >
      {videoInfo &&
        videoInfo.map((data) => (
          <Link
            style={{ margin: "9px" }}
            key={data?.id}
            to={`/watch?v=${data?.id}`}
          >
            <Card cursor={"pointer"} shadow={"none"} maxW={400}>
              <CardBody>
                <Img
                  w={400}
                  transition={"all 0.4s"}
                  css={{
                    "&:hover": {
                      borderRadius: "0%",
                    },
                  }}
                  borderRadius={"lg"}
                  src={data?.snippet?.thumbnails?.medium?.url}
                  objectFit={"cover"}
                />

                <Heading mt={2} fontSize={"md"} fontWeight={"bold"}>
                  {data?.snippet?.title}
                </Heading>
                <Text
                  mt={1}
                  color={"gray.600"}
                  fontWeight={"semibold"}
                  fontSize={"sm"}
                >
                  {data?.snippet?.channelTitle}
                </Text>
                <Box display={"flex"} alignItems={"center"}>
                  <Text
                    mr={2}
                    fontSize={14}
                    color={"#818589"}
                    fontWeight={"semibold"}
                  >
                    {moment(data?.publishedAt, "YYYYMMDD").fromNow()}
                  </Text>
                  <GoPrimitiveDot size={8} />
                  <Text
                    ml={2}
                    fontSize={14}
                    color={"#818589"}
                    fontWeight={"semibold"}
                  >
                    {millify(data?.statistics?.viewCount)} views
                  </Text>
                </Box>
              </CardBody>
            </Card>
          </Link>
        ))}
    </Box>
  );
};

export default VideoList;
