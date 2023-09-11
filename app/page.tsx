"use client";

import App from "./App";
import { MobileContextProvider } from "./context/MobileContext";

export default function Home() {
  return (
    <>
      <MobileContextProvider>
        <App />
      </MobileContextProvider>
    </>
  );
}
