import { extendTheme } from "@chakra-ui/react";

const PRIMARY_COLOR = "#8247E1";
const SECONDARY_COLOR = "#FE8162";

const theme = {
  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
    _white: "#FFFFFF",
    _black: "#000000",
    _darkgray: "#292929",
    _gray: "#636363",
    _lightgray: "#E3E3E3",
    _lightestgray: "#F7F7F7",
    primaryGradient: {
      start: "#FDF2EC",
      end: "#FFFFFF",
    },
  },
  styles: {
    global: {
      "*": {
        borderColor: "_lightgray",
      },
    },
  },
  breakpoints: {
    md: "62em",
  },
  shadows: {
    outline: `0 0 0 2px ${SECONDARY_COLOR}`,
  },
};

export { theme };

export default extendTheme(theme);
