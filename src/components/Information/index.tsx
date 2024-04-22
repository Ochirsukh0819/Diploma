import React from "react";
import addFiles from "@/assets/images/addFiles.svg";
import onlineDocument from "@/assets/images/onlineDocument.svg";
import Image from "next/image";

function Information() {
  return (
    <section className="mt-10 w-full md:h-[40%] h-auto bg-[#00283D]">
      <div className="w-full flex justify-between items-center">
        <div className="flex md:self-start  self-center">
          {" "}
          <Image
            src={onlineDocument}
            alt="onlineDocument"
            className="md:w-[80%] w-96 object-contain"
          />
        </div>

        <div className="text-[#D3E3FD] flex flex-col gap-4  p-4">
          <h2 className=" font-bold xl:text-2xl  lg:text-3xl md:text-2xl sm:text-xl text-sm text-center">
            Оюутны бүтээлийг <span className="text-[#3364C3]">нэг дороос</span>
          </h2>

          <p className="lg:text-[1rem]  md:text-[0.9rem] sm:text-[0.9rem] text-[0.6rem] md:leading-7 leading-4">
            Оюутны бүтээлийн мэдээллийг хялбар,
            <span className="font-bold pl-1">нэгдсэн байдлаар</span> харах,
            <br /> мөн өөрсдийн бүтээлээ оруулж бусдад хуваалцах боломжтой.
          </p>
        </div>

        <div className="sm:flex mt-20 self-end hidden">
          {" "}
          <Image
            src={addFiles}
            alt="onlineDocument"
            className="md:w-[80%] w-[75%] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Information;
