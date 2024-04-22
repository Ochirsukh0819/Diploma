"use client";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { GiCurledLeaf } from "react-icons/gi";
import { FaInbox } from "react-icons/fa6";
import Documents from "@/components/Documents";
import Comments from "@/components/Comment";
import UserList from "@/components/UserList";
import CommentDialog from "@/components/CommentDialog";
import { getCreationId } from "@/api";
import { useUser } from "@/context/testContext";
import { useParams } from "next/navigation";
import StudentImage from "@/components/StudentImage";
import { CarouselSpacing } from "@/components/Carousel";

interface PreviewType {
  text: string;
  firstImage: File | null;
  secondImage: File | null;
  thirdImage: File | null;
}

export function Preview({
  text,
  firstImage,
  secondImage,
  thirdImage,
}: PreviewType) {
  console.log("fileUrl: ", firstImage);
  const imageUrl = firstImage ? URL.createObjectURL(firstImage) : "";
  const secondImageUrl = secondImage ? URL.createObjectURL(secondImage) : "";
  const thirdImageUrl = thirdImage ? URL.createObjectURL(thirdImage) : "";

  const { user } = useUser();
  return (
    <section className="w-full h-screen flex justify-between  gap-x-8  mt-20 lg:px-0 sm:px-16">
      <section className="lg:w-[50%] w-[95%] flex flex-col gap-3">
        <p className="text-sm text-[#484b4f]">Сайн уу </p>
        <div className="flex sm:flex-row  sm:justify-between sm:items-center flex-col gap-4">
          <h2 className="md:text-3xl text-2xl font-bold">{user?.userName}</h2>
          {/* <CommentDialog name={user?.userName} /> */}
        </div>
        <section className="flex flex-col gap-2 text-[14px] text-[#4d5053]">
          <div className="flex gap-2 items-center">
            <FaGithub />
            <a
              href="https://github.com/Ochirsukh0819"
              className="cursor-pointer"
            >
              https://github.com/Ochirsukh0819
            </a>
          </div>
          <div className="flex gap-2 items-center ">
            <GiCurledLeaf />
            <a
              href="https://github.com/Ochirsukh0819"
              className="cursor-pointer"
            >
              https://github.com/Ochirsukh0819
            </a>
          </div>
        </section>
        <section className="flex flex-col gap-2 mt-4">
          <h2 className=" font-bold">Миний бүтээлийн тухай</h2>
          <p className="text-[#4d5053] text-wrap  md:text-[1rem] text-[0.9rem]">
            {text}
          </p>
        </section>
        <section className="lg:hidden flex w-[100%] mt-10">
          <section className="w-full">
            <h2 className="font-bold">Бүтээлийн зураг</h2>

            <div className="w-full lg:grid lg:grid-cols-2  flex  items-center gap-4">
              <div className="lg:col-span-2 ">
                <img
                  src={imageUrl}
                  alt="zurag1"
                  className="lg:w-full lg:h-max sm:h-[15rem] w-max h-[12rem] object-contain"
                />
              </div>
              <div className="lg:col-span-1 ">
                <img
                  src={secondImageUrl}
                  alt="zurag1"
                  className="lg:w-auto lg:h-auto w-max  sm:h-[15rem] h-[12rem] object-contain"
                />
              </div>
              <div className="lg:col-span-1 ">
                <img
                  src={thirdImageUrl}
                  alt="zurag1"
                  className="lg:w-auto lg:h-auto w-max  sm:h-[15rem] h-[12rem] object-contain"
                />
              </div>
            </div>
          </section>
        </section>
        <section className="mt-4 flex flex-col  gap-3">
          <h2 className="font-bold">Баримт бичиг</h2>
          <section className="flex flex-row gap-6 ">
            <Documents
              id="1"
              fileUrl="https://storage.googleapis.com/diplomaadmin-a41c3.appspot.com/documents/%C3%90%C2%A5.%20%C3%90%C2%9E%C3%91%C2%87%C3%90%C2%B8%C3%91%C2%80%C3%91%C2%81%C3%92%C2%AF%C3%91%C2%85%20-%20Worki%20CV.pdf?GoogleAccessId=firebase-adminsdk-v6ryy%40diplomaadmin-a41c3.iam.gserviceaccount.com&Expires=1723996800&Signature=xuT31OOp0OM%2FMvXAd6c4VRjM1BCKzzk4Efi7EA%2BCfkFuFwXMZutRcWG1BkI5WwX1nBlC0cPKfuLG%2BinPMhrRdkazoTSVLGWN4TGtYLZv8LOHkCuBkEqSc2gLS70crha2nYlQNJA5xdBkhPhFVo1S6PbpEW3bxxd1Y2nO2bxKK%2BNbrRa1FHyufJZE7sE3ILWwUNrZX710T7k5Qdnr1SCUZ0f5yqEqDIaulELwi0FLvy14%2FFK5BhCmzHbSy1vqfmI0nJpMEfg8nfKQ%2BgbnlpV6suc76g7qS2ifZZBH1Y4yQEgmK4ZgVsgcnc9rAtm4n7oqOqUl1tT2Azze8xJwE36lig%3D%3D"
              documentType="oojoo"
              title="oojoo"
              studentName="oojoo"
              studentId="oojoo"
              teacherName="oojoo"
              rate="oojoo"
              layout="vertical"
            />
            <Documents
              id="1"
              fileUrl="https://storage.googleapis.com/diplomaadmin-a41c3.appspot.com/documents/%C3%90%C2%A5.%20%C3%90%C2%9E%C3%91%C2%87%C3%90%C2%B8%C3%91%C2%80%C3%91%C2%81%C3%92%C2%AF%C3%91%C2%85%20-%20Worki%20CV.pdf?GoogleAccessId=firebase-adminsdk-v6ryy%40diplomaadmin-a41c3.iam.gserviceaccount.com&Expires=1723996800&Signature=xuT31OOp0OM%2FMvXAd6c4VRjM1BCKzzk4Efi7EA%2BCfkFuFwXMZutRcWG1BkI5WwX1nBlC0cPKfuLG%2BinPMhrRdkazoTSVLGWN4TGtYLZv8LOHkCuBkEqSc2gLS70crha2nYlQNJA5xdBkhPhFVo1S6PbpEW3bxxd1Y2nO2bxKK%2BNbrRa1FHyufJZE7sE3ILWwUNrZX710T7k5Qdnr1SCUZ0f5yqEqDIaulELwi0FLvy14%2FFK5BhCmzHbSy1vqfmI0nJpMEfg8nfKQ%2BgbnlpV6suc76g7qS2ifZZBH1Y4yQEgmK4ZgVsgcnc9rAtm4n7oqOqUl1tT2Azze8xJwE36lig%3D%3D"
              documentType="oojoo"
              title="oojoo"
              studentName="oojoo"
              studentId="oojoo"
              teacherName="oojoo"
              rate="oojoo"
              layout="vertical"
            />
            <Documents
              id="1"
              fileUrl="https://storage.googleapis.com/diplomaadmin-a41c3.appspot.com/documents/%C3%90%C2%A5.%20%C3%90%C2%9E%C3%91%C2%87%C3%90%C2%B8%C3%91%C2%80%C3%91%C2%81%C3%92%C2%AF%C3%91%C2%85%20-%20Worki%20CV.pdf?GoogleAccessId=firebase-adminsdk-v6ryy%40diplomaadmin-a41c3.iam.gserviceaccount.com&Expires=1723996800&Signature=xuT31OOp0OM%2FMvXAd6c4VRjM1BCKzzk4Efi7EA%2BCfkFuFwXMZutRcWG1BkI5WwX1nBlC0cPKfuLG%2BinPMhrRdkazoTSVLGWN4TGtYLZv8LOHkCuBkEqSc2gLS70crha2nYlQNJA5xdBkhPhFVo1S6PbpEW3bxxd1Y2nO2bxKK%2BNbrRa1FHyufJZE7sE3ILWwUNrZX710T7k5Qdnr1SCUZ0f5yqEqDIaulELwi0FLvy14%2FFK5BhCmzHbSy1vqfmI0nJpMEfg8nfKQ%2BgbnlpV6suc76g7qS2ifZZBH1Y4yQEgmK4ZgVsgcnc9rAtm4n7oqOqUl1tT2Azze8xJwE36lig%3D%3D"
              documentType="oojoo"
              title="oojoo"
              studentName="oojoo"
              studentId="oojoo"
              teacherName="oojoo"
              rate="oojoo"
              layout="vertical"
            />
          </section>
        </section>
      </section>
      <section className="lg:w-[30%] w-[40%] lg:flex flex-col  hidden">
        <section className="w-full">
          <h2 className="font-bold">Бүтээлийн зураг</h2>

          <div className="w-full lg:grid lg:grid-cols-2  flex  items-center gap-4">
            <div className="lg:col-span-2 ">
              <img
                src={imageUrl}
                alt="zurag1"
                className="lg:w-full lg:h-max sm:h-[15rem] w-max h-[12rem] object-contain"
              />
            </div>
            <div className="lg:col-span-1 ">
              <img
                src={secondImageUrl}
                alt="zurag1"
                className="lg:w-auto lg:h-auto w-max  sm:h-[15rem] h-[12rem] object-contain"
              />
            </div>
            <div className="lg:col-span-1 ">
              <img
                src={thirdImageUrl}
                alt="zurag1"
                className="lg:w-auto lg:h-auto w-max  sm:h-[15rem] h-[12rem] object-contain"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="font-bold  mt-4">
            Бусад оюутны бүтээлийг сонирхоорой
          </h2>
          <div className="h-[30%] overflow-y-scroll mt-10">
            <UserList />
          </div>
        </section>
      </section>
    </section>
  );
}
