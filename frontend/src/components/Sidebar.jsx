"use client";

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  HStack,
  Image,
  Img,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useThrottle } from "../customHooks/useThrottle";
import { Footer } from "./Footer";
import { ProductList } from "./ProductList";
const LinkItems = [
  { name: "Token Address", icon: "/token.svg" },
  { name: "Pair Address", icon: "/fluentpair.svg" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="2s ease"
      bg={"#292929"}
      borderRadius={{
        base: "0px 0px 0px 0px",
        md: "0px 0px 0px 0px",
        lg: "0px 32px 0px 0px",
      }}
      w={{ base: "full", md: 60 }}
      position="fixed"
      h={"full"}
      {...rest}
      zIndex={1}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <HStack gap={"25px"} alignItems={"center"}>
          <Image src="logo.svg" width={"25px"} height={"30px"} />
          <Text
            color={"rgba(255, 255, 255, 0.70)"}
            fontSize={"32px"}
            fontFamily="Pacifico"
          >
            NFTify
          </Text>
        </HStack>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          color={"rgba(255, 255, 255, 0.70)"}
        />
      </Flex>

      <VStack width={"100%"} justifyContent={"space-between"} height={"93vh"}>
        <Box width={"100%"}>
          {LinkItems.map((link) => (
            <NavItem
              key={link.name}
              icon={link.icon}
              color={"#F7F9F9"}
              // px={"4"}
              bg={link.name == "Token Address" ? "#F30050" : "#292929"}
            >
              {link.name}
            </NavItem>
          ))}
        </Box>
        {/* <Spacer /> */}

        <Spacer />

        <Box width={"100%"}>
          <Flex mx={8} mb={"56px"}>
            <IconButton
              variant="solid"
              bg={"#292929"}
              fontSize="20px"
              _hover={{
                bg: "#292929",
              }}
              boxSize={"32px"}
            >
              <Img src="/facebook.png" />
            </IconButton>
            <IconButton
              variant="solid"
              fontSize="20px"
              bg={"#292929"}
              _hover={{
                bg: "#292929",
              }}
              boxSize={"32px"}
            >
              <Img src="/linkedin.png" />
            </IconButton>
            <IconButton
              variant="solid"
              fontSize="20px"
              bg={"#292929"}
              _hover={{
                bg: "#292929",
              }}
              boxSize={"32px"}
            >
              <Img src="/twitter.png" />
            </IconButton>
          </Flex>
          <Box width={"100%"} height={"69px"}>
            <Footer />
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        paddingLeft={"8"}
        role="group"
        cursor="pointer"
        gap={"20px"}
        {...rest}
        fontSize={"18px"}
        fontFamily={"Work Sans"}
      >
        {icon && <Img src={icon} />}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, sendQuery, ...rest }) => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const handleClick = () => {
    console.log("click");
  };
  useThrottle(() => {
    setQuery(text);
    sendQuery(query);
  }, 300);
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 16 }}
        height="20"
        alignItems={"center"}
        justifyContent={"space-between"}
        {...rest}
      >
        <Flex
          alignItems={"center"}
          gap={"15px"}
          display={{ base: "flex", md: "none", lg: "none" }}
        >
          <IconButton
            onClick={onOpen}
            variant="ghost"
            color={"#FFFFFF"}
            fontSize={"20px"}
            aria-label="open menu"
            _hover={{
              bg: "black",
            }}
            icon={<FiMenu />}
          />
          <Text
            color={"#FFFFFF"}
            // border={"1px solid"}
            zIndex={1}
            fontSize={"32px"}
            fontFamily="Pacifico"
          >
            NFTify
          </Text>
        </Flex>
        <Box display={{ base: "none", md: "block" }}>
          <InputGroup>
            <Input
              borderRadius={"20px"}
              border={"1px solid #FFFFFF"}
              minW={"430px"}
              placeholder={"Search"}
              color="#FFFFFF"
              fontFamily={"Poppins"}
              fontSize={"18px"}
              fontStyle={"normal"}
              paddingLeft={"20px"}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <InputRightElement paddingRight={"20px"}>
              <FiSearch color="#FFFFFF" />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box alignItems={"center"}>
          <Button
            bg={"linear-gradient(131deg, #7C0F35 0%, #581266 100%)"}
            color="#FFFFFF"
            fontFamily={"Poppins"}
            fontSize={"16px"}
            width={"160px"}
            height={"50px"}
            borderRadius={"20px"}
            fontWeight={"400"}
            onClick={handleClick}
          >
            Connect
          </Button>
        </Box>
      </Flex>
      <Box display={{ base: "block", md: "none" }} w={"80%"} m={"20px auto"}>
        <InputGroup>
          <Input
            borderRadius={"20px"}
            border={"1px solid #FFFFFF"}
            placeholder={"Search"}
            color="#FFFFFF"
            fontFamily={"Poppins"}
            fontSize={"18px"}
            fontStyle={"normal"}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <InputRightElement paddingRight={"20px"}>
            <FiSearch color="#FFFFFF" width={"16px"} height={"16px"} />
          </InputRightElement>
        </InputGroup>
      </Box>
    </>
  );
};

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getQuery, sendQuery] = useState("");
  return (
    <>
      <Box minH="100vh" bgImage={"./bgImage.png"}>
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.7)"
        ></Box>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="xs"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} sendQuery={sendQuery} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {/* Content */}
          <ProductList getQuery={getQuery} />
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
