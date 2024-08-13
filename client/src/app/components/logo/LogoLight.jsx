import Link from "next/link";
import performanceIconWhite from "../../assets/svgs/performanceIconWhite.svg";
import Image from "next/image";

export default function LogoLight({ shiftRight, closeMenu, closeAuthForm }) {
  return (
    <Link
      href="/"
      className={` logo logo-nav ${shiftRight ? "logo-nav-shift-right" : ""}`}
      onClick={() => {
        closeMenu();
        closeAuthForm();
      }}
    >
      {" "}
      <Image
        src={performanceIconWhite}
        alt="performance icon"
        priority={true}
        width={28}
        height={32}
        className="performance-icon"
        role="logo-performance-icon"
      />
      <h3 className="logo-text-white" role="logo-text">
        Performance
      </h3>
    </Link>
  );
}
