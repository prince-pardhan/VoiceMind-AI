"use client";

import {
  Button,
  Modal,
  TextInput,
  PasswordInput,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import axios from "axios";

export default function SignupButton() {
  const [opened, { open, close }] = useDisclosure(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSignup = async () => {
    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.phone ||
      !form.confirmPassword
    ) {
      alert("All fields required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Password not match");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:9799/users/signup",
        {
          name: form.name,
          email: form.email,
          password: form.password,
          phone: form.phone,
        }
      );

      console.log("Signup success:", res.data);
      alert("Signup successful ✅");
      close();


      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      });

    } catch (err: any) {
      console.log(err);
      alert(err?.response?.data?.message || "Error signup ❌");
    }
  };

  return (
    <>
      <Button radius="xl" onClick={open}>
        Signup
      </Button>

      <Modal opened={opened} onClose={close} title="Signup" centered>
        <Stack>
          <TextInput
            label="Name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <TextInput
            label="Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <PasswordInput
            label="Password"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />

          <PasswordInput
            label="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              handleChange("confirmPassword", e.target.value)
            }
          />

          <TextInput
            label="Phone number"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <Button onClick={handleSignup}>Create Account</Button>
        </Stack>
      </Modal>
    </>
  );
}