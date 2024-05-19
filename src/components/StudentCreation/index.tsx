"use client";

import Input from "@/components/Input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import UploadVideo from "@/components/UploadVideo";
import UploadImage from "@/components/UploadImage";
import Button from "@/components/Button";
import { createStudentCreation } from "@/api";
import { toast } from "react-toastify";
import { Preview } from "../Preview";

function StudentCreation() {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [secondimage, setSecondimage] = useState<File | null>(null);
  const [thirdImage, setThirdImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([""]);
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState("");

  const handleInputChange = (index: any, value: any) => {
    const newInputs = [...links];
    newInputs[index] = value;
    setLinks(newInputs);
  };

  const handleAddInput = () => {
    setLinks([...links, ""]);
  };
  return (
    <section className="flex flex-col gap-10">
      <section className=" flex flex-col md:gap-10 mt-4 gap-2">
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Бүтээлийн тухай</h2>
          <Textarea
            placeholder="Бүтээлийн тухай бичнэ үү ..."
            inputText={text}
            inputSetText={setText}
          />
        </section>
        <div className="w-[50%]">
          <Input
            labelName="Бүтээлийн тухай түлхүүр үгс"
            type="text"
            inputState={key}
            inputSetState={setKey}
          />
        </div>

        <section className="flex flex-col gap-2">
          <h2 className="text-md font-bold">Бүтээлийнхээ холбоосыг оруулах</h2>
          <section className="md:w-full flex md:gap-4 gap-2 flex-wrap items-center w-[120%]">
            {links.map((input, index) => (
              <Input
                key={index}
                labelName={`Холбоос ${index + 1}`}
                type="text"
                inputState={input}
                inputSetState={(value) => handleInputChange(index, value)}
              />
            ))}
            <div
              className="flex self-end text-3xl text-indigo-600 cursor-pointer"
              onClick={handleAddInput}
            >
              <IoAddCircleOutline />
            </div>
          </section>
        </section>
        <section className="flex flex-row gap-12 items-center">
          <section className="flex flex-col gap-2 mt-4">
            <h2 className="text-md font-bold">Бүтээлийг зураг хэлбэрээр</h2>
            <p className="text-gray-400 text-sm">
              Анхааруулга: Хамгийн ихдээ 3 зураг оруулах боломтой шүү!!
            </p>
            <div className="flex md:gap-10 mt-4 gap-2 md:flex-row flex-col">
              <section className="flex gap-2">
                {" "}
                <UploadImage
                  label="Зураг1"
                  inputState={image}
                  inputSetState={setImage}
                />
                <UploadImage
                  label="Зураг2"
                  inputState={secondimage}
                  inputSetState={setSecondimage}
                />
                <UploadImage
                  label="Зураг3"
                  inputState={thirdImage}
                  inputSetState={setThirdImage}
                />
              </section>

              <div
                className="flex md:self-end mb-4 justify-center md:mt-0 mt-4"
                onClick={async () => {
                  if (
                    !text ||
                    !image ||
                    !secondimage ||
                    !thirdImage ||
                    !links
                  ) {
                    console.log("key: ", key);
                    toast.error("Бүх талбараа бөглөнө үү!");
                  } else {
                    setLoading(true);
                    const response = await createStudentCreation(
                      text,
                      links,
                      image!,
                      secondimage!,
                      thirdImage!,
                      key
                    );

                    if (response === "success") {
                      setLoading(false);
                      toast.success("Амжилттай бүртгэгдлээ");
                    }
                  }
                }}
              >
                <Button
                  buttonType="button"
                  buttonName="Мэдээллээ хадгалах"
                  loading={loading}
                ></Button>
              </div>
            </div>
          </section>
        </section>
      </section>

      <div
        className="flex items-center "
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {" "}
        <Button buttonName="Үүсгэсэн бүтээл урьдчилан харах "></Button>
      </div>

      {isOpen && (
        <div className="w-[120%]">
          {" "}
          <Preview
            text={text}
            firstImage={image}
            secondImage={secondimage}
            thirdImage={thirdImage}
          />
        </div>
      )}
    </section>
  );
}

export default StudentCreation;
