import {
  Flex,
  Heading,
  Box,
  Link,
  useDisclosure,
  Button,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { app_name } from "../../../App";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/"), [navigate]);
  const onClickBlog = useCallback(() => navigate("/blog"), [navigate]);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={() => onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            {app_name}
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickHome}>Home</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickBlog}>Blog</Link>
          </Box>
          <Box pr={4}>
            <Link href="https://github.com/katz0726?tab=repositories"></Link>
          </Box>
          <Box>
            <IconButton
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              aria-label="DarkMode Switch"
            >
              {colorMode === "light" ? "Dark" : "Light"}
            </IconButton>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickBlog={onClickBlog}
      />
    </>
  );
});
