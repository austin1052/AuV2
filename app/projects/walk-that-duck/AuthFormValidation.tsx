import ProjectImage from "../components/ProjectImage";
import { wtdHomeLight, wtdHomeDark } from "@/app/assets/index";
import SyntaxHighlighter from "react-syntax-highlighter";
import { snippetTheme } from "@/app/code-snippets/snippet-theme";
import { css } from "@/app/code-snippets/light-dark-mode";
import styles from "@/app/projects/walk-that-duck/styles/AuthFormValidation.module.css";
import projectStyles from "@/app/projects/styles//projects.module.css";

export default function LightDarkMode() {
  return (
    <section>
      <div className={projectStyles.sectionHeader}>
        <h3>auth form validation</h3>
      </div>
      <div className={`${styles.section} ${projectStyles.sectionContent}`}>
        <ProjectImage
          src={wtdHomeLight}
          alt="walk that duck light mode home screen"
        />
        <div className={styles.sectionInfo}>
          <div className={styles.textContainer}>
            <div className={styles.lightModeText}>light mode</div>
            <div className={styles.pointer}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.sugarOrSpiceContainer}>
            <div className={styles.sugarOrSpiceHeader}>
              are you <span>sugar</span> or <span>spice</span> <span>?</span>
            </div>
            <SyntaxHighlighter language="css" style={snippetTheme}>
              {css}
            </SyntaxHighlighter>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.pointer}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={styles.darkModeText}>dark mode</div>
          </div>
        </div>
        <ProjectImage
          src={wtdHomeDark}
          alt="walk that duck dark mode home screen"
        />
      </div>
    </section>
  );
}
