import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Box,
  Accordion as ChakraAccordion,
  VStack,
  AccordionItemProps,
  AccordionButtonProps,
} from "@chakra-ui/react";
import AddIcon from "@/icons/shared/add-icon.svg";
import MinusIcon from "@/icons/shared/minus-icon.svg";
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
  defaultStyle,
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
      borderBottom="1px solid"
      borderBottomColor="_lightgray"
      mt="0px !important"
      {...AccordionItemProps}
    >
      {({ isExpanded }) => (
        <>
          <AccordionButton p={5} {...AccordionButtonProps}>
            {!defaultStyle && (
              <Box ml={-2} mr={2} as="span">
                {isExpanded ? (
                  <MinusIcon
                    width="25"
                    height="25"
                    stroke={theme.colors._red}
                  />
                ) : (
                  <AddIcon width="25" height="25" stroke={theme.colors._red} />
                )}
              </Box>
            )}
            {item.title && (
              <Box
                fontSize={"md"}
                flex="1"
                textAlign="left"
                fontWeight="medium"
              >
                <Text>{item.title}</Text>
              </Box>
            )}
            {defaultStyle && (
              <AccordionIcon
                fontSize="3xl"
                mr={{ base: 4, md: 0 }}
                color="primary"
              />
            )}
          </AccordionButton>
          <AccordionPanel pb={4} pl={defaultStyle ? 0 : 4}>
            <Text>{item.content}</Text>
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
