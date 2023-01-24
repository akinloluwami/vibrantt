import Link from "next/link";
import { SiTwitter } from "react-icons/si";

const Header = () => {
  return (
    <>
      <img
        src="https://res.cloudinary.com/xing0x/image/upload/v1674131509/VIBRANTwbgggw_w6j7m9.png"
        className="w-32"
        alt=""
      />

      <p className="text-xl text-center lg:block hidden">
        Press the space bar to generate a new palette!
      </p>

      <Link
        href="https://twitter.com/vibranttdotco/"
        target={"_blank"}
        className="flex items-center gap-2 lg:hidden"
      >
        <SiTwitter />
        Follow on Twitter
      </Link>
    </>
  );
};

export default Header;
