import { TextProps } from "@chakra-ui/react";
import theme from "@/src/styles/theme";
import Text from "./Text";
import NextLink from "next/link";
import { LinkProps as NextLinkProps } from "next/link";

export interface LinksProps extends NextLinkProps {
  href: string;
  label: string;
  styleProps?: TextProps;
}

const Link = ({ href, label, styleProps }: LinksProps) => {
  return (
    <NextLink href={href}>
      <Text _hover={{ color: theme.colors.primary }} {...styleProps}>
        {label}
      </Text>
    </NextLink>
  );
};

export default Link;
