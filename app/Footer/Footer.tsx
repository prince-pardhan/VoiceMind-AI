"use client";

import { Box, Flex, Text, Title, Grid, Divider, Stack, Group, Button } from "@mantine/core";

export default function Page() {
  return (
    <Box
      px={{ base: 20, md: 60 }}
      py={{ base: 50, md: 70 }}
      style={{
        background: "linear-gradient(135deg,#020617,#0f172a,#1e293b)",
        color: "white",
      }}
    >

      <Grid>

        {/* Brand */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Title
            order={3}
            mb={10}
            style={{
              background: "linear-gradient(90deg,#6dd5ed,#a18cd1)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: 900,
            }}
          >
            VoiceMind AI
            <Divider mb={10} fw={900} />
          </Title>

          <Text size="sm" c="gray.4">
            VoiceMind AI is a powerful voice assistant that helps users
            control applications, automate tasks, and convert speech
            into accurate text using advanced artificial intelligence.
          </Text>

          <Divider mb={10} />
          <Divider mb={10} />
        </Grid.Col>

        {/* Company */}
        {/* <Grid.Col span={{ base: 6, sm: 3, md: 2 }}>
          <Title order={5} mb={10}>Company</Title>

          <Text size="sm" style={{ cursor: "pointer" }}>
            Contact
          </Text>
        </Grid.Col> */}

        {/* Social */}
        <Grid.Col span={{ base: 6, sm: 3, md: 2 }}>
          <Title order={6} mb={5} fw={900} c="blue">Follow</Title>
          <Divider mb={10} />

          <Stack gap={8}>
            <Text size="sm">
              <a href="https://x.com/Rkswami001" target="_blank">Twitter</a>
            </Text>

            <Text size="sm">
              <a href="https://www.linkedin.com/in/rk-swami-b63251379/" target="_blank">LinkedIn</a>
            </Text>

            <Text size="sm">
              <a href="https://github.com/prince-pardhan" target="_blank">GitHub</a>
            </Text>

            <Text size="sm">
              <a href="https://www.youtube.com/@RkWriter001" target="_blank">YouTube</a>
            </Text>
          </Stack>


        </Grid.Col>
        <Grid.Col span={{ base: 6, sm: 3, md: 2 }}>
          <Title order={6} mb={5} fw={900} c="blue">Contact</Title>
          <Divider mb={10} />

          <Stack gap={8}>
            <Text size="sm">
              <a href="https://wa.me/918290400325" target="_blank">
                WhatsApp
              </a>
            </Text>
            <Text size="sm">
              <a href="https://wa.me/917450800010" target="_blank">
                WhatsApp=2
              </a>
            </Text>
            <Text size="lg">
              <a href="tel:+918290400325">Call</a>
            </Text>

          </Stack>


        </Grid.Col>

      </Grid><br />
      <Divider mb={10} />

      <Group  >
        <a href="https://docs.google.com/forms/d/1Oq_logQzfQLEk-8gLRKXHIIuHwljsfJmj8qLAE_0ASI/edit"> <Button radius="xl" style={{ background: "#002fff" }}>
          singup
        </Button></a>
        <Button radius="xl" style={{ background: "#002fff" }}>
          Download
        </Button>


      </Group>

      {/* Bottom */}
      <Flex
        justify="center"
        align="center"
        mt={30}
        style={{
          borderTop: "3px solid rgba(255,255,255,0.1)",
          paddingTop: "20px",
        }}
      >
        <Text size="sm" c="gray.5">
          © 2026 VoiceMind-AI
          <Divider mb={10} />
        </Text>
      </Flex>

    </Box>
  );
}