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
      />
      <p className="logo-text logo-footer-text">Performance</p>
    </Link>
  );
}
