"use client";
import { FormEvent, useState } from "react";
import CircularLoader from "@/components/loader/circular-loader";
import css from "./embeddedForm.module.css";

export function EmbeddedForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const subscribeUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const response = await fetch("/api/ml/subscribeUser", {
      body: JSON.stringify({
        email,
        firstName,
        lastName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const json = await response.json();
    const { data, error } = json;
    if (error) {
      setIsLoading(false);
      setMessage(error);
      return;
    }
    setMessage("You have successfully subscribed.");
    setIsLoading(false);
    return data;
  };

  if (message) {
    return <p className={css.errorMessage}>{message}</p>;
  }

  if (isLoading) {
    return <CircularLoader />;
  }

  return (
    <form onSubmit={subscribeUser} className={css.form}>
      <h2>Subscribe to our newsletter!</h2>
      <div className={css.inputWrapper}>
        <label className={css.inputAndLabel}>
          <span>First name</span>
          <input name="firstName" className={css.inputField} />
        </label>
        <label className={css.inputAndLabel}>
          <span>Last name</span>
          <input name="lastName" className={css.inputField} />
        </label>
        <label className={css.inputAndLabel}>
          <span>Email</span>
          <input name="email" type="email" className={css.inputField} />
        </label>
      </div>
      <button type="submit" value="" name="subscribe" className={css.button}>
        Submit
      </button>
    </form>
  );
}

export default EmbeddedForm;
