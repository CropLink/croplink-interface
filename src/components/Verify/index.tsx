import Navbar from "@/components/Navbar";
import { Box, Container } from "@chakra-ui/react";
import Sidebar from "../Sidebar";

export default function Verify() {
  return (
    <Box>
      <Container maxW={"7xl"} mt="10">
        <Sidebar>Verify</Sidebar>
      </Container>
    </Box>
  );
}
