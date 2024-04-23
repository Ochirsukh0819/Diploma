"use client";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import { ThreeDCardDemo } from "@/components/ThreeCard";
import Link from "next/link";
import RatingSize from "@/components/Rate";
import Thesis from "@/assets/images/Thesis-bro.svg";
import DocumentImage from "@/assets/images/Documents.svg";
import TeacheImage from "@/assets/images/Coding workshop-bro.svg";
import Gradition from "@/assets/images/graduation-bro.svg";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-cover bg-no-repeat bg-center">
      <Navbar />
      {/* bg-[url('../assets/images/bg_image.svg')]  */}
      <Main />
      <div className="w-full mt-20 flex lg:gap-12 gap-5 justify-center md:flex-row flex-col">
        <Link href="/teachers">
          <ThreeDCardDemo
            title="Багш"
            content="Муисийн багш нар"
            image={TeacheImage}
          />
        </Link>
        <Link href="/document">
          <ThreeDCardDemo
            title="Бичиг баримт"
            content="Тэнхимээс баталгаажсан бичиг баримт"
            image={DocumentImage}
          />
        </Link>
        <ThreeDCardDemo
          title="Оюутан"
          content="Оюутны бүтээлтэй танилцаарай"
          image={Gradition}
        />
      </div>
    </main>
  );
}
