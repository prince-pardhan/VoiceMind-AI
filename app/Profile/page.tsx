"use client";

import {
    Box,
    Card,
    Avatar,
    Text,
    Group,
    Stack,
    BackgroundImage,
    Flex,
    Image,
} from "@mantine/core";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";

export default function ProfilePage() {
    return (
        <Box
            style={{
                width: "100%",
                minHeight: "100vh",
                background: "#f5f7fa",
            }}
        >
            <Card
                radius={0}
                shadow="lg"
                style={{
                    width: "100%",
                    minHeight: "100vh",
                    overflow: "hidden",
                }}
            >
                {/* Cover Image */}
                <BackgroundImage src="/image.png" h={220} />

                <Flex
                    direction={{ base: "column", md: "row" }}
                    style={{ width: "100%" }}
                >
                    {/* LEFT SIDE */}
                    <Box
                        style={{
                            width: "100%",
                            maxWidth: "350px",
                            background: "#002fff",
                            color: "white",
                            padding: 20,
                            textAlign: "center",
                        }}
                    >
                        <Avatar
                            src="/rk.jpeg"
                            size={120}
                            radius="50%"
                            mx="auto"
                            mt={-70}
                            style={{ border: "5px solid white" }}
                        />

                        <Text mt="md" fw={700} size="lg">
                            Rahul swami
                        </Text>

                        <Text size="sm">Full Stack Developer</Text>

                        {/* Stats */}
                        <Group justify="space-around" mt="xl">
                            <Stack gap={0}>
                                <Text fw={900}>30M</Text>
                                <Text size="xs">Followers</Text>
                            </Stack>

                            <Stack gap={0}>
                                <Text fw={900}>3K</Text>
                                <Text size="xs">Following</Text>
                            </Stack>

                            <Stack gap={0}>
                                <Text fw={900}>90M</Text>
                                <Text size="xs">Views</Text>
                            </Stack>
                        </Group>

                        {/* Location */}
                        <Group gap={6} mt="lg" justify="center">
                            <FiMapPin size={18} color="#ff0004" />
                            <Text fw={600} size="sm">
                                India, Haryana, Sirsa, Madhosinghana (125055)
                            </Text>
                        </Group>
                    </Box>

                    {/* RIGHT SIDE */}
                    <Box
                        p="lg"
                        style={{
                            flex: 1,
                        }}
                    >
                        <Text fw={900} size="xl" mb="sm">
                            Welcome to VoiceMind-AI
                        </Text>

                        <Text size="sm" c="dimmed" fw={500}>
                            VoiceMind AI is a smart voice assistant built with advanced artificial intelligence.
                            It allows users to easily convert speech into accurate text in real time.
                            You can automate daily tasks and improve productivity using simple voice commands.
                            The system helps in controlling applications without manual interaction.
                            It is designed to be fast, efficient, and user-friendly for everyone.
                            VoiceMind AI makes technology more accessible through the power of voice.

                        </Text>

                        <br />

                        {/* Social Icons */}
                        <Flex gap={15} wrap="wrap">
                            <a
                                href="https://facebook.com/profile.php?id=61553299053689"
                                target="_blank"
                            >
                                <FaFacebookF size={25} color="#1877F2" />
                            </a>

                            <a
                                href="https://instagram.com/prince_pardhan_325"
                                target="_blank"
                            >
                                <FaInstagram size={25} color="#E4405F" />
                            </a>

                            <a href="https://x.com/Rkswami001" target="_blank">
                                <FaTwitter size={25} color="#1DA1F2" />
                            </a>

                            <a href="https://youtube.com/@RkWriter001" target="_blank">
                                <FaYoutube size={25} color="#FF0000" />
                            </a>

                            <a href="https://wa.me/918290400325" target="_blank">
                                <FaWhatsapp size={25} color="#25D366" />
                            </a>


                            <a href="https://wa.me/917450800010" target="_blank">
                                <FaWhatsapp size={25} color="#25D366" />
                            </a>

                            <a href="tel:+918290400325">
                                <LuPhoneCall size={25} color="green" />
                            </a>

                            <a href="https://instagram.com/rk_shiyar_001" target="_blank">
                                <FaInstagram size={25} color="#E4405F" />
                            </a>
                        </Flex>

                        <br />

                        {/* Contact Icons */}
                        <Flex gap={15} wrap="wrap">

                        </Flex>

                        <br />

                        {/* Images */}
                        <Flex gap="md" wrap="wrap">
                            <Image
                                src="/k.jpeg"
                                radius="md"
                                style={{
                                    width: "48%",
                                    cursor: "pointer",
                                    transition: "0.3s",
                                }}
                                styles={{
                                    root: {
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                    },
                                }}
                            />

                            <Image
                                src="/kk.jpeg"
                                radius="md"
                                style={{
                                    width: "48%",
                                    cursor: "pointer",
                                    transition: "0.3s",
                                }}
                                styles={{
                                    root: {
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                    },
                                }}
                            />
                        </Flex>
                    </Box>
                </Flex>
            </Card>
        </Box>
    );
}