import "@/styles/global.scss";
import "@/styles/home.css";
import { ReactNode, useContext } from "react";
import type { AppProps, AppLayoutProps } from "next/app";
import { store } from "app/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
