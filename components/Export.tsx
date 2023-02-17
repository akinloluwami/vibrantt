import React, { useState } from "react";
import {
  ArrowBigLeft,
  ArrowLeft,
  Copy,
  CurlyBraces,
  Download,
  FileImage,
  Image,
  Link,
  Share2,
  X,
} from "lucide-react";
import copy from "copy-to-clipboard";
import Button from "@/component-elements/Button";
import downloadTextFile from "@/utils/downloadTextFile";
import generate from "project-name-generator";
import PaletteImage from "./PaletteImage";

interface ExportProps {
  paletteCode: string;
  palette: string[];
}

const Export = ({ paletteCode, palette }: ExportProps) => {
  const [copyText, setCopyText] = useState<string>("Copy URL");
  const [copyOption, setCopyOption] = useState("");
  const [copyCodeText, setCopyCodeText] = useState("Copy");
  const fileName = generate().dashed;
  // const { ref, getPng } = useToImage();

  return (
    <div>
      <div className="">
        <PaletteImage palette={palette} />
      </div>

      <label htmlFor="my-modal" className="cursor-pointer">
        <Share2 size={20} />
      </label>

      <input
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
        onChange={() => {
          document.getElementById("my-modal")?.blur();
        }}
      />
      <div className="modal">
        <div className="modal-box py-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">
              {copyOption === ""
                ? "Export palette"
                : copyOption === "Code"
                ? "Code"
                : ""}
            </h3>
            {copyOption === "" && (
              <label htmlFor="my-modal" className="cursor-pointer">
                <X />
              </label>
            )}
            {copyOption !== "" && (
              <Button onClick={() => setCopyOption("")}>
                <ArrowLeft />
              </Button>
            )}
          </div>

          {copyOption === "" && (
            <div className="flex items-center justify-center gap-10 my-7">
              <div
                className="flex flex-col items-center tooltip"
                data-tip={copyText}
                onClick={() => {
                  copy(window.location.href);
                  setCopyText("Copied");
                  setTimeout(() => {
                    setCopyText("Copy URL");
                  }, 750);
                }}
              >
                <button className="btn">
                  <Link />
                </button>
                <h1>URL</h1>
              </div>
              <div
                className="flex flex-col items-center tooltip"
                data-tip="Export as code"
              >
                <button className="btn" onClick={() => setCopyOption("Code")}>
                  <CurlyBraces />
                </button>
                <h1>Code</h1>
              </div>
              <div
                className="flex flex-col items-center opacity-50 tooltip"
                data-tip="Coming soon"
              >
                <button className="btn">
                  <Image />
                </button>
                <h1>PNG</h1>
              </div>
              <div
                className="flex flex-col items-center opacity-50 tooltip"
                data-tip="Coming soon"
              >
                <button className="btn">
                  <FileImage />
                </button>
                <h1>JPG</h1>
              </div>
            </div>
          )}
          {copyOption === "Code" && (
            <div className="">
              <textarea
                value={paletteCode}
                className="bg-transparent w-full rounded-md mt-4 h-52"
              />{" "}
              <div className="flex items-center gap-2 mt-4">
                <button
                  className="btn flex items-center gap-1"
                  onClick={() =>
                    downloadTextFile({ content: paletteCode, fileName })
                  }
                >
                  <Download size={16} /> Download
                </button>
                <button
                  className="btn flex items-center gap-1"
                  onClick={() => {
                    copy(paletteCode);
                    setCopyCodeText("Copied");
                    setTimeout(() => {
                      setCopyCodeText("Copy");
                    }, 750);
                  }}
                >
                  <Copy size={16} /> {copyCodeText}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Export;
