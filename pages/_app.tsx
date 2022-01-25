import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

import { theme } from "../theme";
import { MusicPlayerProvider } from "../src/contexts/MusicPlayer";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>
          lo-fi.cz | Introducing a new way to listen &amp; chill with your lo-fi
          music.
        </title>
      </Head>
      <NextUIProvider theme={theme}>
        <MusicPlayerProvider>
          <Component {...pageProps} />
        </MusicPlayerProvider>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
