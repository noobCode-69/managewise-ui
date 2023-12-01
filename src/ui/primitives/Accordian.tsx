import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Accordion as ChakraAccordion,
  VStack,
  AccordionItemProps,
  AccordionButtonProps,
  Spacer,
} from "@chakra-ui/react";
import AddIcon from "@/src/ui/icons/add-icon.svg";
import MinusIcon from "@/src/ui/icons/minus-icon.svg";
import theme from "@/src/styles/theme";
import Text from "./Text";

interface Item {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
}

interface CustomAccordionProps extends AccordionProps {
  items?: Item[];
  defaultStyle?: boolean;
  AccordionItemProps?: AccordionItemProps;
  AccordionButtonProps?: AccordionButtonProps;
}

// chakra accordion implemented using -
// @see Docs https://chakra-ui.com/docs/components/accordion

function CustomAccordionItem({
  item,
  AccordionItemProps,
  AccordionButtonProps,
}: {
  item: Item;
  defaultStyle: boolean;
  AccordionItemProps?: AccordionItemProps;
  AccordionButtonProps?: AccordionButtonProps;
}) {
  return (
    <AccordionItem
      w="full"
      border="none"
      {...AccordionItemProps}
      bg={theme.colors._blue}
      borderRadius={"3xl"}
      pos={"relative"}
    >
      {({ isExpanded }) => (
        <>
          <AccordionButton _hover={{}} p={5} {...AccordionButtonProps}>
            {item.title && (
              <Text
                fontWeight={"medium"}
                fontSize={"lg"}
                color={isExpanded ? "primary" : theme.colors._black}
              >
                {item.title}
              </Text>
            )}
            <Spacer />
            {isExpanded ? (
              <MinusIcon width="25" height="25" stroke={theme.colors.primary} />
            ) : (
              <AddIcon width="25" height="25" stroke={theme.colors.primary} />
            )}
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color={theme.colors._gray}>{item.content}</Text>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

export default function Accordion({
  items,
  defaultStyle = false,
  AccordionItemProps,
  AccordionButtonProps,
  ...rest
}: CustomAccordionProps) {
  return (
    <ChakraAccordion as={VStack} spacing="4" allowToggle {...rest}>
      {items?.map((item, index) => (
        <CustomAccordionItem
          key={index}
          item={item}
          defaultStyle={defaultStyle}
          AccordionItemProps={AccordionItemProps}
          AccordionButtonProps={AccordionButtonProps}
        />
      ))}
    </ChakraAccordion>
  );
}
