import {
  VStack,
  Container,
  Heading,
  HStack,
  Box,
  Text,
  Flex,
  Center,
  useColorModeValue,
  Stack,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
export default function Footer() {
  return (
    <Flex
      bgColor={"#222222"}
      w="full"
      flexDirection={"column"}
      justify={"center"}
      p={10}
      mt={"0 !important"}
    >
      <Box mx={"auto"}>
        <Image
          src="/image/logo.png"
          alt="Picture of the author"
          width={30}
          height={30}
        />
      </Box>
      <Text color={"#6d6d6d"} mx={"auto"} fontSize={"11px"}>
        © 2022 FIGURE3 INC. ALL RIGHTS RESERVED{" "}
      </Text>
    </Flex>
  );
}
