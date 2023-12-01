import {
  forwardRef,
  ButtonProps,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export interface CustomButtonProps extends ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  asLink?: boolean;
}

/**
 * Custom abstraction over chakra Button element
 * to support custom Tryp style variations.
 *
 * @see Docs https://chakra-ui.com/button
 */
const Button = forwardRef<CustomButtonProps, "button">(
  ({ primary, secondary, asLink, children, ...rest }, ref) => {
    const styles: StyleType = {
      default: {},
      primary: {
        bg: "primary",
        color: "_white",
        variant: "solid",
        _hover: {
          filter: "brightness(105%)",
        },
        _active: {
          filter: "brightness(102%)",
        },
      },
      secondary: {
        bg: "_white",
        color: "_black",
        variant: "solid",
        fontWeight: "medium",
        border: "1px solid",
        borderColor: "_lightgray",
        _hover: {
          border: "1px solid ",
          borderColor: "_gray",
        },
        _active: {
          filter: "brightness(101%)",
        },
      },
      asLink: {
        color: "primary",
        variant: "ghost",
        padding: "0",
        _hover: {
          textDecoration: rest.isDisabled ? undefined : "underline",
        },
        _active: { bg: "transparent" },
      },
    };

    return (
      <ChakraButton
        ref={ref}
        {...styles.default}
        {...(primary && styles.primary)}
        {...(secondary && styles.secondary)}
        {...(asLink && styles.asLink)}
        {...rest}
        borderRadius={"3xl"}
      >
        {children}
      </ChakraButton>
    );
  }
);

type StyleType = {
  default: ButtonProps;
  primary: ButtonProps;
  secondary: ButtonProps;
  asLink: ButtonProps;
};

const MotionButton = motion<CustomButtonProps>(Button);

export default Button;
export { MotionButton };
