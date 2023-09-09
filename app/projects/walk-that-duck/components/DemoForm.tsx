"use client";

import { useState, useRef } from "react";
import styles from "@/projects/walk-that-duck/components/styles/DemoForm.module.css";

type View = "sign-in" | "sign-up" | "check-email";

export default function DemoForm() {
  const [email, setEmail] = useState("not-an-email");
  const [password, setPassword] = useState("password");
  const [userName, setUserName] = useState("Marcia Marcia Marcia");
  const [view, setView] = useState<View>("sign-in");
  // const [showSignUp, setShowSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const animationRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setIsLoading(true);
    // setIsLoading(false);
    setView("check-email");
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setIsLoading(true);
    setError(false);
  };

  const handleSwitchView = (e: any) => {
    setError(false);
  };

  type FormInputs = "email" | "password" | "valid";

  const errorMessages: Record<FormInputs, string> = {
    email: "Girly... enter a valid email",
    password: "Password must be 8 characters",
    valid: "",
  };

  const setValidityMessage = (
    e: React.ChangeEvent<HTMLInputElement>,
    type?: FormInputs
  ) => {
    const input = e.target;
    // if (input.value === "" && type === "password") return;
    const message = errorMessages[type || "valid"];
    (input as HTMLInputElement).setCustomValidity(message);
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={view === "sign-in" ? handleSignIn : handleSignUp}
      >
        <div className={`${styles.signUpInput} ${styles.inputContainer}`}>
          <input
            // disabled
            required
            name="email"
            type="email"
            // onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="you@example.com"
            onInvalid={(e: any) => setValidityMessage(e, "email")}
            onInput={(e: any) => setValidityMessage(e)}
            ref={inputRef}
          />
          <div className={styles.label}>
            <label htmlFor="email">Email</label>
            <div
              className={styles.invalidMessage}
              data-testid="invalid-email-error"
            >
              Enter a valid email
            </div>
          </div>
        </div>

        <div className={`${styles.signUpInput} ${styles.inputContainer}`}>
          <input
            disabled
            required
            name="password"
            type="password"
            pattern=".{8,}"
            onChange={(e) => {
              setError(false);
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="••••••••"
            onInvalid={(e: any) => setValidityMessage(e, "password")}
            onInput={(e: any) => setValidityMessage(e)}
          />
          <div className={styles.label}>
            <label htmlFor="password">Password</label>
            <div
              className={styles.invalidMessage}
              data-testid="invalid-password-error"
            >
              Password must be 8 characters
            </div>
            {error && (
              <div
                data-testid="incorrect-password-error"
                className={`${styles.invalidMessage} ${styles.error}`}
              >
                Password is incorrect
              </div>
            )}
          </div>
        </div>
        <div
          className={`${styles.signUpInput} ${styles.inputContainer}`}
          ref={animationRef}
        >
          <input
            disabled
            required
            name="name"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="Marcia Marcia Marcia"
          />
          <div className={styles.label}>
            <label htmlFor="name">Your Name</label>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => console.log("click")}
            className={
              isLoading
                ? `${styles.button} ${styles.loading}`
                : `${styles.button}`
            }
          >
            demo
          </button>
        </div>
      </form>
    </div>
  );
}
