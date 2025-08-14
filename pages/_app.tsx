import { AppProps } from "next/app";
import "cal-sans";
import "@fontsource/inter";
import "../src/styles/global.scss";

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
