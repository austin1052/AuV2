"use client";

import WalkThatDuck from "@/app/projects/WalkThatDuck";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { snippetTheme } from "./code-snippets/snippet-theme";
import { austinCode } from "./code-snippets/austin-animation";
import styles from "@/app/styles/page.module.css";
import "./globals.css";
// import { useEffect, useRef } from "react";

export default function Home() {
  function handleScrollDown() {
    console.log("click");
  }

  // const pageRef = useRef<HTMLDivElement>(null);

  // const scrollToTop = () => {
  //   setTimeout(() => {}, 500);
  //   console.log("scroll");
  //   window.scrollTo({ top: 5000, left: 0, behavior: "smooth" });
  // };

  // useEffect(() => {
  //   scrollToTop();
  // }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.austinContainer}>
          <div className={styles.austin}>austin</div>
          <h1 className={styles.hiddenAustin}>austin</h1>
        </div>
        <SyntaxHighlighter language="css" style={snippetTheme}>
          {austinCode}
        </SyntaxHighlighter>
      </div>
      <div className={styles.scrollDownContainer}>
        <button className={styles.scrollDownText} onClick={handleScrollDown}>
          check out my work
        </button>
        <div className={styles.scrollDownArrowContainer}>
          <div className={styles.scrollDownArrow}></div>
        </div>
      </div>
      <WalkThatDuck />
    </div>
  );
}
