import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { SingleCard } from "./Card";
import { Flex, SimpleGrid } from "@chakra-ui/react";
const url = "https://api.dexscreener.com/latest/dex/tokens";
const token = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
export const ProductList = ({ getQuery }) => {
  const [data, setData] = useState([]);
  console.log(getQuery);
  function getData() {
    axios
      .get(`${url}/${token}`)
      .then((res) => {
        console.log(res.data.pairs);
        setData(res.data.pairs);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Flex gap={"15px"} flexDirection={"column"}>
        {data?.map((el, i) => (
          <SingleCard key={i} data={el} />
        ))}
      </Flex>
    </>
  );
};
