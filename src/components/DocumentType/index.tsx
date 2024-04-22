import * as React from "react";
import Documents from "../Documents";
import { useRequest } from "ahooks";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DocumentType } from "@/type";
import { getDocumentData } from "@/api";
import { documentType } from "@/lib/utils";
import { DocumensByDocumentType } from "@/type";

function DocumentType({ data, documentType }: DocumensByDocumentType) {
  return (
    <div className="flex flex-col gap-2">
      {" "}
      <h2>{documentType}</h2>
      <Carousel className="w-[95%]  mx-4">
        <CarouselContent className="">
          {data
            .filter((item: any) => {
              return item.data.documentType === "Диплом";
            })
            .map((item: any) => (
              <CarouselItem key={item.id} className="md:basis-1/4 lg:basis-1/5">
                <Documents
                  id={item.id}
                  fileUrl={item.data.downloadUrl}
                  documentType={item.data.documentType}
                  title={item.data.title}
                  studentName={item.data.studentName}
                  studentId={item.data.studentId}
                  teacherName={item.data.teacher}
                  rate={item.data.rate}
                />
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default DocumentType;
