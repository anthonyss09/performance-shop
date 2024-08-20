"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./dropMenu.module.css";
import chevronRight from "../../assets/svgs/chevronRight.svg";

export default function DropMenu({ showMenu, handleMenuClick }) {
  return (
    <div className={`${styles.main} ${showMenu ? styles.visible : ""}`}>
      <div className={styles.header}>
        <button className={styles.btn} onClick={handleMenuClick}>
          <Image src={chevronRight} alt="close arrow" height={30} width={30} />
        </button>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link
            href="/"
            className={`link ${styles.link}`}
            onClick={handleMenuClick}
          >
            Home
          </Link>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.listItem}>
          <Link
            href="/products/single-product"
            className={`link ${styles.link}`}
            onClick={handleMenuClick}
          >
            Shop
          </Link>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.listItem}>
          <Link
            href="/about"
            className={`link ${styles.link}`}
            onClick={handleMenuClick}
          >
            {" "}
            About
          </Link>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.listItem}>
          <Link
            href="/contact"
            className={`link ${styles.link}`}
            onClick={handleMenuClick}
          >
            Contact
          </Link>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.listItem}>
          <Link
            href="/frequently-asked-questions"
            className={`link ${styles.link}`}
            onClick={handleMenuClick}
          >
            FAQS
          </Link>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.listItem}>
          <Link
            href="/privacy"
            className={`link ${styles.link}`}
            onClick={handleMenuClick}
          >
            Privacy
          </Link>
          <div className={styles.underline}></div>
        </li>
      </ul>
    </div>
  );
}
