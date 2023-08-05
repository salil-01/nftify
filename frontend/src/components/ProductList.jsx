import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { SingleCard } from "./Card";
import { Box, Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
const url = "https://api.dexscreener.com/latest/dex/tokens";
const token =
  "0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095";
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
        <>
          <Box zIndex={10} ml={"20px"} position={"absolute"}>
            <Text fontFamily={"Work Sans"} fontSize={"22px"} color={"#FFFFFF"}>
              Token Search Results
            </Text>
          </Box>
          <Flex gap={"15px"} flexDirection={"column"} mt={"44px"}>
            {data?.map((el, i) => (
              <SingleCard key={i} data={el} />
            ))}
          </Flex>
        </>
      )}
    </>
  );
};
