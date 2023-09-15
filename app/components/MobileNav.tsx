"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";
import { linkData, scrollData } from "../utils/nav";
import styles from "@/app/styles/MobileNav.module.css";

interface Props {
  scrollToSection: (sectionId: string) => void;
}

export default function MobileNav({ scrollToSection }: Props) {
  const [navOpen, setNavOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navHidden, setNavHidden] = useState(false);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      // need to check if windowScrollY is > 0 for phones that may have a bounce animation when scrolling to the top of the page
      if (window.scrollY > 0 && window.scrollY > lastScrollY) {
        setNavHidden(true);
      } else if (window.scrollY < lastScrollY) {
        setNavHidden(false);
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

  // move into control nav bar and useState setNavStyle
  const navStyle = navOpen
    ? `${styles.circle} ${styles.navOpen}`
    : navHidden
    ? `${styles.circle} ${styles.circleHidden}`
    : `${styles.circle}`;

  let delay = 500;

  return (
    <nav>
      <div
        className={navStyle}
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
          {scrollData.map((section) => {
            delay += 50;
            return (
              <li
                key={section}
                style={{ transitionDelay: `${delay}ms` }}
                onClick={() => {
                  setNavOpen(false);
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
      </div>
    </nav>
  );
}
