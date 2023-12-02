import { Flex } from "@chakra-ui/react";
import Heading from "@/src/ui/primitives/Heading";
import Tag from "@/src/ui/primitives/Tag";
import Text from "@/src/ui/primitives/Text";
import { VStack } from "@chakra-ui/react";
import Container from "@/src/ui/primitives/Container";
import Accordion from "@/src/ui/primitives/Accordian";

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

export default FAQ;
