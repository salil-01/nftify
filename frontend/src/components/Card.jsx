import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Button,
  Text,
  Flex,
  SimpleGrid,
  IconButton,
  Img,
  Spacer,
  HStack,
  VStack,
} from "@chakra-ui/react";
export const SingleCard = ({ data }) => {
  const {
    chainId,
    symbol,
    dexId,
    baseToken,
    quoteToken,
    priceNative,
    priceUsd,
  } = data;
  return (
    <>
      <Flex
        gap={"30px"}
        fontFamily={"Poppins"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        margin={"auto"}
      >
        <Card bg={"#390554"} w={"280px"} padding={"5px 0px 5px 0px"}>
          <CardBody>
            <Text color={"#FFFFFF"} fontSize={"16px"} mb={"15px"}>
              Basic Info
            </Text>

            <SimpleGrid
              gridTemplateColumns={"repeat(2,1fr)"}
              color={"#F5F5F5"}
              lineHeight={"normal"}
              fontSize={"13px"}
              rowGap={"8px"}
            >
              <Text wordBreak={"break-word"}>Pair Created At</Text>
              <Text wordBreak={"break-word"}>{chainId}</Text>
              <Text>Symbol</Text>
              <Text wordBreak={"break-word"}>{baseToken.symbol}</Text>
              <Text>Dex ID</Text>
              <Text wordBreak={"break-word"}>{dexId.substring(1, 4)}</Text>
              <Text>Pair Address</Text>
              <Text wordBreak={"break-word"}>
                #{baseToken?.address.substring(8, 12)}
              </Text>
            </SimpleGrid>

            <HStack marginTop={"-10px"}>
              <Spacer />
              <IconButton
                isRound={true}
                variant="solid"
                bg="#960252"
                fontSize="20px"
                _hover={{
                  bg: "#960252",
                }}
                boxSize={"56px"}
              >
                <Img src="/outline.svg" />
              </IconButton>
            </HStack>
          </CardBody>
        </Card>
        <Card bg={"#390554"} w={"280px"}>
          <CardBody>
            <Text color={"#FFFFFF"} fontSize={"16px"} mb={"15px"}>
              Base Token
            </Text>
            <VStack height={"60%"}>
              <SimpleGrid
                gridTemplateColumns={"repeat(2,1fr)"}
                color={"#F5F5F5"}
                lineHeight={"normal"}
                fontSize={"13px"}
                rowGap={"8px"}
                w={"full"}
              >
                <Text>Name</Text>
                <Text wordBreak={"break-word"}>{baseToken.name}</Text>
                <Text>Symbol</Text>
                <Text wordBreak={"break-word"}>{baseToken.symbol}</Text>
                <Text>Address</Text>
                <Text wordBreak={"break-word"}>
                  #{baseToken?.address.substring(8, 12)}
                </Text>
              </SimpleGrid>
            </VStack>
            <HStack marginTop={"-20px"}>
              <Spacer />
              <IconButton
                isRound={true}
                variant="solid"
                bg="#960252"
                fontSize="20px"
                _hover={{
                  bg: "#960252",
                }}
                boxSize={"56px"}
              >
                <Img src="/token.svg" />
              </IconButton>
            </HStack>
          </CardBody>
        </Card>
        <Card bg={"#390554"} w={"280px"}>
          <CardBody>
            <Text color={"#FFFFFF"} fontSize={"16px"} mb={"15px"}>
              Quote Token
            </Text>
            <VStack height={"60%"}>
              <SimpleGrid
                gridTemplateColumns={"repeat(2,1fr)"}
                color={"#F5F5F5"}
                lineHeight={"normal"}
                fontSize={"13px"}
                rowGap={"8px"}
                w={"full"}
              >
                <Text>Name</Text>
                <Text wordBreak={"break-word"}>{quoteToken.name}</Text>
                <Text>Symbol</Text>
                <Text wordBreak={"break-word"}>{quoteToken.symbol}</Text>
                <Text>Address</Text>
                <Text wordBreak={"break-word"}>
                  #{quoteToken?.address.substring(8, 12)}
                </Text>
              </SimpleGrid>
            </VStack>
            <HStack marginTop={"-20px"}>
              <Spacer />
              <IconButton
                isRound={true}
                variant="solid"
                bg="#960252"
                fontSize="20px"
                _hover={{
                  bg: "#960252",
                }}
                boxSize={"56px"}
              >
                <Img src="/token.svg" />
              </IconButton>
            </HStack>
          </CardBody>
        </Card>
        <Card bg={"#390554"} w={"280px"}>
          <CardBody>
            <Text color={"#FFFFFF"} fontSize={"16px"} mb={"15px"}>
              Price
            </Text>
            <VStack height={"60%"}>
              <SimpleGrid
                gridTemplateColumns={"repeat(2,1fr)"}
                color={"#F5F5F5"}
                lineHeight={"normal"}
                fontSize={"13px"}
                rowGap={"8px"}
                width={"full"}
              >
                <Text>Price Native</Text>
                <Text wordBreak={"break-word"}>
                  {Number(priceNative).toFixed(2)}
                </Text>
                <Text>Price USD</Text>
                <Text wordBreak={"break-word"}>
                  {Number(priceUsd).toFixed(2)}
                </Text>
              </SimpleGrid>
              <Spacer />
            </VStack>

            <HStack marginTop={"-20px"}>
              <Spacer />
              <IconButton
                isRound={true}
                variant="solid"
                bg="#960252"
                fontSize="20px"
                _hover={{
                  bg: "#960252",
                }}
                boxSize={"56px"}
              >
                <Img src="/dollar.svg" />
              </IconButton>
            </HStack>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};
