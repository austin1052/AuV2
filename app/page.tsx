"use client";

import Nav from "./components/Nav";
import WalkThatDuck from "@/app/projects/WalkThatDuck";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { snippetTheme } from "@/app/code-snippets/snippet-theme";
import { austinCode } from "@/app/code-snippets/austin-animation";
import styles from "@/app/styles/page.module.css";
import "./globals.css";
import { useRef } from "react";

export default function Home() {
  function handleScrollDown() {
    console.log("click");
  }

  const pageRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    console.log("scroll");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Nav />
      <main>
        <div className={styles.pageContainer} ref={pageRef}>
          <div className={styles.heroContainer}>
            <div className={styles.austinContainer}>
              <div className={styles.austin}>austin</div>
              <h1 className={styles.hiddenAustin}>austin</h1>
            </div>
            <SyntaxHighlighter language="css" style={snippetTheme}>
              {austinCode}
            </SyntaxHighlighter>
            <div className={styles.scrollDownContainer}>
              <button
                className={styles.scrollDownText}
                onClick={handleScrollDown}
              >
                check out my work
              </button>
              <div className={styles.scrollDownArrowContainer}>
                <div className={styles.scrollDownArrow}></div>
              </div>
            </div>
          </div>
          <div className={styles.projects} ref={projectsRef}>
            <WalkThatDuck />
          </div>
        </div>
      </main>
    </>
  );
}
