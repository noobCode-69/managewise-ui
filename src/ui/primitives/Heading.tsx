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
    fontWeight: { md: "bold", base: "bold" },
    fontSize: { md: "65px", base: "45" },
    lineHeight: { base: 1.1 },
    fontFamily: poppins.style.fontFamily,
  },
  h2: {
    fontWeight: "medium",
    fontSize: { md: "45px", base: "40" },
    lineHeight: 1.25,
    fontFamily: poppins.style.fontFamily,
  },
  h3: {
    fontWeight: "medium",
    fontSize: { md: "35px", base: "25" },
    fontFamily: poppins.style.fontFamily,
  },
  h4: {
    fontSize: "20px",
    fontWeight: "medium",
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
