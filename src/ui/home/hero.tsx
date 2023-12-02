import { Box, Flex } from "@chakra-ui/react";
import theme from "@/src/styles/theme";
import Button from "@/src/ui/primitives/Button";
import Heading from "@/src/ui/primitives/Heading";
import Tag from "@/src/ui/primitives/Tag";
import Text from "@/src/ui/primitives/Text";
import { VStack } from "@chakra-ui/react";
import Image from "next/image";
import Container from "@/src/ui/primitives/Container";
const Hero = () => {
  return (
    <VStack
      bgGradient={`linear(to-b, ${theme.colors.primaryGradient.start}, ${theme.colors.primaryGradient.end})`}
      pt={20}
      gap={10}
    >
      <Container>
        <VStack gap={8}>
          <Tag>
            <Text>👋 Welcome to Manage Wise!</Text>
          </Tag>
          <VStack spacing={{ base: 0, md: 2 }}>
            <Heading textAlign={"center"} asStyle="h1">
              Empower your business with
            </Heading>

            <Heading textAlign={"center"} asStyle="h1">
              <Text color={"secondary"} as="span">
                Strategic
              </Text>{" "}
              insights
            </Heading>
          </VStack>
          <Text
            maxW={"65ch"}
            textAlign={"center"}
            fontSize={"lg"}
            fontWeight={"medium"}
            color={theme.colors._gray}
          >
            Powerful management platform designed to streamline your business
            operations, boost productivity, and drive success
          </Text>

          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            width={"full"}
            flexDir={{ base: "column", md: "row" }}
            gap={5}
          >
            <Button
              w={{ base: "full", md: "fit-content" }}
              maxW={500}
              primary
              size={"lg"}
            >
              <Text>Get Started</Text>
            </Button>
            <Button
              w={{ base: "full", md: "fit-content" }}
              maxW={500}
              secondary
              size={"lg"}
            >
              <Text>Watch Demo</Text>
            </Button>
          </Flex>
        </VStack>
      </Container>

      <Container maxW={{ md: "160ch" }}>
        <Box aspectRatio={70 / 45} pos={"relative"} mt={5}>
          <Image
            layout="fill"
            objectFit="contain"
            alt="hero-banner"
            src={"/hero-banner.webp"}
          />
        </Box>
      </Container>
    </VStack>
  );
};
export default Hero;
