let height = "${height}"
let time = "${time}"
let position = "${position}"
let delay = "${delay}"
let animation = "${animation}"
let styles = {dot: "${styles.dot}", rise: "${styles.rise}", fall: "${styles.fall}"};

export const dot = 
`interface props {
  height: number;
  width: number;
}

export default function Luxx({ height, width }: props) {
  const delayMultiplier = 15;
  const minTime = Math.floor(height / 25);
  const maxTime = Math.floor(height / 10);
  const timeList = Array.from(
    { length: maxTime - minTime },
    (_, i) => i + minTime
  );
  const time = timeList[Math.floor(Math.random() * timeList.length)];
  const position = Math.floor(Math.random() * width);
  const delay = Math.random() * delayMultiplier;
  const animation = position % 2 ? \`${styles.rise}\` : \`${styles.fall}\`;
  const style = {
    "--height": \`-${height}px\`,
    "--time": \`${time}s\`,
    left: \`${position}px\`,
    animationDelay: \`${delay}s\`,
  } as CSSProperties;
  return <div className={\`${styles.dot} ${animation}\`} style={style}></div>;
}
`

export const background = 
`
export default function Background() {
  const [dots, setDots] = useState<any[]>([]);
  const [componentLoaded, setComponentLoaded] = useState(false);
  const dotsRef = useRef<HTMLDivElement | null>(null);
  const divider = 8;
  useEffect(() => {
    if (dotsRef.current) {
      const height = dotsRef.current.offsetHeight;
      const width = dotsRef.current.offsetWidth;
      const numberOfElements = width / divider;
      let _dots = [];
      for (let i = 0; i < numberOfElements; i++) {
        _dots.push(<Line key={i} height={height} width={width} />);
      }
      setDots(_dots);
    }
  }, []);
  return (
    <div ref={dotsRef} className={styles.background}>
      <div className={styles.middleLine}></div>
      {dots.length > 0 && dots}
      <div className={styles.backdrop}></div>
    </div>
  );
}
`

export const fall =
`
.fall {
  animation: fall var(--time) linear infinite backwards;
}

@keyframes fall {
  0% {
    transform: translateY(var(--height));
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  90% {
    opacity: 0;
  }
  100% {
    transform: translateY(50px);
    opacity: 0;
  }
}
`