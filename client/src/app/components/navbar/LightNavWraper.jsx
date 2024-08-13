import Image from "next/image";
import styles from "./navbar.module.css";
import cartIcon from "../../assets/svgs/cartIcon.svg";
import Link from "next/link";
import LogoDark from "../logo/LogoDark";
import bars from "../../assets/svgs/barsDark.svg";
import user from "../../assets/svgs/user.svg";

export default function LightNavWrapper({
  cartCount,
  showMenu,
  handleMenuClick,
  handleAuthClick,
  showAuthForm,
  toggleAuthForm,
  closeAuthForm,
  closeMenu,
}) {
  return (
    <nav id="nav-main-light" className={`${styles.main} ${styles.mainLight}`}>
      <LogoDark
        shiftRight={showMenu}
        closeAuthForm={closeAuthForm}
        closeMenu={closeMenu}
      />

      <ul className={styles.links}>
        <li className={styles.listItem} onClick={closeAuthForm}>
          <Link
            href="/"
            className={`link ${styles.link}`}
            role="navbar-light-link-home"
          >
            Home
          </Link>
        </li>

        <li className={styles.listItem} onClick={closeAuthForm}>
          <Link
            href="/products/single-product"
            className={`link ${styles.link}`}
            role="navbar-light-link-shop"
          >
            Shop
          </Link>
        </li>

        <li className={styles.listItem} onClick={closeAuthForm}>
          <Link
            href="/about"
            className={`link ${styles.link}`}
            role="navbar-light-link-about"
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
            src={user}
            alt="user icon"
            priority={true}
            width={20}
            height={20}
            role="navbar-light-user-icon"
          />
        </button>
        <div id="cart-count" className={`${styles.cartCount} $`}>
          <p role="navbar-light-cart-count"> {cartCount}</p>
        </div>

        <Link href="/cart" onClick={closeAuthForm}>
          {" "}
          <Image
            id="cart-icon-black"
            src={cartIcon}
            alt="cart icon"
            priority={true}
            width={20}
            height={20}
            role="navbar-light-cart-icon"
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
            id="bars-black"
            src={bars}
            alt="menu bars"
            priority={true}
            height={32}
            width={32}
            className={styles.menuBars}
            role="navbar-light-bars"
          />
        </button>
      </span>
    </nav>
  );
}
