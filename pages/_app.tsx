import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/xing0x/image/upload/v1674131508/VIBRANT_icon_nrwiko.png"
          type="image/x-icon"
        />
        <title>Vibrantt - Color Palette Generator</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
