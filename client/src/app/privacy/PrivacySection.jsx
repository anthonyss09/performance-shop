import styles from "./page.module.css";

export default function PrivacySection({ header, paragraph, footer }) {
  return (
    <section className={styles.section}>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        repudiandae.
      </h3>
      <p className={styles.sectionP}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempora
        inventore iure dolore itaque ullam veniam obcaecati blanditiis
        consequuntur, amet rem possimus vitae odio fuga excepturi. Maxime fugit
        modi nostrum, facilis voluptatem esse eum recusandae deserunt omnis, in
        alias sapiente!
      </p>
      <p className={styles.sectionFooter}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        animi. Exercitationem nobis nulla tenetur porro nihil nemo consequatur
        impedit voluptatem.
      </p>
    </section>
  );
}
