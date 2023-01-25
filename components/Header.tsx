import Link from "next/link";
import { SiTwitter } from "react-icons/si";
import { TiArrowBack, TiArrowForward } from "react-icons/ti";
import { Settings2 } from "lucide-react";
import Button from "@/component-elements/Button";

const Header = ({ undo, currentIndex, redo, prevPalettes }: any) => {
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

      <div className="lg:flex items-center gap-7 hidden lg:visible">
        <div className="flex items-center">
          <Button onClick={undo} disabled={currentIndex === 1}>
            <TiArrowBack />
          </Button>
          <Button
            onClick={redo}
            disabled={currentIndex === prevPalettes.length - 1}
          >
            <TiArrowForward />
          </Button>
        </div>
        <Settings2 />
      </div>
    </>
  );
};

export default Header;
