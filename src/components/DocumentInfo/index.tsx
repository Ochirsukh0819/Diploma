"use client";

import React, { useState, useEffect } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import SelectDemo from "@/components/Select";
import { DocumentInfoType } from "@/type";
import { CarouselSpacing } from "../Carousel";
import { calculateDocumentType, calculateOverlapsByYear } from "@/lib/utils";

function DocumentInfo({ documentInfo }: DocumentInfoType) {
  const [checkedId, setCheckedId] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(documentInfo);
  }, [documentInfo]);

  return (
    <section className="flex flex-col gap-4">
      <section className="w-full md:px-10 flex md:flex-row md:justify-between md:items-center flex-col-reverse md:gap-1 gap-6">
        <section className="flex gap-8 items-center">
          <div className="flex items-center space-x-2">
            <div>
              <Checkbox
                id="terms"
                className="bg-white text-black"
                checked={checkedId === "all"}
                onClick={() => {
                  setCheckedId("all");
                }}
              />
            </div>

            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Бүх мэдээллийг харах
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              className="bg-white text-black"
              checked={checkedId === "yearId"}
              onClick={() => {
                setCheckedId("yearId");
              }}
            />
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Жил жилээр харах
            </label>
          </div>
        </section>
        <section>
          <div className="flex items-end">
            <SelectDemo
              data={documentInfo}
              inputState={documentInfo}
              inputSetState={setData}
            />
          </div>
        </section>
      </section>
      {checkedId === "all" ? (
        <section className="md:mx-10 mx-8 mt-8">
          <section className="flex flex-col gap-8">
            {Array.from(calculateDocumentType(documentInfo)).map((item) => (
              <CarouselSpacing
                key={item}
                documentData={data}
                category={item}
                type="all"
              />
            ))}
          </section>
        </section>
      ) : (
        <section className="mx-10 mt-8">
          <section className="flex flex-col gap-8">
            {calculateOverlapsByYear(documentInfo).map(
              ([key, value], index) => (
                <div key={index}>
                  <CarouselSpacing
                    key={index}
                    documentData={data}
                    type="year"
                    year={key}
                  />
                </div>
              )
            )}
          </section>
        </section>
      )}
    </section>
  );
}

export default DocumentInfo;
