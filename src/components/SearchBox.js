import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const SearchBox = ({ show }) => {
  const searchData = useSelector((data) => data.app.searchData);
  const navigate = useNavigate();
  const handleNavigate = (data) => {
    navigate(`/result?q=${data}`);
  };
  return (
    <>
      {searchData.length != 0 && show && (
        <List
          top={10}
          right={["2xl", "lg", "807"]}
          position={"fixed"}
          bgColor={"white"}
          border={"1px solid #D3D3D3"}
          shadow={"lg"}
          borderRadius={"lg"}
          cursor={"pointer"}
          w={"md"}
          spacing={3}
        >
          {searchData.map((data, idx) => (
            <ListItem
              onClick={() => handleNavigate(data)}
              fontWeight={"semibold"}
              p={1}
              key={idx}
              css={{
                "&:hover": {
                  backgroundColor: "#D3D3D3",
                },
              }}
            >
              <ListIcon as={AiOutlineSearch} />
              {data}
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default SearchBox;
