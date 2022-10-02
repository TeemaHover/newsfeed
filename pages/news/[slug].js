import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";

import { Button } from "@chakra-ui/react";

export default function Id() {
  const router = useRouter();
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const { slug } = router.query;
  let url = process.env.url || "https://newsfeed-new.herokuapp.com/";
  useEffect(() => {
    const getData = async () => {
      const res = await axios({
        method: "get",
        url: `${url}/news/${router.query.slug}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }).then((d) => setData(d.data));
    };
    const getAllData = async () => {
      const res = await axios.get(`${url}/news/`);
      setAllData(res.data);
    };
    if (slug) {
      getData();
      getAllData();
    }
  }, [slug]);
  return (
    <>
      <Box backgroundColor={"#f0f2f5"}>
        <HStack
          maxW={"1140px"}
          w="full"
          mx="auto"
          align={"start"}
          // borderTop={"5px solid black"}
          pb={20}
          backgroundColor={"#f0f2f5"}
          justify={"space-between"}
        >
          <Box w={"64%"} mt={5}>
            <Box
              borderRadius={"10px"}
              backgroundColor={"white"}
              boxShadow="md"
              p={5}
            >
              {data && (
                <Text
                  fontSize={32}
                  fontWeight={"bold"}
                  borderBottom={"1px solid black"}
                  pb={5}
                >
                  {data.title}
                </Text>
              )}
              <Box w="full" mx="auto">
                <Image
                  src="/image/product.jpg"
                  alt="Picture of the author"
                  width={650}
                  height={500}
                />
              </Box>
              {data && <Text>{data.text}</Text>}
              <Stack direction={"row"} gap={2} pt={5} justify={"space-between"}>
                <Stack direction={"row"}>
                  <Button>
                    <Flex align={"center"}>
                      <BiLike />
                      <Text>Like</Text>
                    </Flex>
                  </Button>
                  <Button>
                    <Flex align={"center"}>
                      <AiOutlineComment />
                      <Text>Comment</Text>
                    </Flex>
                  </Button>
                </Stack>
                <Button>
                  <Flex align={"center"}>
                    <AiOutlineShareAlt />
                    <Text>Share</Text>
                  </Flex>
                </Button>
              </Stack>
            </Box>
            {allData &&
              allData.map((d, i) => {
                return (
                  <Box
                    borderRadius={"10px"}
                    backgroundColor={"white"}
                    mt={10}
                    boxShadow="md"
                    p={5}
                    key={i}
                  >
                    <Text
                      fontSize={32}
                      fontWeight={"bold"}
                      borderBottom={"1px solid black"}
                      pb={5}
                    >
                      {d.title}
                    </Text>

                    <Box w="full" mx="auto">
                      <Image
                        src="/image/product.jpg"
                        alt="Picture of the author"
                        width={650}
                        height={500}
                      />
                    </Box>
                    <Text>{d.text}</Text>
                    <Stack
                      direction={"row"}
                      gap={2}
                      pt={5}
                      justify={"space-between"}
                    >
                      <Stack direction={"row"}>
                        <Button>
                          <Flex align={"center"}>
                            <BiLike />
                            <Text>Like</Text>
                          </Flex>
                        </Button>
                        <Button>
                          <Flex align={"center"}>
                            <AiOutlineComment />
                            <Text>Comment</Text>
                          </Flex>
                        </Button>
                      </Stack>
                      <Button>
                        <Flex align={"center"}>
                          <AiOutlineShareAlt />
                          <Text>Share</Text>
                        </Flex>
                      </Button>
                    </Stack>
                  </Box>
                );
              })}
          </Box>
          <Box w={"24%"} gap={"20px"} pt={7} pl={3} pr={3}>
            <Flex
              align={"center"}
              borderTop={"5px solid black"}
              borderRadius={2}
              pt={3}
              pb={3}
            >
              <Image
                src="/image/logo.png"
                alt="Picture of the author"
                width={20}
                height={20}
              />

              <Text ml={2} fontWeight={"bold"}>
                GEAR BUYING GUIDES
              </Text>
            </Flex>
            <Text>
              Curated buying guides featuring the best gear across many
              categories.
            </Text>
            {allData &&
              allData.map((d, i) => {
                return (
                  <Box key={i}>
                    <Flex
                      align={"start"}
                      pt={10}
                      pb={5}
                      borderBottom={"1px solid #ccc"}
                    >
                      <Box w={"30%"}>
                        <Image
                          src="/image/camera.jpg"
                          alt="Picture of the author"
                          width={70}
                          height={60}
                          layout={"responsive"}
                        />
                      </Box>
                      <Box w={"70%"} pl={7}>
                        <Text w={"full"} fontWeight={"bold"}>
                          {d.title}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
          </Box>
        </HStack>
      </Box>
    </>
  );
}
