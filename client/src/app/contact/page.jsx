"use client";
import styles from "./page.module.css";
import isEmail from "../../utils/helpers/isEmail";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { displayAlert, clearAlert } from "@/lib/features/alerts/alertsSlice";
import Loader from "../components/loader/Loader";
import handleContactMessage from "../../utils/handlers/handleContactMessage";

export default function ContactPage() {
  const [showLoader, setShowLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    refs[e.target.id].current = e.target.value;
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "message") {
      setMessage(e.target.value);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    handleContactMessage(
      dispatch,
      clearAlert,
      displayAlert,
      email,
      message,
      isEmail,
      setEmail,
      setMessage,
      setShowLoader
    );
  }
  return (
    <div className={styles.page}>
      {showLoader && <Loader loadingMessage="Sending Mail..." />}
      <header className={styles.header}>
        <h1>Contact Us!</h1>
      </header>{" "}
      <main className={styles.main}>
        <form
          className={styles.form}
          role="contact-form"
          onSubmit={handleSubmit}
        >
          <div className={`form-row ${styles.formRow}`} role="div">
            <label
              className={`form-label ${styles.formLabel}`}
              htmlFor="Email"
              role="label"
            >
              Email
            </label>
            <input
              className={`form-input ${styles.formInput} ${styles.formInputShort}`}
              type="text"
              id="email"
              role="contact-form-input"
              onChange={handleChange}
              value={email}
            />
          </div>

          <div className={`form-row ${styles.formRow}`}>
            {" "}
            <label
              className={`form-label ${styles.formLabel}`}
              htmlFor="Message"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="8"
              className={` ${styles.formInput}`}
              role="contact-form-textarea"
              onChange={handleChange}
              value={message}
            ></textarea>
          </div>

          <button className={`btn ${styles.btn}`} role="contact-form-btn">
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
