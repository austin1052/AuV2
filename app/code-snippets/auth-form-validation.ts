export const validationMessage =
`type FormInputs = "email" | "password" | "valid";

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
  if (input.value === "") return;
  const message = errorMessages[type || "valid"];
  (input as HTMLInputElement).setCustomValidity(message);
};
`

export const input = 
`<input
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
</div>
`