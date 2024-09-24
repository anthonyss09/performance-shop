"use client";
import styles from "./page.module.css";
import Image from "next/image";
import sneakerOne from "../../../public/assets/images/sneakerOne.jpeg";
import manDribbling from "../../../public/assets/images/manDribbling2.jpeg";
import manRunnerDark from "../../../public/assets/images/manRunnerDark.jpeg";
import womanRunner from "../../../public/assets/images/womanRunner.jpeg";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {" "}
      <header className={styles.header}>
        <h1>About The Generation 1</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.sectionColumn}>
          <p className={styles.sectionColumnPFirst}>
            Imagine a sneaker that can perform under any athletic circumstance.
          </p>
          <picture className={styles.imageContainer}>
            <Image
              src={sneakerOne}
              fill
              priority
              className={styles.image}
              alt="sneaker"
            />
          </picture>
        </section>
        <section className={styles.sectionColumn}>
          <p className={styles.sectionColumnP}>
            It would take a sneaker engineering team working with cutting edge
            footwear technology.
          </p>
          <picture className={styles.imageContainer}>
            <Image
              src={manRunnerDark}
              fill
              priority
              className={styles.image}
              alt="man runner dark"
            />
          </picture>
        </section>
        <section className={styles.sectionColumn}>
          <p className={styles.sectionColumnP}>
            You&apos;d need your product tested by top level athletes that were
            willing to push the sneaker as hard as they push themselves.
          </p>
          <picture className={styles.imageContainer}>
            <Image
              src={manDribbling}
              fill
              priority
              className={styles.image}
              alt="man dribbling"
            />
          </picture>
        </section>

        <section className={styles.sectionRow}>
          <p>If successfull you&apos;d have the performance generation 1.</p>

          <picture className={styles.imageContainerSmall}>
            {" "}
            <Image
              src={sneakerOne}
              fill
              priority
              className={styles.image}
              alt="sneaker"
            />
          </picture>
        </section>

        <section>
          <picture className={styles.imageContainerLarge}>
            <Image
              src={womanRunner}
              fill
              priority
              className={styles.image}
              alt="woman runner"
            />
          </picture>
        </section>
      </main>
    </div>
  );
}
