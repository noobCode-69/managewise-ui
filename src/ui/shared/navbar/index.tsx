import {
  Box,
  HStack,
  IconButton,
  Spacer,
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
import dynamic from "next/dynamic";

const DynamicHamburgerMenu = dynamic(() => import("./hamburger-menu"));

const Navbar = () => {
  const { isMobile, isDesktop } = useResponsiveSizes();

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
        {isDesktop && (
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
      </HStack>

      <DynamicHamburgerMenu
        isOpen={isOpenHamburgerMenu}
        onClose={onCloseHamburgerMenu}
      />
    </Box>
  );
};
export default Navbar;
