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
export default function Banner() {
  return (
    <Box
      backgroundImage={"/image/music.jpg"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      h={200}
      w="full"
    ></Box>
  );
}
