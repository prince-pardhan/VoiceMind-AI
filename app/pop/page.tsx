"use client";

import {
  Box,
  Flex,
  Button,
  Text,
  Title,
  Group,
  Grid,
  Card,
  Image,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";


export default function Page() {
  const [opened, { open, close }] = useDisclosure(false);

  // ✅ Page load hote hi popup open hoga
  useEffect(() => {
    open();
  }, []);

  return (
    <Box style={{ width: "100%", minHeight: "100vh" }}>

      {/* ✅ Welcome Modal */}
      <Modal
        opened={opened}
        onClose={close}
        centered
        radius="xl"
        title="Welcome "
        
      >
        <Title order={3} mb={10}>
          Welcome to VoiceMind AI 🚀
        </Title>

        <Text mb={20}>
          Future of AI voice technology me aapka swagat hai.  
          Ab aap voice se sab control kar sakte ho 
        </Text>

        <Button fullWidth onClick={close}>
          Get Started
        </Button>
      </Modal>

      {/* Navbar */}
      <Flex
        justify="space-between"
        align="center"
        px={{ base: 20, md: 60 }}
        py={20}
        wrap="wrap"
        style={{
          background: "white",
          boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
        }}
      >
        <Title
          c="black"
          fw={900}
          order={1}
          style={{
            background: "linear-gradient(90deg,#667eea,#764ba2)",
            WebkitBackgroundClip: "text",
          }}
        >
          VoiceMind-AI
        </Title>

        <Group gap={10}></Group>

        <Button radius="xl" style={{ background: "#002fff" }}>
          Download
        </Button>

        <Group>
             <a href="https://docs.google.com/forms/d/1Oq_logQzfQLEk-8gLRKXHIIuHwljsfJmj8qLAE_0ASI/edit" target="_blank"> <Button radius="xl" style={{ background: "#002fff" }}>
        singup
      </Button></a>
        </Group>
      </Flex>

      {/* 👉 Baaki tera pura code SAME rahega (Hero, Features, About, CTA) */}
    </Box>
  );
}