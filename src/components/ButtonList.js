import { Box, Button, list } from "@chakra-ui/react";
import React from "react";
import { lists } from "../utils/Constants";

const ButtonList = () => {
  return (
    <Box display={"flex"} ml={6}>
      {lists.map((data, idx) => (
        <Button
          css={{
            "&:hover": {
              backgroundColor: "rgb(230, 230, 230)",
            },
          }}
          h={"30"}
          bgColor={"rgb(250, 249, 246)"}
          mr={4}
          key={idx}
        >
          {data}
        </Button>
      ))}
    </Box>
  );
};

export default ButtonList;
