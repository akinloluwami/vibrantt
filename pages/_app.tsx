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
        <meta
          property="og:image"
          content="https://res.cloudinary.com/xing0x/image/upload/v1674131508/VIBRANT_icon_nrwiko.png"
        ></meta>
        <meta name="description" content="Color Palette Generator"></meta>

        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/xing0x/image/upload/v1674131508/VIBRANT_icon_nrwiko.png"
        ></meta>

        <meta
          name="twitter:description"
          content="Color Palette Generator"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
