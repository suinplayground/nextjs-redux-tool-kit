import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { petApi } from "../store/petApi";
import { esaApi } from "../store/esaApi";
import "@picocss/pico/css/pico.min.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  if (router.pathname === "/pokemon") {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
  if (router.pathname === "/esa") {
    return (
      <ApiProvider api={esaApi}>
        <Component {...pageProps} />
      </ApiProvider>
    );
  }
  return (
    <ApiProvider api={petApi}>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default MyApp;
