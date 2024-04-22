"use client";
import React, { useEffect, useState } from "react";
import { useRequest } from "ahooks";
import { getDocumentData } from "@/api";
import { Button } from "@/components/ui/moving-border";
import { LuPencil } from "react-icons/lu";
import ChartJS from "@/components/Chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocumentInfo from "@/components/DocumentInfo";
import { CardWithForm } from "@/components/Card";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import { FaInbox } from "react-icons/fa6";

function TeacherPanel() {
  const [teacherData, setTeacherData] = useState([]);
  const [filterTeacherData, setFilterTeacherData] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getDocumentData();
        result.filter((item: any) => {
          item.data.state === "verified";
        });
        setTeacherData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="text-[#34444B]">
      <Navbar />
      <section className="md:px-6 md:py-10 py-8 px-3">
        {" "}
        <h2 className="font-bold text-xl">Удирдсан багш</h2>
        <div className="mt-3 w-full h-[1px] bg-[#6B7280] mb-3"></div>
        <section className=" w-full flex flex-col">
          <section className="flex gap-6 lg:p-6  p-3">
            <div className="lg:w-[30%] w-[65%] text-white">
              <Input
                labelName="Багшийн нэрийг оруулна уу?"
                type="text"
                inputState={text}
                inputSetState={setText}
                command={true}
              />
            </div>

            <div
              className="flex mt-6"
              onClick={() => {
                const filterData = teacherData.filter((item: any) => {
                  return item.data.teacher.toLowerCase() === text.toLowerCase();
                });

                setFilterTeacherData(filterData);
              }}
            >
              <Button
                borderRadius="2rem"
                className="text-white border-neutral-200  cursor-pointer"
              >
                <div className="flex gap-2 items-center">
                  <div className="font-bold">Хайх</div>
                  <LuPencil />
                </div>
              </Button>
            </div>
          </section>
          <section className="flex flex-col gap-4 mt-4">
            {filterTeacherData.length === 0 ? (
              <section className="w-full flex justify-center items-center mt-20  flex-col gap-2">
                <FaInbox style={{ fontSize: "40px" }} />
                <p className="text-md">Илэрц байхгүй </p>
              </section>
            ) : (
              <section className="w-full flex lg:gap-8  mt-4 md:gap-4 md:flex-row flex-col-reverse items-center gap-10">
                <section className=" lg:px-8  lg:w-[60%] md:w-[60%] px-2 w-[%:%] ">
                  <Tabs defaultValue="creation">
                    <TabsList>
                      <TabsTrigger value="creation">
                        Шугаман графикаар харах
                      </TabsTrigger>
                      <TabsTrigger value="document">
                        Баганан графикаар харах
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="creation">
                      <ChartJS data={filterTeacherData} chartType="line" />
                    </TabsContent>
                    <TabsContent value="document">
                      <ChartJS data={filterTeacherData} chartType="bar" />
                    </TabsContent>
                  </Tabs>
                </section>
                <section className="lg:w-[40%] md:w-[55%] w-[80%]">
                  <CardWithForm type="teacher" cardData={filterTeacherData} />
                </section>
              </section>
            )}
          </section>

          {filterTeacherData.length > 0 && (
            <div className="px-4 mt-20 flex flex-col gap-4">
              <h1 className="font-bold">Бүх бичиг баримт</h1>
              <div className="mt-10">
                <DocumentInfo documentInfo={filterTeacherData} />
              </div>
            </div>
          )}
        </section>
      </section>
    </section>
  );
}

export default TeacherPanel;
