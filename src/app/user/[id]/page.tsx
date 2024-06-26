"use client";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { GiCurledLeaf } from "react-icons/gi";
import { FaBox, FaInbox } from "react-icons/fa6";
import Documents from "@/components/Documents";
import Comments from "@/components/Comment";
import UserList from "@/components/UserList";
import CommentDialog from "@/components/CommentDialog";
import { getCommentId, getCreationId, getDocumentData } from "@/api";
import { useParams } from "next/navigation";
import StudentImage from "@/components/StudentImage";
import loadingImage from "@/assets/images/loading.gif";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function UserInformation() {
  const params = useParams<{ id: string }>();

  const [data, setData] = useState<any>(null);
  const [commentData, setCommentData] = useState<any>(null);
  const [documentData, setDocumentData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [url, setUrl] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const creationData = await getCreationId(params.id);
        const comment = await getCommentId(params.id);
        const result = await getDocumentData();
        const filterDocumentData = result.filter((item: any) => {
          return (
            item.data.studentId.toLowerCase() ===
            creationData.studentNumber.toLowerCase()
          );
        });
        const validString = creationData.link;

        const splitText = validString.split(",");

        setUrl(splitText);

        setData(creationData);
        setCommentData(comment);
        setDocumentData(filterDocumentData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  if (loading) {
    return (
      <section className="w-full h-screen flex justify-center items-center">
        <Image alt="loading" src={loadingImage} />
      </section>
    );
  }

  return (
    <section className="flex flex-col h-screen lg:gap-6 sm:gap-10 gap-60">
      <Navbar />
      <section className="w-full h-screen flex justify-between lg:px-36 md:px-10 px-4 mt-16 lg:gap-x-20 gap-x-8 ">
        <section className="lg:w-[50%] w-[100%] flex flex-col gap-3">
          <p className="text-sm text-[#484b4f]">Сайн уу </p>
          <div className="flex sm:flex-row  sm:justify-between sm:items-center flex-col gap-4">
            <h2 className="md:text-3xl text-2xl font-bold">
              {data.studentName}
            </h2>
            <CommentDialog name={data.studentName} uuid={params.id} />
          </div>
          <section className="flex flex-col gap-2 text-[14px] text-[#4d5053]">
            {url.map((link: any, index: any) => (
              <div key={index} className="flex gap-2 items-center">
                <GiCurledLeaf />
                <a
                  href={link}
                  className="cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link}
                </a>
              </div>
            ))}
          </section>

          <section className="flex flex-col gap-2 mt-4">
            <h2 className=" font-bold">Миний бүтээлийн тухай</h2>
            <p className="text-[#4d5053] text-wrap  md:text-[1rem] text-[0.9rem]">
              {data.text}
            </p>
          </section>
          <section className="lg:hidden flex w-[100%] mt-10">
            <StudentImage data={data} />
          </section>
          {
            <section className="mt-4 flex flex-col  gap-3 ">
              <h2 className="font-bold">Баримт бичиг</h2>
              {documentData.length > 0 ? (
                <section className="flex flex-row gap-6 ">
                  <Carousel className="w-[95%] ">
                    <CarouselContent>
                      {documentData.map((item: any) => (
                        <CarouselItem
                          key={item.id}
                          className="md:basis-1/4 lg:basis-1/6"
                        >
                          <Documents
                            id={item.id}
                            fileUrl={item.data.downloadUrl}
                            documentType={item.data.documentType}
                            title={item.data.title}
                            studentName={item.data.studentName}
                            studentId={item.data.studentId}
                            teacherName={item.data.teacher}
                            rate={item.data.rate}
                            year={item.data.year}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </section>
              ) : (
                <section className="w-full flex justify-center items-center mt-10  flex-col gap-2">
                  <FaInbox style={{ fontSize: "40px" }} />
                  <p className="text-md">Бичиг баримт байхгүй байна </p>
                </section>
              )}
            </section>
          }
        </section>
        <section className="lg:w-[30%] w-[40%] lg:flex flex-col  hidden">
          <StudentImage data={data} />
          <section className="flex flex-col gap-2">
            <h2 className="font-bold  mt-10">
              Бусад оюутны бүтээлийг сонирхоорой
            </h2>
            <div className="h-[55%] overflow-y-scroll mt-4">
              <UserList />
            </div>
          </section>
        </section>
      </section>
      <div className="w-full h-screen lg:mt-2 md:mt-20 sm:mt-40 mt-40 ">
        {" "}
        <Comments data={commentData} />
      </div>
    </section>
  );
}
export default UserInformation;
