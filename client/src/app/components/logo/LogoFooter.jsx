import Link from "next/link";
import performanceIconWhite from "../../assets/svgs/performanceIconWhite.svg";
import performanceIcon from "../../assets/svgs/performanceIcon.svg";
import Image from "next/image";

export default function LogoFooter() {
  return (
    <Link href="/" className=" logo logo-footer">
      {" "}
      <Image
        src={performanceIcon}
        alt="performance icon"
        priority={true}
        width={28}
        height={32}
        className="performance-icon-black logo-icon"
        role="logo-performance-icon"
      />
      <h3 className="logo-text logo-footer-text" role="logo-text">
        Performance
      </h3>
    </Link>
  );
}
