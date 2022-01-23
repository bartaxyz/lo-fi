import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

import { theme } from "../theme";

function MyApp({ Component, pageProps }: any) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
