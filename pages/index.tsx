import theme from "@/src/styles/theme";
import Button from "@/src/ui/primitives/Button";
import Heading from "@/src/ui/primitives/Heading";
import Tag from "@/src/ui/primitives/Tag";
import Text from "@/src/ui/primitives/Text";
import { HStack, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <VStack>
      <Tag>
        <Text>👋 Welcome to Manage Wise!</Text>
      </Tag>
      <Heading
        fontWeight={{ md: "bold", base: "medium" }}
        fontSize={{ md: "65px", base: "45" }}
        asStyle="h1"
      >
        Empower your business with
      </Heading>
      <Heading
        fontWeight={{ md: "bold", base: "medium" }}
        fontSize={{ md: "65px", base: "45" }}
        asStyle="h1"
      >
        <Text color={"secondary"} as="span">
          Strategic
        </Text>{" "}
        insights
      </Heading>
      <Text fontSize={"lg"} fontWeight={'medium'} color={theme.colors._gray}>
        Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success
      </Text>

      <HStack>
        <Button primary size={"lg"}>
          <Text>Get Started</Text>
        </Button>
        <Button secondary size={"lg"}>
          <Text>Watch Demo</Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default function Home() {
  return <Hero />;
}
