import React from "react";

import Image from "next/image";
import commentImage from "@/assets/images/comment.svg";
import { MeteorsDemo } from "../MeteorsDemo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CommentType {
  data: any;
}

function Comments({ data }: CommentType) {
  console.log("dta: ", data);
  return (
    <section className="mt-10 w-[100%]  bg-[#00283D]">
      <div className="w-full flex justify-between items-center p-2">
        <div className=" sm:flex flex-col px-6 hidden py-3">
          <h2 className="text-white text-2xl">Сэтгэгдлүүд</h2>{" "}
          <Image
            src={commentImage}
            alt="onlineDocument"
            className="w-[20rem]"
          />
        </div>
        <div className="flex p-4 sm:w-[80%] w-[100%] sm:mx-20 mx-10">
          {data !== undefined ? (
            <Carousel className="w-[100%] ">
              <CarouselContent>
                {data.map((item: any, index: any) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/4"
                  >
                    <div>
                      <MeteorsDemo
                        text={item.text}
                        rateValue={item.rateValue}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <p className="text-white w-full text-center text-2xl">
              Та сэтгэгдлээ үлдээх үү
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Comments;
