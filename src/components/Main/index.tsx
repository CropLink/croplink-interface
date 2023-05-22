import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Box, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { AuthContextProps, useAuthContext } from "@/context/useUserContext";
import { useRouter } from "next/router";

export default function Home() {
  const { state } = useAuthContext() as AuthContextProps;
  const router = useRouter();

  useEffect(() => {
    if (state.user && !state.isLoading && !state?.role) {
      router.push("/register");
    }
  }, [router, state]);

  return (
    <>
      <Head>
        <title>CropLink</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Navbar />
        <Container maxW={"7xl"} mt="10">
          Home page
        </Container>
      </Box>
    </>
  );
}
