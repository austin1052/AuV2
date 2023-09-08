import ProjectImage from "../components/ProjectImage";
import { wtdSignInDark } from "@/app/assets/index";
import SyntaxHighlighter from "react-syntax-highlighter";
import { snippetTheme } from "@/app/code-snippets/snippet-theme";
import {
  validationMessage,
  input,
} from "@/app/code-snippets/auth-form-validation";
import styles from "@/projects/walk-that-duck/styles/AuthFormValidation.module.css";
import projectStyles from "@/app/projects/styles/projects.module.css";
import AuthForm from "./components/DemoForm";

export default function AuthFormValidation() {
  return (
    <section>
      <div className={projectStyles.sectionHeader}>
        <h3>auth form validation</h3>
      </div>
      <div
        className={`${styles.sectionContent} ${projectStyles.sectionContent}`}
      >
        <div className={styles.description}>
          <p>
            Styles, animations, and user alerts for invalid form input were
            built using the CSS using the psuedo selectors :invalid
            :placeholder-shown and :focus and utilizing variables.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            qui sint similique repellendus totam dolorum nobis eius atque
            debitis ullam omnis fugit voluptatem iste fuga minus hic, vero
            tempora deleniti rem quibusdam. Assumenda velit illum a tempora
            corporis facere labore dignissimos tempore hic quidem est vel fugiat
            dolor, cupiditate consectetur?
          </p>
        </div>
        <div className={styles.customValidity}>
          <div className={styles.pointerMessage}>
            <div>
              click <span>demo</span> to see the
            </div>
            <div>custom validity message</div>
          </div>
          <SyntaxHighlighter language="typescript" style={snippetTheme}>
            {validationMessage}
          </SyntaxHighlighter>
          <div className={styles.pointer}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.authFormContainer}>
            <AuthForm />
          </div>
        </div>
      </div>

      {/* </div> */}
    </section>
  );
}
