import { Box, Flex } from "@chakra-ui/react";
import theme from "@/src/styles/theme";
import Heading from "@/src/ui/primitives/Heading";
import Tag from "@/src/ui/primitives/Tag";
import Text from "@/src/ui/primitives/Text";
import { VStack } from "@chakra-ui/react";
import Image from "next/image";
import Container from "@/src/ui/primitives/Container";
import { MouseEvent } from "react";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { MotionBox } from "@/src/ui/primitives/Motion";

// defining static data outside the component

const featureCards: {
  poster: string;
  heading: string;
  subheading: string;
}[] = [
  {
    poster: "/icon-1.png",
    heading: "Cross-Platform Compatibility",
    subheading:
      "Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.",
  },
  {
    poster: "/icon-2.png",
    heading: "Stay Informed with Essential Notifications",
    subheading:
      "Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.",
  },
  {
    poster: "/icon-3.png",
    heading: "Secure Data Encryption at all times",
    subheading:
      "Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.",
  },
];
const Features = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <VStack pt={{ md: 40, base: 20 }} bg={theme.colors._black}>
      <Container>
        <VStack gap={5} alignItems={"flex-start"}>
          <Tag>
            <Text>🤩 And more...</Text>
          </Tag>
          <Heading color={theme.colors.background} asStyle="h2">
            Explore an array of features that elevate your{" "}
            <Text as="span" color={theme.colors.secondary}>
              Productivity
            </Text>{" "}
            to new heights
          </Heading>
          <Text
            fontSize={"lg"}
            fontWeight={"medium"}
            color={theme.colors._gray}
            maxW={"50ch"}
          >
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </Text>
        </VStack>
        <Flex
          direction={{ md: "row", base: "column" }}
          alignItems={{ md: "stretch", base: "center" }}
          justifyContent={"center"}
          gap={{ md: 10, base: 5 }}
          mt={20}
        >
          {featureCards.map(({ poster, heading, subheading }, index) => {
            return (
              <VStack
                maxW={{ md: "full", base: "550px" }}
                key={index}
                width={"full"}
                borderRadius={"3xl"}
                px={5}
                py={10}
                bg={theme.colors._lightblack}
                gap={5}
                onMouseMove={handleMouseMove}
                overflow={"hidden"}
                pos={"relative"}
                role="group"
              >
                <MotionBox
                  _groupHover={{ opacity: 100 }}
                  pos={"absolute"}
                  pointerEvents={"none"}
                  opacity={0}
                  inset={0}
                  style={{
                    background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${theme.colors.circularGradient}, transparent 80%)`,
                  }}
                />
                <Image width={50} height={50} alt="feature-icon" src={poster} />
                <Heading
                  color={theme.colors.background}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  asStyle="h4"
                  mt={5}
                >
                  {heading}
                </Heading>
                <Text
                  textAlign={"center"}
                  fontWeight={"medium"}
                  color={theme.colors._gray}
                >
                  {subheading}
                </Text>
              </VStack>
            );
          })}
        </Flex>
      </Container>

      <Container mt={20} maxW={{ md: "120ch" }}>
        <VStack gap={5}>
          <Tag>
            <Text>🛠 Integrations</Text>
          </Tag>
          <Heading
            textAlign={"center"}
            color={theme.colors.background}
            asStyle="h2"
          >
            Enable{" "}
            <Text as="span" color={theme.colors.secondary}>
              integration
            </Text>{" "}
            with other popular tools and platforms
          </Heading>
          <Text
            fontSize={"lg"}
            fontWeight={"medium"}
            color={theme.colors._gray}
            maxW={"50ch"}
            textAlign={"center"}
          >
            Seamlessly connect and amplify your workflow by enabling integration
            with a diverse array of widely-used tools and platforms.{" "}
          </Text>
          <Box
            mt={10}
            w={{ md: "70%", base: "full" }}
            aspectRatio={70 / 25}
            pos={"relative"}
          >
            <Image
              layout="fill"
              objectFit="contain"
              src={"/connect-demo.webp"}
              alt="connect-demo"
            />
          </Box>
        </VStack>
      </Container>
    </VStack>
  );
};

export default Features;
