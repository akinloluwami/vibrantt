import React, { useState } from "react";
import { CurlyBraces, FileImage, Image, Link, Share2, X } from "lucide-react";
import copy from "copy-to-clipboard";
const Export = () => {
  const [copyText, setCopyText] = useState<string>("Copy URL");

  return (
    <div>
      <label htmlFor="my-modal" className="cursor-pointer">
        <Share2 size={20} />
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box py-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Export palette</h3>
            <label htmlFor="my-modal" className="cursor-pointer">
              <X />
            </label>
          </div>

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
            <div
              className="flex flex-col items-center opacity-50 tooltip"
              data-tip="Coming soon"
            >
              <button className="btn">
                <CurlyBraces />
              </button>
              <h1>Code</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Export;
