import { Box, Flex } from "@chakra-ui/react";
import theme from "@/src/styles/theme";
import Heading from "@/src/ui/primitives/Heading";
import Tag from "@/src/ui/primitives/Tag";
import Text from "@/src/ui/primitives/Text";
import { VStack } from "@chakra-ui/react";
import Image from "next/image";
import Container from "@/src/ui/primitives/Container";
import { MotionVStack } from "../primitives/Motion";

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

const ProductBreakDown = () => {
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
            <MotionVStack
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.25, delay: 0.25 }}
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
            </MotionVStack>
            <MotionVStack
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.25, delay: 0.5 }}
              maxW={{ base: 550, md: "full" }}
              border={"1px solid"}
              borderColor={theme.colors._lightgray}
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
            </MotionVStack>
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
                <MotionVStack
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.25, delay: index * 0.25 }}
                  key={index}
                  gap={5}
                  maxW={550}
                  border={"1px solid"}
                  borderColor={theme.colors._lightgray}
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
                </MotionVStack>
              );
            })}
          </Flex>
        </Container>
      </VStack>
    </Box>
  );
};

export default ProductBreakDown;
