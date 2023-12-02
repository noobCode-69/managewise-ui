import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerContentProps,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Box,
} from "@chakra-ui/react";
import LeftArrow from "@/src/ui/icons/left-arrow.svg";
import theme from "@/src/styles/theme";

export interface CustomDrawerProps extends DrawerProps {
  // A boolean to render header
  header?: boolean;
  // A boolean to handle overlay
  isBgBlured?: boolean;
  // A value to add footer on drawer
  footer?: React.ReactNode;
  // to pass props to drawer content
  contentStyle?: DrawerContentProps;
}

// chakra drawer implemented using -
// @see Docs https://chakra-ui.com/docs/components/drawer

export default function Drawer({
  isBgBlured = true,
  header = true,
  placement = "right",
  size = "md",
  footer,
  children,
  isOpen,
  contentStyle,
  ...rest
}: CustomDrawerProps) {
  const { onClose } = rest;
  return (
    <ChakraDrawer
      autoFocus={false}
      returnFocusOnClose={false}
      placement={placement}
      size={size}
      isOpen={isOpen}
      {...rest}
    >
      <DrawerOverlay h={isBgBlured ? "100vh" : "0"} maxHeight="100% !important">
        <DrawerContent maxHeight="100% !important" {...contentStyle}>
          {header && (
            <DrawerHeader pb="2">
              <Box
                _hover={{ cursor: "pointer" }}
                padding={2.5}
                borderRadius={"100%"}
                border={"1px solid"}
                borderColor={theme.colors._lightgray}
                onClick={onClose}
                w="fit-content"
              >
                <LeftArrow
                  width="13"
                  height="13"
                  stroke={theme.colors._black}
                />
              </Box>
            </DrawerHeader>
          )}
          <DrawerBody {...rest}>{children}</DrawerBody>
          {footer && <DrawerFooter>{footer}</DrawerFooter>}
        </DrawerContent>
      </DrawerOverlay>
    </ChakraDrawer>
  );
}
