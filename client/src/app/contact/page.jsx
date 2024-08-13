import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Contact Us!</h1>
      </header>{" "}
      <main className={styles.main}>
        <form className={styles.form} role="contact-form">
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
              id="Email"
              role="contact-form-input"
            />
          </div>

          <div className={`form-row ${styles.formRow}`}>
            {" "}
            <label className={`form-label ${styles.formLabel}`} for="Message">
              Message:
            </label>
            <textarea
              id="Message"
              name="Message"
              rows="8"
              className={` ${styles.formInput}`}
              role="contact-form-textarea"
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
