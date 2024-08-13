import Link from "next/link";
import performanceIcon from "../../assets/svgs/performanceIcon.svg";
import performanceIconWhite from "../../assets/svgs/performanceIconWhite.svg";
import Image from "next/image";

export default function LogoDark({ shiftRight, closeMenu, closeAuthForm }) {
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
      <div className="logo-icon-container">
        {" "}
        <Image
          id="performance-icon-black"
          src={performanceIcon}
          alt="performance icon"
          priority={true}
          fill
          className="logo-icon"
          role="logo-performance-icon"
        />
      </div>
      <h3 id="logo-text" className="logo-text logo-nav-text" role="logo-text">
        Performance
      </h3>
    </Link>
  );
}
