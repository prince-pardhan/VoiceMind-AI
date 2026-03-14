import { Stack } from "@mantine/core";
import HomePage from "./Home/About";
import Footer from "./Footer/Footer";
export default function Page() {
  return (
    <Stack w={"100%"} h={"100%"}  bg={"gray.2"}>
      <HomePage/>
      <Footer/>
    </Stack>
    
  );
}
