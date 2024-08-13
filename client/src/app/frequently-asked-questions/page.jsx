import FaqSection from "./FaqSection";
import styles from "./page.module.css";

export default function Faqs() {
  return (
    <main className={styles.main}>
      <h1>Frequently Asked Questions</h1>
      <FaqSection
        header="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, labore?"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis est eos reprehenderit voluptatibus molestias cumque nobis qui nam, soluta, nostrum vitae odit delectus quidem non? Illo cum dolores veniam laboriosam quae inventore explicabo aliquid doloremque accusamus. At laboriosam ducimus voluptatibus."
      />
      <FaqSection
        header="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, labore?"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis est eos reprehenderit voluptatibus molestias cumque nobis qui nam, soluta, nostrum vitae odit delectus quidem non? Illo cum dolores veniam laboriosam quae inventore explicabo aliquid doloremque accusamus. At laboriosam ducimus voluptatibus."
      />
      <FaqSection
        header="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, labore?"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis est eos reprehenderit voluptatibus molestias cumque nobis qui nam, soluta, nostrum vitae odit delectus quidem non? Illo cum dolores veniam laboriosam quae inventore explicabo aliquid doloremque accusamus. At laboriosam ducimus voluptatibus."
      />
      <FaqSection
        header="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, labore?"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis est eos reprehenderit voluptatibus molestias cumque nobis qui nam, soluta, nostrum vitae odit delectus quidem non? Illo cum dolores veniam laboriosam quae inventore explicabo aliquid doloremque accusamus. At laboriosam ducimus voluptatibus."
      />
    </main>
  );
}
