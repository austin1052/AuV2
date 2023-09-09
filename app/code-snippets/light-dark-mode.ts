export const lightDarkCSS = `
body {
  background: var(--background-gradient-sugar);
  background-color: var(--sugar);
}

@media (prefers-color-scheme: dark) {
body {
  background: var(--background-gradient-spice);
  background-color: var(--spice);
}
}`;

let height = "${height}"
let time = "${time}"
let position = "${position}"
let delay = "${delay}"
let animation = "${animation}"
let styles = {line: "${styles.line}", lineRise: "${styles.lineRise}", lineFall: "${styles.lineFall}"};

export const hehe = 
`
interface props {
  height: number;
  width: number;
}

export default function Line({ height, width }: props) {
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
  const animation = position % 2 ? \`${styles.lineRise}\` : \`${styles.lineFall}\`;
  const style = {
    "--height": \`-${height}px\`,
    "--time": \`${time}s\`,
    left: \`${position}px\`,
    animationDelay: \`${delay}s\`,
  } as CSSProperties;
  return <div className={\`${styles.line} ${animation}\`} style={style}></div>;
}
`