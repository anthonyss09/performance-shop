import styles from "./page.module.css";

export default function FaqSection({ header, paragraph }) {
  return (
    <section>
      <h3 className={styles.sectionHeader}>{header}</h3>
      <p className={styles.sectionParagraph}>{paragraph}</p>
    </section>
  );
}
