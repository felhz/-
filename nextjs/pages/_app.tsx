import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
App.getInitialProps = async (appContext: Record<string, string>) => {
  console.log(appContext);
  return { app: "app" };
};

export default appWithTranslation(App);
