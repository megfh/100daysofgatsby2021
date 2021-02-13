import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  }
};

const components = {
  Menu: {
    bg : ["purple.700", "purple.700", "transparent", "transparent"],
    color : ["white", "white", "purple.800", "purple.800"]
  }
}

const theme = extendTheme({ colors, components });

export default theme;