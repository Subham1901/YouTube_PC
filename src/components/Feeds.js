import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { API_KEY, seacrhKeywordAPI } from "../utils/Constants";
import { GoPrimitiveDot } from "react-icons/go";
import millify from "millify";
import moment from "moment";

const Feeds = () => {
  const [queryParams] = useSearchParams();
  const [info, setInfo] = useState([]);

  console.log(queryParams.get("q"));
  useEffect(() => {
    getKeywordInfo();
  }, [queryParams.get("q")]);

  const getKeywordInfo = () => {
    try {
      axios
        .get(seacrhKeywordAPI, {
          params: {
            key: API_KEY,
            regionCode: "IN",
            q: queryParams.get("q"),
          },
        })
        .then((res) => {
          setInfo(res.data.items);
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log("info", info);

  return (
    <Box
      mt={8}
      ml={[0, 0, 4, 5, 12]}
      display={"flex"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      flexDirection={["column"]}
    >
      {info.map((data) => (
        <Link key={data?.id?.videoId} to={`/watch?v=${data?.id?.videoId}`}>
          <Card shadow={"none"}>
            <CardBody
              display={"flex"}
              flexDirection={["column", "column", "row"]}
            >
              <Img src={data?.snippet?.thumbnails?.medium?.url} />
              <Box ml={3}>
                <Heading mt={2} fontSize={"md"} fontWeight={"bold"}>
                  {data?.snippet?.title}
                </Heading>

                <Box mt={2} display={"flex"} alignItems={"center"}>
                  <Text
                    mr={2}
                    color={"gray.600"}
                    fontWeight={"semibold"}
                    fontSize={14}
                  >
                    {data?.snippet?.channelTitle}
                  </Text>
                  <GoPrimitiveDot size={8} />
                  <Text
                    ml={2}
                    fontSize={14}
                    color={"#818589"}
                    fontWeight={"semibold"}
                  >
                    {moment(data?.snippet?.publishedAt, "YYYYMMDD").fromNow()}
                  </Text>
                </Box>
                <Text
                  color={"#818589"}
                  fontWeight={"normal"}
                  mt={2}
                  fontSize={"sm"}
                >
                  {data?.snippet?.description}
                </Text>
              </Box>
            </CardBody>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default Feeds;
