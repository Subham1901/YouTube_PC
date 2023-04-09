import { AspectRatio, Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY, seacrhKeywordAPI } from "../utils/Constants";

const Feeds = () => {
  const [queryParams] = useSearchParams();
  const [info, setInfo] = useState([]);

  console.log(queryParams.get("q"));
  useEffect(() => {
    getKeywordInfo();
  }, []);

  const getKeywordInfo = () => {
    try {
      axios
        .get(seacrhKeywordAPI, {
          params: {
            key: API_KEY,
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

  console.log(info);

  return (
    <Box
      mt={8}
      display={"flex"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      flexDirection={["column", "column", "row"]}
    >
      {info.map((data) => (
        <AspectRatio ratio={1}>
          <iframe
            width="1000"
            height="515"
            src={`https://www.youtube.com/embed/kPR7oIL-WF4?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </AspectRatio>
      ))}
    </Box>
  );
};

export default Feeds;
