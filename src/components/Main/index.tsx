"use client";
import Image from "next/image";
import React from "react";
import Thesis from "@/assets/images/thesis.svg";
import { AiOutlineSearch } from "react-icons/ai";
import SearchDialog from "../SearchDiaolog";
import ButtonDialog from "../ButtonDialog";
import Link from "next/link";

function Main() {
  return (
    <div className="flex md:flex-row md:justify-around items-center lg:px-20 gap-3  md:mt-5 flex-col px-3 md:px-5 mt-8">
      <section className="md:w-[45%] flex flex-col w-[90%] justify-center px-3">
        <section className="flex flex-col gap-5">
          <h1 className="text-black font-bold xl:text-4xl  lg:text-3xl md:text-2xl text-2xl">
            Оюутны бүтээлийн бичиг баримт болон бусад бүтээлийг{" "}
            <span className="text-[#245BFF]">нэг дороос</span>
          </h1>
          <p className="lg:text-[1rem] text-[#34444B] text-[0.9rem] ">
            Оюутны бүтээлийн мэдээллийг хялбар,
            <span className="font-bold pl-1">нэгдсэн байдлаар</span> харах, мөн
            өөрсдийн бүтээлээ оруулж бусдад хуваалцах боломжтой.
          </p>
          <Link href="/document">
            <div className="mt-3">
              <button className="border-2 border-white/20 text-white bg-[#3364C3] font-semibold text-sm w-fit  flex flex-row items-center gap-2 cursor-pointer rounded-xl  md:py-[0.6rem] md:px-[1rem] md:text-[1.2rem] py-[0.5rem] px-[1.2rem] text-[1.2rem] hover:bg-opacity-90">
                <p className="text-white font-bold md:text-[1rem] text-[1.2rem]">
                  Оюутны баримт бичиг
                </p>
              </button>
            </div>
          </Link>
          <p>Эсвэл</p>
          <div>
            <ButtonDialog />
          </div>
        </section>
      </section>

      <section className="">
        <Image
          src={Thesis}
          alt="thesis"
          className="md:w-96 lg:w-max xl:h-[35rem] md:h-[30rem] h-[25rem] w-max object-contain "
        />
      </section>
    </div>
  );
}

export default Main;
