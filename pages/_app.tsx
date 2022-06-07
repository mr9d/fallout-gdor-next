import "normalize.css";
import "../app/styles/fonts.css";
import "../app/styles/globals.css";
import type { AppProps } from "next/app";
import DefaultLayout from "../app/layouts/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
