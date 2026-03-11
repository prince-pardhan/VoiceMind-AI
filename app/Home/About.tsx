"use client";

import { Box, Flex, Button, Text, Title, Group, Grid, Card, Image } from "@mantine/core";

export default function Page() {
  return (
    <Box style={{ width: "100%", minHeight: "100vh", background: "rgb(0, 0, 0)" }}>

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
        <Title c="#2301ff"
          fw={900}
          order={1}
          style={{
            background: "linear-gradient(90deg,#667eea,#764ba2)",
            WebkitBackgroundClip: "text",
          }}
        >
          VoiceMind AI
        </Title>

        <Group gap={10}></Group>

        <Button radius="xl" style={{ background: "red" }}>
          Download
        </Button>
      </Flex>

      {/* Hero */}
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{
          minHeight: "90vh",
          textAlign: "center",
          padding: "20px",
          background: "linear-gradient(120deg,#667eea,#764ba2,#6dd5ed)",
          color: "white",
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
          style={{
            fontSize: "clamp(32px,6vw,52px)",
            fontWeight: 800,
          }}
        >
          The Future of Voice Technology,<br />
        </Title>

        <Text maw={900} size="lg" mb={10} c="#ffffff" fw={900}>
          (((  VoiceMind AI is an intelligent voice assistant powered by advanced AI.
          Convert speech to text, automate tasks, and control applications
          using powerful voice commands.......?  )))
        </Text>

        <Text mb={10} style={{ fontSize: "clamp(28px,5vw,45px)", fontWeight: 900 }}>
          Powerful AI Features,
        </Text>
      </Flex>

      {/* Features */}
      <Box py={100} px={{ base: 20, md: 60 }} bg="#000000">
        <Grid>
          {[
            {
              title: "Voice Commands",
              desc: "Control apps and devices using natural voice commands. Simply speak and let AI handle tasks quickly and efficiently. VoiceMind AI understands your intent and responds instantly. It makes interacting with technology faster and more natural. Experience a smarter, hands-free way to manage your digital world.....?",
            },
            {
              title: "Speech to Text",
              desc: "Convert your speech into accurate text instantly. Speak naturally and watch your words appear on the screen in real time. Our advanced AI ensures high accuracy and fast processing. Perfect for notes, messages, and productivity tasks.Save time and communicate more efficiently with voice.....?",
            },
            {
              title: "Smart Automation",
              desc: "Automate tasks and improve productivity. Let AI handle repetitive work while you focus on what matters most. Simplify your workflow with smart voice commands and automation. Save time and complete tasks faster with intelligent assistance. Work smarter and boost your efficiency every day.....?",
            },
            {
              title: "Multi Language",
              desc: "Speak different languages and AI understands. Communicate naturally without worrying about language barriers. Our AI can recognize and process multiple languages instantly. It helps you connect, work, and create with people worldwide. Experience seamless multilingual interaction powered by smart AI.....?",
            },
            {
              title: "Fast AI Processing",
              desc: "Lightning fast speech recognition system. Instantly converts your voice into actions and text in real time Advanced AI ensures quick response with high accuracy. Enjoy smooth, lag-free interaction with your devices. Experience the speed and power of next-generation voice technology.....?",
            },
            {
              title: "Secure & Private",
              desc: "Your voice data stays protected and encrypted. Advanced security ensures your conversations remain private. All voice interactions are processed with strong data protection. We prioritize user privacy and secure data handling. Use voice technology with complete confidence and trust.......?",
            },
          ].map((feature, i) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={i}>
              <Card
                shadow="lg"
                radius="xl"
                padding="xl"
                style={{
                  textAlign: "center",
                  background: "rgb(0, 8, 255)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  transition: "all 0.9s ease",
                  cursor: "pointer",
                  border: "1px solid rgba(13, 0, 255, 0.99)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-38px)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgb(0, 0, 0)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Image width={60} mx="auto" mb={17} />

                <Title order={4} mb={10} c="white" fw={900}>
                  {feature.title}
                </Title>

                <Text c="white" fw={200}>
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
        gap={80}
        px={{ base: 20, md: 60 }}
        py={100}
        wrap="wrap"
        style={{
          background: "linear-gradient(120deg,#eef2ff,#f9fafc)",
        }}
      >
        <Box maw={900}>
          <Title mb={30} fw={900}>
            About VoiceMind AI =
          </Title>

          <Text c="black" fw={900}>
            VoiceMind AI transforms the way people interact with technology.
            Using advanced machine learning and natural language processing,
            it allows users to perform tasks simply by speaking.......?
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
        py={100}
        px={{ base: 20, md: 60 }}
        style={{
          background: "linear-gradient(120deg,#667eea,#764ba2)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Title mb={20} fw={900}>``Start Using VoiceMind AI Today,,</Title>

        <Text maw={900} mb={30} fw={400}>
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
          VoiceMind AI brings the future of voice automation to your fingertips....?

        </Text>
      </Flex>
    </Box>
  );
}