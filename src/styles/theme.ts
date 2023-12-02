import { extendTheme } from "@chakra-ui/react";

const PRIMARY_COLOR = "#8247E1";
const SECONDARY_COLOR = "#FE8162";
const theme = {
  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
    background: "#FDF2EC",

    _purple: "#EDEDFA",
    _blue: "#f7f8fd",
    _white: "#FFFFFF",
    _black: "#1C1C1C",
    _lightblack: "#212121",
    _gray: "#636363",
    _lightgray: "#E3E3E3",
    primaryGradient: {
      start: "#FDF2EC",
      end: "#FFFFFF",
    },
    secondaryGradient: "rgba(130, 71, 225, 0.1)",
    circularGradient: "rgba(248, 233, 225, 0.15)",
  },
  styles: {
    global: {
      "*": {
        borderColor: "_lightgray",
      },
    },
  },
  breakpoints: {
    md: "70em",
  },
};

export { theme };

export default extendTheme(theme);
