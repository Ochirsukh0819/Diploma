"use client";
import Input from "@/components/Input";
import React, { useState } from "react";
import { documentType, branch, keywords } from "@/lib/utils";
import Button from "@/components/Button";
import SelectInput from "@/components/SelectInput";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { createDocument } from "@/api";
import { toast } from "react-toastify";

function StudentDocument() {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([""]);
  const [file, setFile] = useState<File | null>(null);
  const [documentTypeOption, setDocumentTypeOption] = useState(
    documentType[0].value
  );
  const [branchOption, setBranchOption] = useState(branch[0].value);
  const [teacher, setTeacher] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [point, setPoint] = useState(0);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [keyword, setKeyword] = useState(keywords[0].value);

  return (
    <section className="mt-4">
      {" "}
      <section className="flex flex-col gap-2 mt-10">
        <h2 className="text-md font-bold">
          Бүтээлийн бичиг баримтаа оруулах хэсэг
        </h2>
        <p className="text-gray-400 text-sm">
          Анхааруулга: Тэнхим баталгаажуулсан тохиолдолд мэдээлэл оруулна.
        </p>
        <form
          encType="multipart/form-data"
          onSubmit={async (e) => {
            e.preventDefault();
            if (
              !file ||
              !documentTypeOption ||
              !teacher ||
              !branchOption ||
              !studentName ||
              !studentId ||
              !point ||
              !title
            ) {
              toast.error("Бүх талбараа бөглөнө үү!");
            } else {
              const rate = point + "%";

              const res = await createDocument(
                file,
                documentTypeOption,
                branchOption,
                teacher,
                studentName,
                studentId,
                title,
                rate,
                year,
                keyword
              );

              if (res === "success") toast.success("Амжилттай бүртгэгдлээ");
            }
          }}
        >
          <div className="mt-4 w-full grid md:grid-cols-3 md:gap-6 px-2 grid-cols-2 gap-4 ">
            <section className="flex flex-col gap-2 mt-3">
              <h2>Бичиг баримт</h2>
              <div className="relative">
                <div className="absolute lg:w-[200px] w-[140px] opacity-0  z-2 cursor-pointer rounded-md">
                  <Input
                    labelName="Бичиг баримт"
                    type="file"
                    inputState={file}
                    inputSetState={setFile}
                  />
                </div>
                <button
                  type="button"
                  className=" lg:w-[200px] w-[140px]   p-3 text-white bg-indigo-500 rounded-md"
                >
                  <div className="flex gap-2 items-center justify-center lg:text-lg text-[12px]">
                    {" "}
                    <p>Бичлэг оруулах</p>
                    <IoDocumentAttachOutline style={{ fontSize: "18px" }} />
                  </div>
                </button>
              </div>
            </section>

            <SelectInput
              labelName="Бичиг баримтын төрөл"
              options={documentType}
              inputState={documentTypeOption}
              inputSetState={setDocumentTypeOption}
            />
            <SelectInput
              labelName="Бүрэлдэхүүн сургууль"
              options={branch}
              inputState={branchOption}
              inputSetState={setBranchOption}
            />

            <Input
              labelName="Удирдагч багш"
              type="text"
              inputState={teacher}
              inputSetState={setTeacher}
              command={true}
            />
            <Input
              labelName="Оюутны нэр"
              type="text"
              inputState={studentName}
              inputSetState={setStudentName}
            />
            <Input
              labelName="Оюутны дугаар"
              type="text"
              inputState={studentId}
              inputSetState={setStudentId}
            />
            <Input
              labelName="Сэдэв"
              type="text"
              inputState={title}
              inputSetState={setTitle}
            />
            <Input
              labelName="Үнэлгээ"
              type="number"
              inputState={point}
              inputSetState={setPoint}
            />
            <Input
              labelName="Он"
              type="number"
              inputState={year}
              inputSetState={setYear}
            />
            <SelectInput
              labelName="Түлхүүр үг"
              options={keywords}
              inputState={keyword}
              inputSetState={setKeyword}
            />
          </div>
          <div className="mt-4 flex items-center justify-center ">
            <Button buttonType="submit" buttonName="Хадгалах" />
          </div>
        </form>
      </section>
    </section>
  );
}

export default StudentDocument;
