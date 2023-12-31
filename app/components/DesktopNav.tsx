"use client";

import { useState, useEffect, useCallback } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { linkData, scrollData } from "../utils/nav";
import styles from "@/app/styles/DesktopNav.module.css";
import Link from "next/link";

interface Props {
  scrollToSection: (sectionId: string) => void;
}

export default function DesktopNav({ scrollToSection }: Props) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navStyle, setNavStyle] = useState(`${styles.nav} ${styles.top}`);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      // need to check if windowScrollY is > 0 for phones that may have a bounce animation when scrolling to the top of the page
      if (window.scrollY > 0 && window.scrollY > lastScrollY) {
        setNavStyle(`${styles.nav} ${styles.navHidden}`);
      } else if (window.scrollY <= 0) {
        setNavStyle(`${styles.nav} ${styles.top}`);
      } else if (window.scrollY < lastScrollY) {
        setNavStyle(`${styles.nav}`);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  return (
    <nav className={navStyle}>
      <ul className={styles.navLinks}>
        {scrollData.map((section) => {
          return (
            <li
              key={section}
              onClick={() => {
                scrollToSection(section);
              }}
            >
              {section}
            </li>
          );
        })}
      </ul>
      <div className={styles.socialMediaIcons}>
        <SocialMediaIcons />
      </div>
    </nav>
  );
}
