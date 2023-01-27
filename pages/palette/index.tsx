import randomColor from "randomcolor";
import { useContext, useEffect, useState } from "react";
import colorNameList from "color-name-list";
import useColorSpaceStore from "@/stores/useColorSpaceStore";
import useToggleStore from "@/stores/useToggleStore";
import useLuminosityStore from "@/stores/useLuminosityStore";
import { useRouter } from "next/router";

export default function Home() {
  const [palette, setPalette] = useState<string[]>([]);
  const [copyText, setCopyText] = useState<string>("Copy");
  const [prevPalettes, setPrevPalettes] = useState<string[][]>([[]]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [colorCount, setColorCount] = useState<number>(5);
  const { colorSpace } = useColorSpaceStore();
  const { toggleValue } = useToggleStore();
  const { luminosity } = useLuminosityStore();

  const router = useRouter();

  const generate = () => {
    const newPalette: string[] = randomColor({
      count: colorCount,
      luminosity:
        luminosity === "Default"
          ? "bright"
          : luminosity === "Dark"
          ? "dark"
          : luminosity === "Light"
          ? "light"
          : luminosity === "Random"
          ? "random"
          : "bright",
    });
    const newPaletteWithoutHash = newPalette.map((color) => color.substr(1));
    setPalette(newPalette);
    router.push(`/palette/${newPaletteWithoutHash.join("-")}`);
  };

  useEffect(() => {
    const urlPalette: string = router.query?.palette as string;
    const pA = urlPalette?.split("-");
    const newPA = pA?.map((color) => "#" + color);
    console.log(urlPalette);

    if (urlPalette && newPA) {
      setPalette(newPA);
    } else {
      {
        !router.query?.palette && generate();
      }
    }
  }, [router]);

  //#e50943 -> Cherry Velvet
  //#e5e509 -> Peridot
  // >> #56028e -> SQL Injection Purple

  return <>Loading...</>;
}
