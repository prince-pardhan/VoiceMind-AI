"use client";

import { Box, Flex, Button, Text, Title, Group, Grid, Card, Image, Modal, TextInput, PasswordInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function Page() {
  const [opened, { open, close }] = useDisclosure(false);

  // ✅ Page load hote hi popup open hoga
  useEffect(() => {
    open();
  }, []);
  return (
    <Box style={{ width: "100%", minHeight: "100vh" }}>

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
        <Group  >
            <a href="https://docs.google.com/forms/d/1Oq_logQzfQLEk-8gLRKXHIIuHwljsfJmj8qLAE_0ASI/edit"target="_blank"> <Button radius="xl" style={{ background: "#002fff" }}>
        singup
      </Button></a>
        </Group>
        <Link href="/Profile">
          <CgProfile size={30} style={{ cursor: "pointer" }} />
        </Link>
        {/* ///////////////////////////{{{  wele come model  }}}////////////////////////////////////////////////// */}
        
        <Modal
          opened={opened}
          onClose={close}
          centered
          radius="15px"
          fw={900}
        >
          <Title order={3} mb={10} c="blue" fw={900} >
            Welcome to VoiceMind-AI
          </Title>

          <Card
            radius="xl"
            shadow="lg"
            style={{
              background: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "0.3s",
            }}
          >
            <Text
              mb={20}
              fw={800}
              style={{
                color: "#000000",
              }}
            >
              Welcome to the future of voice technology. Now, you can control everything with your voice.
            </Text>
          </Card>
<br /> 
          <Group  >
             <a href="https://docs.google.com/forms/d/1Oq_logQzfQLEk-8gLRKXHIIuHwljsfJmj8qLAE_0ASI/edit" target="_blank"> <Button radius="xl" style={{ background: "#002fff" }}>
        singup
      </Button></a>
          </Group>
        </Modal>
        {/* ///////////////////////////{{{  wele come model  }}}////////////////////////////////////////////////// */}
      </Flex>

      {/* Hero */}
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{
          minHeight: "90vh",
          textAlign: "center",
          padding: "40px 20px",
          background:
            "linear-gradient(135deg,#4facfe 0%,#00f2fe 25%,#7367f0 50%,#ff9a9e 75%,#fad0c4 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          w={{ base: 260, sm: 320, md: 420 }}
          radius="lg"
          mb={30}
        />

        <Title
          order={1}
          mb={20}
          c="white"
          style={{
            fontSize: "clamp(32px,6vw,52px)",
            fontWeight: 800,
          }}
        >
          The Future of Voice Technology
        </Title>

        <Text maw={900} size="lg" mb={10} c="black" fw={900}>
          VoiceMind AI is an intelligent voice assistant powered by advanced AI.
          Convert speech to text, automate tasks, and control applications
          using powerful voice commands....?
        </Text>

        <Text
          mb={10}
          c="white"
          style={{ fontSize: "clamp(28px,5vw,45px)", fontWeight: 900, }}
        >
          Powerful AI Features
        </Text>
      </Flex>
<br />
      {/* Features */}
        <Image
              src="jo.png"
              />
      <Box py={{ base: 60, md: 100 }} px={{ base: 20, md: 60 }}>
        <Grid>
          {[
            {
              title: "Voice Commands",
              desc: "Control apps and devices using natural voice commands. Simply speak and let AI handle tasks quickly and efficiently.....?",
            },
            {
              title: "Speech to Text",
              desc: "Convert your speech into accurate text instantly. Speak naturally and watch your words appear on the screen.....?",
            },
            {
              title: "Smart Automation",
              desc: "Automate tasks and improve productivity. Let AI handle repetitive work while you focus on what matters most.....?",
            },
            {
              title: "Multi Language",
              desc: "Speak different languages and AI understands. Communicate naturally without worrying about language barriers.....?",
            },
            {
              title: "Fast AI Processing",
              desc: "Lightning fast speech recognition system. Instantly converts your voice into actions and text.....?",
            },
            {
              title: "Secure & Private",
              desc: "Your voice data stays protected and encrypted with advanced security.....?",
            },



          ].map((feature, i) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={i}>
            
              <Card
                shadow="lg"
                radius="xl"
                padding="xl"
                style={{
                  textAlign: "center",
                  background: "linear-gradient(135deg,#ff9a9e,#fad0c4,#fbc2eb,#a6c1ee)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.4)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.6s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-20px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 30px 60px rgba(0,0,0,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Image width={70} mx="auto" mb={17} />

                <Title order={4} mb={10} c="black" fw={900}>
                  {feature.title}
                </Title>

                <Text c="black" fw={400}>
                  {feature.desc}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Box>

      {/* About */}
      <Flex
        justify="center"
        align="center"
        gap={{ base: 40, md: 80 }}
        px={{ base: 20, md: 60 }}
        py={{ base: 60, md: 100 }}
        wrap="wrap"
        style={{
          background: "linear-gradient(135deg,#e0e7ff,#f3e8ff,#e0f7fa,#fdf2f8)",
        }}
      >
        <Box maw={900}>
          <Title mb={30} fw={900} c="black" bg="blue">
            VoiceMind AI =
          </Title>

          <Text c="black" fw={500} bg="red">
            VoiceMind AI transforms the way people interact with technology.
            Using advanced machine learning and natural language processing,
            it allows users to perform tasks simply by speaking.......?
          </Text> <br />
          <Text c="black" fw={900} bg="green">
            Ai jis ke bara me shirf logo ne suna tha ab ve es ka use kar sakta t ye hi h futchar ((((VoiceMind AI))))  .......?
          </Text>
        </Box>

        <Image
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
          w={{ base: 280, sm: 350, md: 420 }}
          radius="lg"
          style={{
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          }}
        />
      </Flex>

      {/* CTA */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        py={{ base: 60, md: 100 }}
        px={{ base: 20, md: 60 }}
        style={{
          background:
            "linear-gradient(135deg,#667eea 0%,#764ba2 30%,#6dd5ed 60%,#a18cd1 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Title mb={40} fw={900} c="black" >
          Start Using VoiceMind AI Today =
        </Title>

        <Text maw={900} mb={30} fw={900} c="white">
          Experience the next generation AI voice assistant and automate your digital life effortlessly.
          Control your apps, devices, and workflows using simple voice commands.
          VoiceMind AI understands natural language just like a human assistant.
          Perform daily tasks faster without touching your keyboard or screen.
          From sending messages to managing schedules, everything becomes easier.
          Advanced AI ensures accurate and lightning-fast speech recognition.
          Turn complex commands into simple spoken instructions.
          Save time and boost productivity with intelligent automation.
          VoiceMind AI adapts to your habits and learns from your usage.
          Enjoy seamless interaction across different platforms and devices.
          Speak naturally and let the AI handle the rest.
          Whether you are working, studying, or relaxing, your assistant is always ready.
          Get instant responses and complete tasks in seconds.
          Experience smooth and reliable voice-powered technology.
          Break language barriers with multi-language understanding.
          Your voice data stays secure and protected with strong encryption.
          Designed to make technology more human and accessible.
          Simplify your digital life with smart voice interactions.
          Work smarter with AI that listens and understands.
          VoiceMind AI brings the future of voice automation to your fingertips......?
        </Text>
        <Title mb={40} fw={900} c="blue" >
          Thanks,
        </Title>
      </Flex>
    </Box>
  );
}