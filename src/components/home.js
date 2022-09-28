import {
  VStack,
  Container,
  Heading,
  HStack,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";

export default function HomeLayout() {
  return (
    <HStack maxW={"1380px"} w="full" mx="auto" align={"start"} pb={10}>
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
          Curated buying guides featuring the best gear across many categories.
        </Text>
        <Flex align={"start"} pt={10} pb={5} borderBottom={"1px solid #ccc"}>
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
            <Text fontWeight={"bold"}>
              The Best Casual Men’s Loafers for 2022
            </Text>
          </Box>
        </Flex>
        <Flex align={"start"} pt={5} pb={5} borderBottom={"1px solid #ccc"}>
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
            <Text fontWeight={"bold"}>
              The Best Casual Men’s Loafers for 2022
            </Text>
          </Box>
        </Flex>
        <Flex align={"start"} pt={5} pb={5} borderBottom={"1px solid #ccc"}>
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
            <Text fontWeight={"bold"}>
              The Best Casual Men’s Loafers for 2022
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box w={"52%"} gap={"20px"} backgroundColor="#f4f4f6" p={5}>
        <Image
          src="/image/music.jpg"
          alt="Music"
          width={650}
          height={500}
          layout={"responsive"}
        />
        <Text
          fontSize="12px"
          pt={8}
          color={"#368ace"}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          pl={4}
        >
          Books for men
        </Text>
        <Text fontSize="40px" fontWeight={"bold"} pb={5} pl={4}>
          The Live of Brian: A Mentor
        </Text>
        <Text fontSize="14px" pl={4}>
          Read more
        </Text>
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
          Curated buying guides featuring the best gear across many categories.
        </Text>
        <Flex align={"start"} pt={10} pb={5} borderBottom={"1px solid #ccc"}>
          <Box w={"70%"} pr={7}>
            <Text fontWeight={"bold"}>
              The Best Casual Men’s Loafers for 2022
            </Text>
          </Box>
          <Box w={"30%"}>
            <Image
              src="/image/camera.jpg"
              alt="Picture of the author"
              width={70}
              height={60}
              layout={"responsive"}
            />
          </Box>
        </Flex>
        <Flex align={"start"} pt={5} pb={5} borderBottom={"1px solid #ccc"}>
          <Box w={"70%"} pr={7}>
            <Text fontWeight={"bold"}>
              The Best Casual Men’s Loafers for 2022
            </Text>
          </Box>
          <Box w={"30%"}>
            <Image
              src="/image/camera.jpg"
              alt="Picture of the author"
              width={70}
              height={60}
              layout={"responsive"}
            />
          </Box>
        </Flex>
        <Flex align={"start"} pt={5} pb={5} borderBottom={"1px solid #ccc"}>
          <Box w={"70%"} pr={7}>
            <Text fontWeight={"bold"}>
              The Best Casual Men’s Loafers for 2022
            </Text>
          </Box>
          <Box w={"30%"}>
            <Image
              src="/image/camera.jpg"
              alt="Picture of the author"
              width={70}
              height={60}
              layout={"responsive"}
            />
          </Box>
        </Flex>
      </Box>
    </HStack>
  );
}
