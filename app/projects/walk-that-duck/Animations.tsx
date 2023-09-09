import ProjectImage from "../components/ProjectImage";
import { wtdSignInDark } from "@/app/assets/index";
import SyntaxHighlighter from "react-syntax-highlighter";
import { snippetTheme } from "@/app/code-snippets/snippet-theme";
import { dot, background, fall } from "@/app/code-snippets/wtd-animation";
import styles from "@/projects/walk-that-duck/styles/Animations.module.css";
import projectStyles from "@/app/projects/styles/projects.module.css";
import Dots from "./components/Dots";

export default function Animations() {
  return (
    <section className={styles.section}>
      <div className={projectStyles.sectionHeader}>
        <h3>animations</h3>
      </div>
      <div
        className={`${styles.sectionContent} ${projectStyles.sectionContent}`}
      >
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            qui sint similique repellendus totam dolorum nobis eius atque
            debitis ullam omnis fugit voluptatem iste fuga minus hic, vero
            tempora deleniti rem quibusdam. Assumenda velit illum a tempora
            corporis facere labore dignissimos tempore hic quidem est vel fugiat
            dolor, cupiditate consectetur?
          </p>
        </div>
        <div className={styles.dotAnimation}>
          <SyntaxHighlighter language="typescript" style={snippetTheme}>
            {dot}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className={styles.dotComponentContainer}>
        <div className={styles.dotComponent}>
          <Dots />
        </div>
      </div>

      {/* </div> */}
    </section>
  );
}
