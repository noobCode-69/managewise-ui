import { Box, Flex, HStack } from "@chakra-ui/react";
import theme from "@/src/styles/theme";
import Button from "@/src/ui/primitives/Button";
import Heading from "@/src/ui/primitives/Heading";
import Tag from "@/src/ui/primitives/Tag";
import Text from "@/src/ui/primitives/Text";
import { VStack } from "@chakra-ui/react";
import Container from "@/src/ui/primitives/Container";
import { MouseEvent } from "react";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { MotionBox } from "@/src/ui/primitives/Motion";

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

const Pricing = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <VStack py={{ md: 20, base: 10 }}>
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
              <VStack w={"full"} justifyContent={"center"} key={index}>
                <VStack
                  bg={isStandard ? theme.colors._black : theme.colors._purple}
                  borderRadius={"3xl"}
                  p={10}
                  maxW={{ base: 550, md: "full" }}
                  alignItems={"flex-start"}
                  w={"full"}
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
                      background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${
                        isStandard
                          ? theme.colors.circularGradient
                          : theme.colors.secondaryGradient
                      }, transparent 80%)`,
                    }}
                  />
                  <Tag>
                    <Text color={theme.colors.secondary}>{label}</Text>
                  </Tag>
                  <HStack
                    color={
                      isStandard ? theme.colors._white : theme.colors._black
                    }
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
              </VStack>
            );
          })}
        </Flex>
      </Container>
    </VStack>
  );
};

export default Pricing;
