"use client";
import Information from "@/components/Information";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { getDocumentData } from "@/api";
import DocumentInfo from "@/components/DocumentInfo";
function Document() {
  const [documentData, setDocumentData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getDocumentData();
        const filterData = result.filter((item: any) => {
          return item.data.state === "verified";
        });
        setDocumentData(filterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="w-full h-screen">
      <Navbar />
      <section className="w-full">
        <Information />
      </section>
      <section className="md:p-6 ">
        <div className="px-4 mt-8 flex flex-col gap-4">
          <h1 className="text-[#00214D] md:text-xl text-lg font-medium">
            Бүх бичиг баримт
          </h1>
          <div className="md:mt-10 mt-4">
            <DocumentInfo documentInfo={documentData} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Document;
