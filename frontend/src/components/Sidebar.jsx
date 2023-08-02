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
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiMenu, FiSearch } from "react-icons/fi";
import { Footer } from "./Footer";
import { ProductList } from "./ProductList";

const LinkItems = [
  { name: "Token Address", icon: FiHome },
  { name: "Pair Address", icon: FiTrendingUp },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="2s ease"
      bg={"#292929"}
      borderRadius={"0px 32px 0px 0px"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h={{ base: "100%", md: "100%", lg: "92%" }}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="Pacifico"
          fontWeight="bold"
          color={"rgba(255, 255, 255, 0.7)"}
        >
          NFTify
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} color={"#F7F9F9"}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        // bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        alignItems={"center"}
        justifyContent={"space-between"}
        {...rest}
      >
        <Flex alignItems={"center"}>
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            icon={<FiMenu />}
          />
          <Text
            fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
            display={{ base: "block", md: "block", lg: "none" }}
          >
            Logo
          </Text>
        </Flex>
        <Box display={{ base: "none", md: "block" }}>
          <InputGroup>
            <Input borderRadius={"20px"} minW={"430px"} />
            <InputRightElement>
              <FiSearch />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box alignItems={"center"}>
          <Button>Connect</Button>
        </Box>
      </Flex>
      <Box display={{ base: "block", md: "none" }} w={"80%"} m={"20px auto"}>
        <InputGroup>
          <Input borderRadius={"20px"} />
          <InputRightElement>
            <FiSearch />
          </InputRightElement>
        </InputGroup>
      </Box>
    </>
  );
};

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
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
      <MobileNav onOpen={onOpen} />
      <Box
        //
        overflowY={"scroll"}
        height={"80vh"}
        ml={{ base: 0, md: 60 }}
        p="4"
        css={{
          "::-webkit-scrollbar": {
            // Height and border radius of the vertical scrollbar
            height: "1px",
            width: "12px",
            borderRadius: "10px",
          },
          "::-webkit-scrollbar-thumb": {
            background: "#F30050",
            borderRadius: "10px", // Color of the vertical scrollbar thumb
          },
        }}
      >
        {/* Content */}
        <ProductList />
      </Box>
      <Box position={"relative"}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Sidebar;
