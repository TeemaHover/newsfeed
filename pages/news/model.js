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
  const getData = async () => {
    const res = await axios.get(`http://localhost:5500/news`);
    setData(res.data);
  };
  const handle = async (id) => {
    const res = await axios.get(`http://localhost:5500/news`);
    console.log(res.data);
  };
  const submit = async () => {
    const res = await axios.post("http://localhost:5500/news", {
      text: form.text,
      title: form.title,
    });
    setDone(!done);
    console.log(res);
  };
  return (
    <VStack>
      <HomeLayout />
      <NewsFeed />
      <Banner />
      <Footer />
    </VStack>
  );
}

export default Home;
