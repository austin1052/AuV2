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
            I love creating animations with CSS. It amazes me that I can make
            things move just by click-clacking on my keyboard. Animations add
            life to a website and give users a more thrilling and immersive
            experience. Without them, scrolling through a website would be no
            different than scrolling through a PDF. Animations can be as simple
            as having a some text slide down when opening a menu or more complex
            by using <code>perspective</code> and <code>rotate3d</code> to have
            a logo look like it&apos;s swinging out from behind the screen.
          </p>
          <p>
            I added some Luxx to Walk that Duck by using Typescript to assign
            random starting positions and lengths of time for some divs to rise
            and fall in the background. To do this I first determined the height
            and width of the user&apos;s screen. The width is used to determine
            the starting X position and the height is used to calculate the time
            it takes for the Luxx the move from the from the top to the bottom
            or vice versa.
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
    </section>
  );
}
