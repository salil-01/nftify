import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { SingleCard } from "./Card";
import { Box, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
const url = "https://api.dexscreener.com/latest/dex/tokens";
const token = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
export const ProductList = ({ getQuery }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(getQuery);
  function getData() {
    setLoading(true);
    axios
      .get(`${url}/${token}`)
      .then((res) => {
        console.log(res.data.pairs);
        setData(res.data.pairs);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  function searchData(query) {
    setLoading(true);

    axios
      .get(`https://api.dexscreener.com/latest/dex/search/?q=${query}`)
      .then((res) => {
        console.log(res.data.pairs);
        setData(res.data.pairs);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  useEffect(() => {
    if (getQuery) {
      searchData(getQuery);
    } else {
      getData();
    }
    getData();
  }, [getQuery]);
  return (
    <>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="80vh"
        >
          <Spinner size="xl" color="#FFFFFF" />
        </Box>
      ) : (
        <Flex gap={"15px"} flexDirection={"column"}>
          {data?.map((el, i) => (
            <SingleCard key={i} data={el} />
          ))}
        </Flex>
      )}
    </>
  );
};
