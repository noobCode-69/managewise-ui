import { Box, Flex, Spacer } from "@chakra-ui/react";
import theme from "@/src/styles/theme";
import Button from "@/src/ui/primitives/Button";
import Heading from "@/src/ui/primitives/Heading";
import Tag from "@/src/ui/primitives/Tag";
import Text from "@/src/ui/primitives/Text";
import { VStack } from "@chakra-ui/react";
import Image from "next/image";
import Container from "@/src/ui/primitives/Container";
import Link from "@/src/ui/primitives/Link";

import Links from "@/src/ui/shared/navbar/navbar-data";
import { LinkType } from "@/src/ui/shared/navbar/navbar-data";
import { MotionFlex } from "../primitives/Motion";

const Footer = () => {
  return (
    <VStack
      bgGradient={`linear(to-t, ${theme.colors.primaryGradient.start}, ${theme.colors.primaryGradient.end})`}
      py={{ md: 20, base: 10 }}
      gap={0}
    >
      <Container>
        <MotionFlex
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          border={"1px solid"}
          borderColor={theme.colors._lightgray}
          direction={{ md: "row", base: "column" }}
          alignItems={{ md: "stretch", base: "center" }}
          justifyContent={"center"}
          gap={10}
          py={{ md: 40, base: 20 }}
          px={{ md: 20, base: 10 }}
          bg={theme.colors._white}
          borderRadius={"3xl"}
        >
          <VStack alignItems={{ md: "flex-start", base: "center" }} w={"full"}>
            <Tag>
              <Text>👋 Don&apos;miss out</Text>
            </Tag>
            <Heading textAlign={"left"} asStyle="h2">
              Unleash your Need{" "}
              <Text as="span" color={"secondary"}>
                Potential
              </Text>{" "}
              with us
            </Heading>
            <Text
              fontSize={"lg"}
              fontWeight={"medium"}
              color={theme.colors._gray}
              maxW={"30ch"}
              textAlign={{ md: "left", base: "center" }}
            >
              Join our community of ambitious individuals and organizations
              eager to make a difference.
            </Text>
            <Button mt={{ md: 10, base: 5 }} primary size={"lg"}>
              <Text>Try Out Now</Text>
            </Button>
          </VStack>
          <VStack justifyContent={"center"} w={"full"}>
            <Box alignItems={"center"} w={"full"}>
              <Box
                aspectRatio={{ md: 70 / 35, base: 70 / 25 }}
                pos={"relative"}
              >
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="happy-faces"
                  src={"/happy-face.webp"}
                />
              </Box>
            </Box>
          </VStack>
        </MotionFlex>
        <Flex
          padding={20}
          justifyContent={"center"}
          alignItems={"center"}
          width={"full"}
          flexDir={{ base: "column", md: "row" }}
          gap={5}
        >
          <Box>
            <Image
              src={"/logo.png"}
              alt="website-logo"
              width={175}
              height={50}
            />
          </Box>
          <Spacer />
          <VStack alignItems={{ md: "flex-start", base: "center" }}>
            {Links.map(({ systemText, value }: LinkType, index) => {
              return <Link key={index} label={systemText} href={`/${value}`} />;
            })}
          </VStack>
        </Flex>{" "}
      </Container>
    </VStack>
  );
};

export default Footer;
