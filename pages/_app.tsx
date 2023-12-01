import type { AppProps } from "next/app";
import GlobalCSS from "@/src/styles/global";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/src/styles/theme";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalCSS />
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
