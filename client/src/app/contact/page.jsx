"use client";
import styles from "./page.module.css";
import isEmail from "../../utils/helpers/isEmail";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  displayAlert,
  clearAlert,
} from "../../lib/features/alerts/alertsSlice";
import Loader from "../components/loader/Loader";
import handleContactMessage from "../../utils/handlers/handleContactMessage";

export default function ContactPage() {
  const [showLoader, setShowLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    // const { id, value } = e.target;
    console.log("in the change", e.target.value);
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
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={`form-row ${styles.formRow}`}>
            <label className={`form-label ${styles.formLabel}`} htmlFor="email">
              Email
            </label>
            <input
              className={`form-input ${styles.formInput} ${styles.formInputShort}`}
              id="email"
              onChange={handleChange}
              value={email}
              type="text"
            />
          </div>

          <div className={`form-row ${styles.formRow}`}>
            {" "}
            <label
              className={`form-label ${styles.formLabel}`}
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="8"
              className={` ${styles.formInput}`}
              onChange={handleChange}
              value={message}
            ></textarea>
          </div>

          <button className={`btn ${styles.btn}`}>Send</button>
        </form>
      </main>
    </div>
  );
}
