"use client";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { AiOutlineLike } from "react-icons/ai";
import { truncateText } from "@/lib/utils";
import { DocumentType } from "@/type";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";
import Button from "../Button";
import DialogComponent from "../Dialog";
import { calculateOverlapsByYear } from "@/lib/utils";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function Documents({
  id,
  fileUrl,
  documentType,
  branch,
  title,
  studentName,
  studentId,
  teacherName,
  rate,
  year,
}: DocumentType) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <section className="w-auto flex gap-4 cursor-pointer">
      <section className="flex flex-col gap-2">
        <BackgroundGradient className="w-full relative flex flex-col rounded-[12px]  bg-white dark:bg-zinc-900">
          <div className="min-w-full h-[100px] bg-[#509ba8] z-0 absolute top-0 rounded-t-[12px]"></div>
          <div className="flex flex-col gap-2 justify-center p-3 z-10">
            <div className="w-min shadow-md ml-2 ">
              <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} width={120} />
              </Document>
            </div>

            <div className="text-[#8a91a0] flex flex-col gap-1">
              <p className="text-[12px]">{documentType}</p>
              <h2 className="text-[12px]  font-bold">
                {" "}
                {truncateText(`${title}`, 18)}
              </h2>
              <p className="text-[11px] flex  justify-end">
                {truncateText(`${studentName} (${studentId})`, 25)}
              </p>
            </div>
            <div className="flex justify-between text-[#8a91a0] text-[12px]">
              <div className="flex items-center gap-1">
                <AiOutlineLike />
                <p>{rate}</p>
              </div>

              <p>{teacherName}</p>
            </div>
          </div>
        </BackgroundGradient>

        <div className="w-full flex justify-center md:ml-0  ml-3">
          <DialogComponent
            id={id}
            fileUrl={fileUrl}
            documentType={documentType}
            branch={branch}
            title={title}
            studentName={studentName}
            studentId={studentId}
            teacherName={teacherName}
            rate={rate}
            year={year}
          />
        </div>
      </section>
    </section>
  );
}

export default Documents;
