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
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NewsFeed() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(false);
  const getData = async () => {
    const res = await axios.get(`http://localhost:5500/news`);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, [done]);
  return (
    <HStack
      maxW={"1340px"}
      w="full"
      mx="auto"
      align={"start"}
      borderTop={"5px solid black"}
      flexWrap={"wrap"}
      pb={20}
    >
      <Flex align={"center"}>
        <Box>
          <Image
            src="/image/logo.png"
            alt="Picture of the author"
            width={25}
            height={25}
          />
        </Box>
        <Text
          fontSize={24}
          fontWeight={"bold"}
          height={"40px"}
          pl={2}
          textTransform={"uppercase"}
        >
          The Latest
        </Text>
      </Flex>
      <Flex flexWrap={"wrap"} maxW={"1340px"} pt={10}>
        {data &&
          data.map((d, i) => {
            return (
              <Box width={"33%"} p={4} key={i}>
                <Flex direction={"column"}>
                  <Image
                    src="/image/music.jpg"
                    alt="Picture of the author"
                    width={300}
                    height={350}
                  />
                  <Text>2012.12.31</Text>
                  <Text pt={2} pb={2} fontSize={"32px"}>
                    {d.title}
                  </Text>
                  <Box>
                    <Button
                      colorScheme="linkedin"
                      backgroundColor={"black"}
                      borderRadius={"100px"}
                    >
                      <Link href={`/news/${d._id}`}>
                        <Text>
                          <a>See More</a>
                        </Text>
                      </Link>
                    </Button>
                  </Box>
                </Flex>
              </Box>
            );
          })}
      </Flex>
      <Center w={"full"}>
        <Button
          colorScheme="linkedin"
          backgroundColor={"black"}
          borderRadius={"100px"}
          mt={10}
        >
          See More
        </Button>
      </Center>
    </HStack>
  );
}
