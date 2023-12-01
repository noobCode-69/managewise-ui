import { ReactNode } from "react";
import { HeadingProps, Heading as ChakraHeading } from "@chakra-ui/react";
import { poppins } from "../shared/font/poppin-font";

export interface CustomHeadingProps extends HeadingProps {
  children: ReactNode;
  asStyle?: asStyleType;
}

/**
 * Custom abstraction over chakra Heading element
 * to support translations. (but again it's not needed in this project )
 *
 * @see Docs https://chakra-ui.com/heading
 */

export default function Heading({
  asStyle,
  children,
  ...rest
}: CustomHeadingProps) {
  return (
    <ChakraHeading
      {...styles.default}
      {...(asStyle && styles[asStyle])}
      {...rest}
    >
      {children}
    </ChakraHeading>
  );
}
const styles: StyleType = {
  default: {
    fontWeight: "medium",
    letterSpacing: "-0.03em",
  },
  h1: {
    fontSize: { base: "2xl", md: "3xl" },
    fontFamily: poppins.style.fontFamily,
  },
  h2: {
    fontSize: { base: "xl", md: "2xl" },
    fontFamily: poppins.style.fontFamily,
  },
  h3: {
    fontSize: { base: "lg", md: "xl" },
    fontFamily: poppins.style.fontFamily,
  },
  h4: {
    fontSize: "lg",
  },
  h5: {
    fontSize: "md",
  },
};

type StyleType = {
  default: HeadingProps;
  h1: HeadingProps;
  h2: HeadingProps;
  h3: HeadingProps;
  h4: HeadingProps;
  h5: HeadingProps;
};

type asStyleType = "h1" | "h2" | "h3" | "h4" | "h5";
