import React, { useState } from "react";
import Input from "@/components/Input";
import { FaVideo } from "react-icons/fa6";
import { UploadFileType } from "@/type";

function UploadVideo({ label, inputState, inputSetState }: UploadFileType) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-[#8a91a0]">{label}</h2>
      <div className="relative">
        <div className="absolute w-[200px] opacity-0  z-2 cursor-pointer rounded-md">
          {" "}
          <Input
            type="file"
            inputState={inputState}
            inputSetState={inputSetState}
          />
        </div>
        <button
          type="button"
          className=" w-[200px] p-3 text-white bg-indigo-500 rounded-md"
        >
          <div className="flex gap-2 items-center justify-center">
            {" "}
            <p>Бичлэг оруулах</p>
            <FaVideo style={{ fontSize: "18px" }} />
          </div>
        </button>
      </div>
    </section>
  );
}

export default UploadVideo;
