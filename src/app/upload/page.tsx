"use client";

import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentCreation from "@/components/StudentCreation";
import StudentDocument from "@/components/StudentDocument";

function Upload() {
  // const [data, setData] = useState<any>(null);
  // const { user } = useUser();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const creationData = await getStudentCreation();
  //       const filterData = creationData.filter((item: any) => {
  //         return item.userID === user?.uid;
  //       });
  //       setData(filterData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <section className="flex flex-col gap-4">
      <Navbar />
      <section className="w-full flex justify-center mt-10 flex-col gap-10 items-center">
        <Tabs defaultValue="creation" className="lg:w-[50%] md:w-[80%] w-[95%]">
          <TabsList>
            <TabsTrigger value="creation">Оюутны бүтээл</TabsTrigger>
            <TabsTrigger value="document">Оюутны баримт бичиг</TabsTrigger>
          </TabsList>
          <TabsContent value="creation">
            <StudentCreation />
          </TabsContent>
          <TabsContent value="document">
            <StudentDocument />
          </TabsContent>
        </Tabs>
      </section>
    </section>
  );
}

export default Upload;
