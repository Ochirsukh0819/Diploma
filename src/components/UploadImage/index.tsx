"use  client";
import { UploadFileType } from "@/type";
import React from "react";
import Input from "@/components/Input";
import { BsCloudUpload } from "react-icons/bs";

function UploadImage({ label, inputState, inputSetState }: UploadFileType) {
  return (
    <section className="flex gap-10 mt-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-[#8a91a0]">{label}</h2>
        <div className="p-4 bg-[#f2f2ff] rounded-xl  border-dotted flex flex-col gap-4 items-center justify-center border-2">
          {inputState === null ? (
            <div className="text-[#5757c3] md:text-5xl text-4xl">
              {" "}
              <BsCloudUpload />
            </div>
          ) : (
            <p>{inputState.name}</p>
          )}

          <div className="relative">
            <div className="absolute md:w-[120px] w-[100px] opacity-0  z-2 cursor-pointer rounded-xl">
              {" "}
              <Input
                type="file"
                inputState={inputState}
                inputSetState={inputSetState}
              />
            </div>
            <button
              type="button"
              className=" md:w-[120px] w-[100px] p-2 text-white bg-indigo-500 rounded-xl"
            >
              <div className="flex items-center md:text-sm text-[12px] rounded-xl justify-center">
                {" "}
                <p>Зураг оруулах</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UploadImage;
