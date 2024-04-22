import React, { useState, useEffect } from "react";
import Documents from "../Documents";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselSpacingType } from "@/type";

export function CarouselSpacing({
  documentData,
  category,
  type,
  year,
}: CarouselSpacingType) {
  const [Isdata, setIsData] = useState(true);

  useEffect(() => {
    const filteredData = documentData.filter(
      (item: any) => item.data.documentType === category
    );
    const yearData = documentData.filter(
      (item: any) => item.data.year === year
    );

    if (filteredData.length === 0 && year === undefined) {
      setIsData(false);
    } else if (yearData.length === 0 && category === undefined) {
      setIsData(false);
    } else setIsData(true);
  }, [documentData, category, year]);

  return (
    <div className="w-min-full flex  flex-col gap-10">
      <div className="flex flex-col gap-2">
        {Isdata && (
          <>
            {type === "all" ? <h2>{category}</h2> : <h2>{year} он</h2>}
            <Carousel className="w-[95%] ">
              <CarouselContent>
                {documentData
                  .filter((item: any) => {
                    if (type === "all") {
                      return item.data.documentType === category;
                    } else if (type === "year") {
                      return item.data.year === year;
                    }
                  })
                  .map((item: any) => (
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
          </>
        )}
      </div>
    </div>
  );
}
