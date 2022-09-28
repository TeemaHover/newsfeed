import {
  VStack,
  Container,
  Heading,
  HStack,
  Box,
  Text,
  Flex,
  Button,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Banner from "../src/components/banner";
import Footer from "../src/components/footer";
import HomeLayout from "../src/components/home";
import NewsFeed from "../src/components/newsfeed";

function Home() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ text: "", title: "" });
  const [done, setDone] = useState(false);
  // var data = [];
  const [data1, setdata1] = useState({ name: "", add: 0 });
  useEffect(() => {
    getData();
  }, [done]);
  let url = process.env.url || "http://localhost:5500";
  const getData = async () => {
    const res = await axios.get(`${url}/news`);
    setData(res.data);
  };

  const submit = async () => {
    const res = await axios.post("http://localhost:5500/news", {
      text: form.text,
      title: form.title,
    });
    setDone(!done);
    console.log(res);
    // setdata1((d) => ({ ...d, name: res.data.name, add: res.data.add }));
    // setForm((d) => ({ ...d, name: "", num1: 0, num2: 0 }));
  };
  return (
    <VStack>
      {/* {data && (
        <>
          {" "}
          <Heading>{data.text}</Heading>
          <Heading>{data.title}</Heading>
        </>
      )} */}

      {/* <FormControl>
        <FormLabel>Amount</FormLabel>
        <Input
          value={form.title}
          onChange={(e) => setForm((d) => ({ ...d, title: e.target.value }))}
        />
        <Input
          value={form.text}
          onChange={(e) => setForm((d) => ({ ...d, text: e.target.value }))}
        ></Input>

        <Button onClick={() => submit()}>submit</Button>
      </FormControl>
      {data1.name && data1.add != 0 && (
        <Heading>
          {data1.name}: {data1.add}
        </Heading>
      )} */}
      <HomeLayout />
      <NewsFeed />
      <Banner />
      <Footer />
    </VStack>
  );
}

export default Home;
