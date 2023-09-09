"use client";

import { useState, useEffect, useRef, CSSProperties } from "react";
import styles from "@/projects/walk-that-duck/styles/Animations.module.css";

export default function Dots() {
  const [dots, setDots] = useState<any[]>([]);
  const [componentLoaded, setComponentLoaded] = useState(false);
  const dotsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComponentLoaded(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // determines number of lines, bigger number = fewer lines
  const divider = 8;

  useEffect(() => {
    if (dotsRef.current && componentLoaded) {
      const height = dotsRef.current.offsetHeight;
      const width = dotsRef.current.offsetWidth;
      const numberOfElements = width / divider;
      let dots = [];
      for (let i = 0; i < numberOfElements; i++) {
        dots.push(<Dot key={i} height={height} width={width} />);
      }
      setDots(dots);
    }
  }, [componentLoaded]);

  return (
    <div ref={dotsRef} className={styles.background}>
      <div className={styles.middleLine}></div>
      {dots.length > 0 && dots}
      <div className={styles.backdrop}></div>
    </div>
  );
}

interface props {
  height: number;
  width: number;
}

function Dot({ height, width }: props) {
  const delayMultiplier = 15;

  // smaller values make the delay slower
  const minTime = Math.floor(height / 25);
  const maxTime = Math.floor(height / 10);
  const timeList = Array.from(
    { length: maxTime - minTime },
    (_, i) => i + minTime
  );
  const time = timeList[Math.floor(Math.random() * timeList.length)];
  const position = Math.floor(Math.random() * width);
  const delay = Math.random() * delayMultiplier;

  // asign either rise or fall animation
  const animation = position % 2 ? `${styles.rise}` : `${styles.fall}`;

  // .background has initial values set for the variables --height and --time
  // the height and time values applied to each line override the initial values
  const style = {
    "--height": `-${height}px`,
    "--time": `${time}s`,
    left: `${position}px`,
    animationDelay: `${delay}s`,
  } as CSSProperties;

  return <div className={`${styles.dot} ${animation}`} style={style}></div>;
}
