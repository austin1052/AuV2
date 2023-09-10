"use client";

import styles from "@/app/styles/Nav.module.css";
import { useState, useEffect } from "react";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [circleStyle, setCircleStyle] = useState();
  const [navHidden, setNavHidden] = useState(true);

  const [navMenuStyle, setNavMenuStyle] = useState(
    `${styles.navMenu} ${styles.navMenuHidden}`
  );

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 0 && window.scrollY > lastScrollY) {
        setNavHidden(true);
      } else if (window.scrollY + 5 < lastScrollY) {
        setNavHidden(false);
      } else if (window.scrollY <= 0) {
        setNavHidden(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, navHidden]);

  console.log(navOpen);

  return (
    <nav>
      <div
        className={
          navOpen
            ? `${styles.circle} ${styles.navOpen}`
            : navHidden
            ? `${styles.circle} ${styles.circleHidden}`
            : `${styles.circle}`
        }
        onClick={() => {
          console.log("click");
          setNavOpen(true);
        }}
      >
        <div className={styles.menuText}>menu</div>
      </div>
      <div className={styles.navMenu}>
        <div className={styles.closeText} onClick={() => setNavOpen(false)}>
          close
        </div>
        <ul className={styles.navLinks}>
          <li>about</li>
          <li>projects</li>
        </ul>
        <button onClick={() => setNavOpen(false)}>close</button>
      </div>
    </nav>
  );
}
