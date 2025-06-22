"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
      <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
