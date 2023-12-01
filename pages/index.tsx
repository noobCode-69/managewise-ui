import { Box, Flex, HStack } from "@chakra-ui/react";
import theme from "@/src/styles/theme";
import Button from "@/src/ui/primitives/Button";
import Heading from "@/src/ui/primitives/Heading";
import Tag from "@/src/ui/primitives/Tag";
import Text from "@/src/ui/primitives/Text";
import { VStack } from "@chakra-ui/react";
import Image from "next/image";
import Navbar from "@/src/ui/shared/navbar";
import Container from "@/src/ui/primitives/Container";
import { MouseEvent, useState } from "react";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { MotionBox } from "@/src/ui/primitives/Motion";
import Accordion from "@/src/ui/primitives/Accordian";
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

const ProductBreakDown = () => {
  const featuresData: {
    poster: string;
    heading: string;
    subheading: string;
  }[] = [
    {
      poster: "/features-1.webp",
      heading: "Flexible Scheduling",
      subheading: "Stay productive with our flexible scheduling system",
    },
    {
      poster: "/features-2.webp",
      heading: "Easy Communication",
      subheading: "Collaborate seamlessly with your team in real-time",
    },
    {
      poster: "/features-3.webp",
      heading: "Analytics",
      subheading: "Gain valuable insights with our advanced analytics feature",
    },
  ];

  return (
    <Box pt={5} py={{ md: 20, base: 10 }} gap={5}>
      <VStack gap={16}>
        <Container>
          <VStack gap={5}>
            <Tag>
              <Text>🔥 Premier features</Text>
            </Tag>
            <Heading textAlign={"center"} asStyle="h2">
              Discover our product&apos;s{" "}
              <Text as="span" color={theme.colors.secondary}>
                Capabilities
              </Text>
            </Heading>

            <Text
              maxW={"50ch"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"medium"}
              color={theme.colors._gray}
            >
              Don&apos;t settle for mediocrity - embrace the future of
              management with Manage Wise.
            </Text>
          </VStack>
        </Container>

        <Container>
          <Flex
            direction={{ md: "row", base: "column" }}
            alignItems={{ md: "stretch", base: "center" }}
            justifyContent={"center"}
            gap={10}
          >
            <VStack
              maxW={{ base: 550, md: "full" }}
              width={"full"}
              bg={theme.colors._purple}
              px={{ md: 10, base: 5 }}
              pt={{ md: 20, base: 10 }}
              pb={{ md: 10, base: 5 }}
              borderRadius={"2xl"}
              alignItems={"flex-start"}
              gap={5}
            >
              <Tag fontSize={"2xl"}>
                <Text>⭐️</Text>
              </Tag>
              <Heading asStyle="h3" lineHeight={1.5}>
                Boost productivity and streamline workflow with us. Enjoy our
                intuitive interface and robust features.
              </Heading>
            </VStack>
            <VStack
              maxW={{ base: 550, md: "full" }}
              border={"1px solid"}
              pb={{ md: 10, base: 5 }}
              borderRadius={"2xl"}
              width={"full"}
            >
              <Box
                minH={"70%"}
                aspectRatio={70 / 35}
                w={"full"}
                position={"relative"}
              >
                <Image
                  alt="smart-task-management"
                  layout="fill"
                  objectFit="contain"
                  src={"/task-manager.webp"}
                />
              </Box>
              <VStack alignItems={"flex-start"} px={{ md: 10, base: 5 }}>
                <Heading fontSize={"xl"} asStyle="h3">
                  Smart Task Management
                </Heading>
                <Text fontWeight={"medium"} color={theme.colors._gray}>
                  Say goodbye to chaos with our smart task management system
                </Text>
              </VStack>
            </VStack>
          </Flex>
        </Container>

        <Container>
          <Flex
            direction={{ md: "row", base: "column" }}
            alignItems={{ md: "stretch", base: "center" }}
            justifyContent={"center"}
            gap={10}
          >
            {featuresData.map(({ poster, heading, subheading }, index) => {
              return (
                <VStack
                  key={index}
                  gap={5}
                  maxW={550}
                  border={"1px solid"}
                  pb={{ md: 10, base: 5 }}
                  borderRadius={"2xl"}
                  width={"full"}
                >
                  <Box w={"full"} minH={250} position={"relative"}>
                    <Image
                      alt="smart-task-management"
                      layout="fill"
                      objectFit="contain"
                      src={poster}
                    />
                  </Box>
                  <VStack
                    w={"full"}
                    alignItems={"flex-start"}
                    px={{ md: 10, base: 5 }}
                  >
                    <Heading fontSize={"xl"} asStyle="h3">
                      {heading}
                    </Heading>
                    <Text fontWeight={"medium"} color={theme.colors._gray}>
                      {subheading}
                    </Text>
                  </VStack>
                </VStack>
              );
            })}
          </Flex>
        </Container>
      </VStack>
    </Box>
  );
};

const Features = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

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
            aspectRatio={70 / 30}
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

