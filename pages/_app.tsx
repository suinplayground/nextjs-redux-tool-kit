import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { petApi } from "../store/petApi";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  if (router.pathname === "/pokemon") {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
  return (
    <ApiProvider api={petApi}>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default MyApp;
