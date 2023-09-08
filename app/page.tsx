"use client";

import WalkThatDuck from "@/app/projects/WalkThatDuck";
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
        <h1 className={styles.austin}>austin</h1>
        <div className={styles.scrollDownContainer}>
          <button className={styles.scrollDownText} onClick={handleScrollDown}>
            check out my work
          </button>
          <div className={styles.scrollDownArrowContainer}>
            <div className={styles.scrollDownArrow}></div>
          </div>
        </div>
      </div>
      <WalkThatDuck />
    </div>
  );
}
