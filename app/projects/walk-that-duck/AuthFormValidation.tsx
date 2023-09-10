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
            Alerts and animations are applied to the form using CSS and
            Typescript. The CSS psuedo selectors <code>:focus</code>,{" "}
            <code>:invalid</code>, and <code>:placeholder-shown</code> provide
            an easy way to change the colors of the form based off of the
            user&apos;s input. Adding <code>required</code> and{" "}
            <code>type=&quot;email&quot;</code> to the HTML input element lets
            the browser recognize input that does not include &quot;@&quot;.
            When a user tries to submit the form, any styles applied using the
            selector <code>:invalid</code> will become active. The same can be
            done with other input fields, but they must include the{" "}
            <code>pattern</code> attribute with a regular expression as the
            value. For example, to require a password to be at least 8
            characters, <code>pattern={`".{8,}"`}</code> should be added to the
            input element.
          </p>
          <p>
            These CSS selectors should be combined with the selector{" "}
            <code>:not</code> to ensure that the invalid styles are only applied
            after the user has finished typing and has either clicked off of the
            input field or tried to submit the form. Take a look at the CSS code
            snippet below to see how I used <code>:not</code> to do this.
          </p>
          {/* <code>input:has(:invalid:not(:focus) :not(:placeholder-shown))</code> */}
          <p>
            Try out the demo below to see what happens when you try to submit
            the form with an invalid email. When you click demo, the browser
            will show a custom validity message. When you click off of the email
            field, the form will run a shake animation. These features give
            users helpful information on how to correctly fill out the form.
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
