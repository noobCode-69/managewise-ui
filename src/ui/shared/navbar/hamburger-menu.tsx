import Drawer from "../../primitives/Drawer";
import Link from "../../primitives/Link";
import Links from "./navbar-data";
import { LinkType } from "./navbar-data";
import { VStack, Box, Divider } from "@chakra-ui/react";
import Button from "../../primitives/Button";
import Text from "../../primitives/Text";

type HamburgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HamburgerMenu = ({ isOpen, onClose }: HamburgerMenuProps) => {
  return (
    <Drawer size={"xs"} isOpen={isOpen} onClose={onClose}>
      <Divider />
      <VStack pt={10} gap={5}>
        {Links.map(({ systemText, value }: LinkType, index) => {
          return (
            <Link
              onClick={onClose}
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
  );
};

export default HamburgerMenu;
