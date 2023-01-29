import randomColor from "randomcolor";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
      <h1>Our robots are generating colors...</h1>
    </div>
  );
}
