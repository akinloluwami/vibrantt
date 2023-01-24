import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../utils/gtag";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    //just checking if it's no longer fucked up
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/xing0x/image/upload/v1674131508/VIBRANT_icon_nrwiko.png"
          type="image/x-icon"
        />
        <title>Vibrantt - Color Palette Generator</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/xing0x/image/upload/v1674131508/VIBRANT_icon_nrwiko.png"
        ></meta>
        <meta
          name="description"
          content="Generate beautiful color palettes for your creative needs."
        ></meta>

        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/xing0x/image/upload/v1674131508/VIBRANT_icon_nrwiko.png"
        ></meta>

        <meta
          name="twitter:description"
          content="Generate beautiful color palettes for your creative needs."
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
