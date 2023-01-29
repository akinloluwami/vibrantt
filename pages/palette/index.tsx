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

  //#e50943 -> Cherry Velvet
  //#e5e509 -> Peridot
  // >> #56028e -> SQL Injection Purple

  return <>Loading...</>;
}
