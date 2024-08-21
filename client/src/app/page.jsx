"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import sneakerOne from "../../public/assets/images/sneakerOne.jpeg";
import HeaderImagesHome from "./components/headerImagesHome/HeaderImagesHome";
import styles from "./page.module.css";
import React from "react";

const HomePage = React.memo(function HomePage() {
  const cartIdRef = useRef(null);
  useEffect(() => {
    cartIdRef.current = localStorage.getItem("performanceCartId")
      ? JSON.parse(localStorage.getItem("performanceCartId"))
      : null;
    const logo = document.getElementById("homepage-slogan");
    if (window.innerWidth > 700) {
      logo.style.opacity = 1;
    }
  }, []);

  let content;

  const loading = <p>loading</p>;

  return (
    <div className={styles.main}>
      <HeaderImagesHome />
      <p id="homepage-slogan" className={styles.slogan}>
        Get out & play.
      </p>
      <main>
        {" "}
        <section className={styles.section}>
          <div className={styles.sneakerSelect}>
            <h4 className={styles.title}>Performance: Generation 1</h4>
            <Link
              href="/products/single-product"
              className={`link ${styles.linkBuyNow}`}
            >
              Buy Now
            </Link>
          </div>

          <picture
            className={`${styles.imageContainer} ${styles.sneakerImageContainer}`}
          >
            {" "}
            <Image
              src={sneakerOne}
              alt="sneaker one"
              priority
              fill
              className={styles.sneakerImage}
            />
          </picture>
          <div className={styles.about}>
            <p>
              Performance Generation 1 is the athletic sneaker that performs
              under any circusmstance. We’ve had elite professionals across
              multiple disciplines put this shoe to the test and now we bring to
              you the generation one.
            </p>
            <Link href="/about" className={`link ${styles.linkLearn}`}>
              About the tech...
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
});

export default HomePage;
