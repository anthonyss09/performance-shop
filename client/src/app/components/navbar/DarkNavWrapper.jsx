import Image from "next/image";
import Link from "next/link";
import LogoLight from "../logo/LogoLight";
import styles from "./navbar.module.css";
import barsWhite from "../../assets/svgs/barsWhite.svg";
import cartIconWhite from "../../assets/svgs/cartIconWhite.svg";
import userWhite from "../../assets/svgs/userWhite.svg";

export default function DarkNavWrapper({
  cartCount,
  showMenu,
  handleMenuClick,
  showAuthForm,
  toggleAuthForm,
  closeAuthForm,
  closeMenu,
}) {
  return (
    <nav id="nav-main-dark" className={`${styles.main} ${styles.mainDark}`}>
      <LogoLight
        shiftRight={showMenu}
        closeMenu={closeMenu}
        closeAuthForm={closeAuthForm}
      />
      <ul className={styles.links}>
        <li className={styles.listItem} onClick={closeAuthForm}>
          <Link href="/" className={`link ${styles.link} ${styles.linkWhite}`}>
            Home
          </Link>
        </li>

        <li className={styles.listItem} onClick={closeAuthForm}>
          <Link
            href="/products/single-product"
            className={`link ${styles.link} ${styles.linkWhite}`}
          >
            Shop
          </Link>
        </li>
        <li className={styles.listItem} onClick={closeAuthForm}>
          <Link
            href="/about"
            className={`link ${styles.link} ${styles.linkWhite}`}
          >
            About
          </Link>
        </li>
      </ul>

      <span>
        <button className="btn" onClick={toggleAuthForm}>
          {" "}
          <Image
            id="user-icon"
            src={userWhite}
            alt="user icon"
            priority={true}
            width={20}
            height={20}
          />
        </button>
        <div
          id="cart-count"
          className={`${styles.cartCount} ${styles.cartCount}`}
        >
          <p> {cartCount}</p>
        </div>

        <Link href="/cart" onClick={closeAuthForm}>
          {" "}
          <Image
            id="cart-icon-white"
            src={cartIconWhite}
            alt="cart icon"
            priority={true}
            width={20}
            height={20}
          />
        </Link>
        <button
          className={`btn ${styles.btn}`}
          onClick={() => {
            handleMenuClick();
            closeAuthForm();
          }}
        >
          {" "}
          <Image
            id="bars-white"
            src={barsWhite}
            alt="menu bars"
            priority={true}
            height={32}
            width={32}
            className={`${styles.menuBars} ${styles.menuBarsWhite}`}
          />
        </button>
      </span>
    </nav>
  );
}
