"use client";

import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import WalkThatDuck from "@/app/projects/WalkThatDuck";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { snippetTheme } from "@/app/code-snippets/snippet-theme";
import { austinCode } from "@/app/code-snippets/austin-animation";
import styles from "@/app/styles/page.module.css";
import "./globals.css";
import { useContext, useRef } from "react";
import { MobileContext } from "./context/MobileContext";

export default function App() {
  const isMobile = useContext(MobileContext);
  const pageRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    projects: projectsRef,
    // about: aboutRef,
    // contact: contactRef,
  };

  const scrollToSection = (sectionId: string) => {
    const targetRef = refs[sectionId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isMobile !== null ? (
        isMobile ? (
          <MobileNav scrollToSection={scrollToSection} />
        ) : (
          <DesktopNav scrollToSection={scrollToSection} />
        )
      ) : null}
      <main>
        <div className={styles.pageContainer} ref={pageRef}>
          <div className={styles.heroContainer}>
            {/* <div className={styles.austinContainer}>
              <div className={styles.austin}>austin</div>
              <h1 className={styles.hiddenAustin}>austin</h1>
            </div> */}
            <SyntaxHighlighter language="css" style={snippetTheme}>
              {austinCode}
            </SyntaxHighlighter>
            <div className={styles.scrollDownContainer}>
              <button className={styles.scrollDownText}>
                check out my work
              </button>
              z
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
