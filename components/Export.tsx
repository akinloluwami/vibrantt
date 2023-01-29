import React from "react";
import { CurlyBraces, FileImage, Image, Link, Share2, X } from "lucide-react";
const Export = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal" className="cursor-pointer">
        <Share2 size={20} />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box py-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Export palette</h3>
            <label htmlFor="my-modal" className="">
              <X />
            </label>
          </div>

          <div className="flex items-center justify-center gap-10 my-7">
            <div className="flex flex-col items-center">
              <button className="btn">
                <Link />
              </button>
              <h1>URL</h1>
            </div>
            <div className="flex flex-col items-center opacity-50">
              <button className="btn">
                <Image />
              </button>
              <h1>PNG</h1>
            </div>
            <div className="flex flex-col items-center opacity-50">
              <button className="btn">
                <FileImage />
              </button>
              <h1>JPG</h1>
            </div>
            <div className="flex flex-col items-center opacity-50">
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
