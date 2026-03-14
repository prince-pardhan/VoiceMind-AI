"use client";

import { Box, Flex, Text, Title, Grid } from "@mantine/core";

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
          </Title>

          <Text size="sm" c="gray.4">
            VoiceMind AI is a powerful voice assistant that helps users
            control applications, automate tasks, and convert speech
            into accurate text using advanced artificial intelligence.
          </Text>
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
          <Title order={6} mb={10} style={{gap:"20px"}}>Follow</Title>

          <Text size="sm" style={{ cursor: "pointer" ,gap:"20px"}}> <a href="https://x.com/Rkswami001">Twitter</a></Text> 
          <Text size="sm" style={{ cursor: "pointer" }}> <a href="https://www.linkedin.com/in/rk-swami-b63251379/">LinkedIn</a></Text>
          <Text size="sm" style={{ cursor: "pointer" }}>  <a href="https://github.com/prince-pardhan">GitHub</a> </Text>
          <Text size="sm" style={{ cursor: "pointer" }}> <a href="https://www.youtube.com/@RkWriter001">YouTube</a> </Text>

        </Grid.Col>

      </Grid>

      {/* Bottom */}
      <Flex
        justify="center"
        align="center"
        mt={40}
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "20px",
        }}
      >
        <Text size="sm" c="gray.5">
          © 2026 VoiceMind AI • All rights reserved
        </Text>
      </Flex>
    </Box>
  );
}