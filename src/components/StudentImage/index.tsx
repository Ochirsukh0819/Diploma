import React from "react";
import Image from "next/image";
import addFiles from "@/assets/images/addFiles.svg";
import onlineDocument from "@/assets/images/onlineDocument.svg";

interface ImageType {
  data: any;
}

function StudentImage({ data }: ImageType) {
  return (
    <section className="w-full">
      <h2 className="font-bold">Бүтээлийн зураг</h2>

      <div className="w-full lg:grid lg:grid-cols-2  flex  items-center gap-4">
        {data.flattenedImageUrl.map((item: any, index: any) => (
          <div key={index} className={`lg:col-span-${index === 0 ? 2 : 1}`}>
            <img
              src={item}
              alt={`зураг ${index}`}
              className={`${
                index === 0
                  ? "lg:w-full lg:h-max sm:h-[15rem] w-max h-[12rem]"
                  : "lg:w-auto lg:h-auto w-max  sm:h-[15rem] h-[12rem]"
              } object-contain `}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default StudentImage;
