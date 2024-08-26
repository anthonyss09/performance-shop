import styles from "./loader.module.css";

export default function Loader({ loadingMessage }) {
  return (
    <aside className={styles.main}>
      <div>
        {" "}
        <p className={styles.p}>{loadingMessage}</p>
      </div>
    </aside>
  );
}
