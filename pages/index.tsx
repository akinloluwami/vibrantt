import randomColor from "randomcolor";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const router = useRouter();

  const generate = () => {
    const newPalette: string[] = randomColor({
      count: 5,
    });
    const newPaletteWithoutHash = newPalette.map((color) => color.substr(1));

    router.replace(`/${newPaletteWithoutHash.join("-")}`);
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <img
        src="https://res.cloudinary.com/xing0x/image/upload/v1674131508/VIBRANT_icon_nrwiko.png"
        alt="Vibrantt logo"
        className="animate-bounce w-32"
      />
      <h1>
        <Typewriter
          words={[
            "Our robots are generating colors",
            "#FF0000",
            "#00FF00",
            "#0000FF",
            "Hang tight!",
            "Almost there!",
            "Hmmm...this is taking longer than usual...",
          ]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={30}
          deleteSpeed={15}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
}
