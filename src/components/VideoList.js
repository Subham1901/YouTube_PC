import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../utils/Constants";
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
const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const getVideoAPI = async () => {
    const { data } = await axios.get(API);

    setVideos(data.items);
  };
  console.log(videos);
  useEffect(() => {
    getVideoAPI();
  }, []);

  const videoInfo = videos.map((data) => {
    return { ...data, publishedAt: moment().format(data?.publishedAt) };
  });

  if (!videoInfo) {
    return;
  }

  return (
    <Box display={"flex"} flexWrap={"wrap"} flexDirection={"row"}>
      {videoInfo &&
        videoInfo.map((data) => (
          <Card
            cursor={"pointer"}
            key={data?.id}
            shadow={"none"}
            maxW={300}
            m={2}
          >
            <CardBody>
              <Img
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
        ))}
    </Box>
  );
};

export default VideoList;
