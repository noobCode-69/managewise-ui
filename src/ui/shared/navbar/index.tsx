import {
  Box,
  Divider,
  HStack,
  Icon,
  IconButton,
  Spacer,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { theme } from "@/src/styles/theme";
import Image from "next/image";
import Text from "../../primitives/Text";
import { Fragment } from "react";
import Button from "../../primitives/Button";
import Links from "./navbar-data";
import { LinkType } from "./navbar-data";
import Link from "../../primitives/Link";
import { useResponsiveSizes } from "@/src/context/responsive";
import HamburgerMenuIcon from "@/src/ui/icons/hamburger-menu.svg";
import Drawer from "../../primitives/Drawer";
const Navbar = () => {
  const { isMobile } = useResponsiveSizes();

  const {
    isOpen: isOpenHamburgerMenu,
    onOpen: onOpenHamburgerMenu,
    onClose: onCloseHamburgerMenu,
  } = useDisclosure();

  return (
    <Box
      borderBottom={"1px solid"}
      borderColor={theme.colors._lightgray}
      px={{ md: 10, base: 5 }}
      py={5}
      bg={theme.colors.background}
    >
      <HStack>
        <Box>
          <Image src={"/logo.png"} alt="website-logo" width={175} height={50} />
        </Box>
        <Spacer />
        {!isMobile && (
          <HStack gap={5}>
            {Links.map(({ systemText, value }: LinkType, index) => {
              return (
                <Fragment key={index}>
                  <Link label={systemText} href={`/${value}`} />

                  {index !== Links.length - 1 && (
                    <Text color={theme.colors._gray}>•</Text>
                  )}
                </Fragment>
              );
            })}
            <Box ml={5}>
              <Button secondary>
                <Text>Buy Template</Text>
              </Button>
            </Box>
          </HStack>
        )}
        {isMobile && (
          <IconButton
            bg={"transparent"}
            _hover={{}}
            _active={{}}
            onClick={onOpenHamburgerMenu}
            aria-label="hamburger-menu"
            icon={<HamburgerMenuIcon width={25} />}
          />
        )}

        <Drawer
          size={"xs"}
          isOpen={isOpenHamburgerMenu}
          onClose={onCloseHamburgerMenu}
        >
          <Divider />
          <VStack pt={10} gap={5}>
            {Links.map(({ systemText, value }: LinkType, index) => {
              return (
                <Link
                  styleProps={{ fontWeight: "medium", fontSize: "large" }}
                  key={index}
                  label={systemText}
                  href={`/${value}`}
                />
              );
            })}
            <Box ml={5}>
              <Button primary>
                <Text>Buy Template</Text>
              </Button>
            </Box>
          </VStack>
        </Drawer>
      </HStack>
    </Box>
  );
};
export default Navbar;
