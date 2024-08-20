"use client";
import womanRunner from "/public/assets/images/womanRunner.jpeg";
import manDribbling from "/public/assets/images/manDribbling.jpeg";
import manRunnerColor from "/public/assets/images/manRunnerColor.jpeg";
import manRunnerDark from "/public/assets/images/manRunnerDark.jpeg";
import Image from "next/image";
import { useEffect, useState } from "react";
import flashImages from "../../../utils/animations/flashImages";
import styles from "./headerImagesHome.module.css";
import React from "react";

const HeaderImagesHome = React.memo(function HeaderImagesHome() {
  useEffect(() => {
    if (window.innerWidth < 700) {
      flashImages();
    }
    window.addEventListener("resize", resizeCB);
    return () => {
      window.removeEventListener("resize", resizeCB);
    };
  }, []);

  const [imageHeight, setImageHeight] = useState(500);

  let height;
  if (typeof window !== "undefined") {
    if (window?.innerWidth > 700) {
      height = 100;
      console.log(height);
    } else {
      height = 500;
    }
  }

  function resizeCB() {
    console.log("window resized", window.innerWidth);
    if (window.innerWidth > 700) {
      setImageHeight(100);
    } else {
      setImageHeight(500);
    }
  }

  return (
    <header className={styles.header}>
      {" "}
      <div
        className={`${styles.imageContainer} ${styles.womanRunnerContainer}`}
      >
        {" "}
        <Image
          src={womanRunner}
          alt="woman runner"
          priority
          fill
          className={`${styles.womanRunnerImage} ${styles.headerImage}`}
          id="homepage-woman-runner-image"
        />
      </div>
      <div
        className={`${styles.imageContainer} ${styles.manDribblingContainer}`}
      >
        {" "}
        <Image
          src={manDribbling}
          alt="man dribbling"
          priority
          fill
          className={`${styles.headerImage} ${styles.manDribblingImage}`}
          id="homepage-man-dribbling-image"
        />
      </div>
      <div
        className={`${styles.imageContainer} ${styles.manRunnerColorContainer}`}
      >
        {" "}
        <Image
          src={manRunnerColor}
          alt="man runner"
          priority
          fill
          className={`${styles.headerImage} ${styles.manRunnerColorImage}`}
          id="homepage-man-runner-color-image"
        />
      </div>
      <div
        className={`${styles.imageContainer} ${styles.manRunnerDarkContainer}`}
      >
        <Image
          src={manRunnerDark}
          alt="man runner"
          priority
          fill
          className={`${styles.headerImage} ${styles.manRunnerDarkImage}`}
          id="homepage-man-runner-dark-image"
        />
      </div>
    </header>
  );
});

export default HeaderImagesHome;