const FAQ = () => {
  const faqData: { title: string; content: string }[] = [
    {
      title: "What is Manage Wise and what does it offer?",
      content:
        "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
    },
    {
      title:
        "Is Manage Wise suitable for small businesses and larger enterprises alike?",
      content:
        "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.",
    },
    {
      title: "Can I access Manage Wise from different devices and platforms?",
      content:
        "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
    },
    {
      title: "What kind of support options do you offer to users?",
      content:
        "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.",
    },
    {
      title: "How secure is the data stored within Manage Wise?",
      content:
        "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
    },
  ];

  return (
    <Container>
      <Flex
        pt={{ md: 40, base: 20 }}
        pb={{ md: 20, base: 10 }}
        direction={{ md: "row", base: "column" }}
        gap={10}
      >
        <VStack alignItems={"flex-start"}>
          <Tag>
            <Text>🙋‍♀️ FAQ</Text>
          </Tag>
          <Heading textAlign={"left"} asStyle="h2">
            Need{" "}
            <Text as="span" color={"secondary"}>
              Answers?
            </Text>
          </Heading>
        </VStack>
        <VStack width={"full"} alignItems={"stretch"}>
          <Accordion items={faqData} />
        </VStack>
      </Flex>
    </Container>
  );
};

const Pricing = () => {
  const pricingData: { label: string; price: string; bullets: string[] }[] = [
    {
      label: "Free",
      price: "$0",
      bullets: [
        "Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email support",
      ],
    },
    {
      label: "Standard",
      price: "$25",
      bullets: [
        "Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email support",
        "3+ integrations",
        "Account performance reporting",
      ],
    },
    {
      label: "Business",
      price: "$42",
      bullets: [
        "Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email support",
        "3+ integrations",
      ],
    },
  ];

  return (
    <VStack py={10}>
      <Container>
        <VStack gap={8}>
          <Tag>
            <Text>💲 Pricing</Text>
          </Tag>
          <Heading textAlign={"center"} asStyle="h2">
            Select your ideal Pricing plan{" "}
            <Text as="span" color={"secondary"}>
              Pricing
            </Text>{" "}
            plan
          </Heading>
          <Text
            fontSize={"lg"}
            fontWeight={"medium"}
            color={theme.colors._gray}
            maxW={"50ch"}
            textAlign={"center"}
          >
            At Manage Wise, we believe in providing you with pricing plans that
            adapt to your unique needs.{" "}
          </Text>
        </VStack>
      </Container>
      <Container mt={{ md: 10, base: 5 }} maxW={{ base: "150ch" }}>
        <Flex
          direction={{ md: "row", base: "column" }}
          alignItems={{ md: "stretch", base: "center" }}
          justifyContent={"center"}
          gap={5}
        >
          {pricingData.map(({ label, price, bullets }, index) => {
            const isStandard = label === "Standard";
            return (
              <VStack
                maxW={{ base: 550, md: "full" }}
                p={{ md: 10, base: 5 }}
                borderRadius={"3xl"}
                w={"full"}
                key={index}
                alignItems={"flex-start"}
                bg={isStandard ? theme.colors._black : theme.colors._purple}
              >
                <Tag>
                  <Text color={theme.colors.secondary}>{label}</Text>
                </Tag>
                <HStack
                  color={isStandard ? theme.colors._white : theme.colors._black}
                  alignItems={"flex-end"}
                  spacing={1}
                >
                  <Heading asStyle="h2">{price}</Heading>
                  <Text>/month</Text>
                </HStack>
                <VStack py={5} alignItems={"flex-start"} w={"full"}>
                  {bullets.map((bulletItem) => {
                    return (
                      <Text
                        key={bulletItem}
                        fontWeight={"medium"}
                        color={theme.colors._gray}
                      >
                        <Text as="span" color={"green"}>
                          ✔
                        </Text>{" "}
                        {bulletItem}
                      </Text>
                    );
                  })}
                </VStack>
                <Button
                  mt={"auto"}
                  secondary={!isStandard}
                  primary={isStandard}
                >
                  <Text>Get Started</Text>
                </Button>
              </VStack>
            );
          })}
        </Flex>
      </Container>
    </VStack>
  );
};

const Testimonials = () => {
  return (
    <VStack py={{ md: 20, base: 10 }}>
      <Container>
        <VStack gap={5} alignItems={"flex-start"}>
          <Tag>
            <Text>🧡 Testimonials</Text>
          </Tag>
          <Heading asStyle="h2">
            Hear from our{" "}
            <Text as="span" color={theme.colors.secondary}>
              Satisfied
            </Text>{" "}
            clients
          </Heading>
          <Text
            fontSize={"lg"}
            fontWeight={"medium"}
            color={theme.colors._gray}
            maxW={"50ch"}
          >
            Discover why our clients love working with us. Read their
            testimonials and learn how we has helped businesses.{" "}
          </Text>
        </VStack>
      </Container>
      <Container maxW={{base : '150ch'}}></Container>
    </VStack>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductBreakDown />
      <Features />
      <FAQ />
      <Pricing />
      <Testimonials />
    </>
  );
}
