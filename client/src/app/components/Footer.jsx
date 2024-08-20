import Link from "next/link";
import LogoFooter from "./logo/LogoFooter";

export default function Footer() {
  return (
    <footer className="footer-main">
      {" "}
      <ul className="footer-links">
        {" "}
        <li>
          <Link href="/" className="link link-footer">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/products/single-product" className="link link-footer">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/about" className="link link-footer">
            About
          </Link>
        </li>
        <li>
          <Link href="/frequently-asked-questions" className="link link-footer">
            Faqs
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="link link-footer">
            Privacy
          </Link>
        </li>
        <li>
          <Link href="/contact" className="link link-footer">
            Contact
          </Link>
        </li>
        <li className="footer-logo-container">
          {" "}
          <LogoFooter />
        </li>
      </ul>
    </footer>
  );
}
