import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { SingleCard } from "./Card";
import { SimpleGrid } from "@chakra-ui/react";
const url = "https://api.dexscreener.com/latest/dex/tokens";
const token = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
export const ProductList = () => {
  const [data, setData] = useState([]);
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
      <SimpleGrid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)",
        }}
        rowGap={"30px"}
        columnGap={"15px"}
      >
        {data?.map((el, i) => (
          <SingleCard key={i} />
        ))}
      </SimpleGrid>
    </>
  );
};
