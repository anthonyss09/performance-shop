import styles from "./page.module.css";
import PrivacySection from "./PrivacySection";

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        {" "}
        <h1>Privacy Agreement</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iure
          illum amet quo, aliquid asperiores minus recusandae error! Libero
          temporibus consequatur provident rem voluptate deleniti suscipit,
          pariatur non, quibusdam error iusto neque modi aperiam. Laborum
          voluptas saepe dicta? Delectus culpa natus nobis nihil eum impedit ex
          a fugiat autem eius.
        </p>
      </header>
      <main className={styles.main}>
        <PrivacySection />
        <PrivacySection />
        <PrivacySection />
        <PrivacySection />
        <PrivacySection />
      </main>
    </div>
  );
}
