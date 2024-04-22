"use client";
import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { Button } from "../ui/moving-border";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RatingSize from "../Rate";
import { Textarea } from "@/components/ui/textarea";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";
import { createComment } from "@/api";
interface CommentType {
  name?: string;
  uuid?: string;
}

function CommentDialog({ name, uuid }: CommentType) {
  const [text, setText] = useState("");
  const [rateValue, setRateValue] = useState(1);
  return (
    <section className="">
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <Button
              borderRadius="1.5rem"
              className="text-white border-neutral-200 bg-[#00214D] cursor-pointer"
            >
              <div className="flex gap-2 items-center">
                <div className="font-bold ">Сэтгэгдэл бичих</div>
                <LuPencil />
              </div>
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md p-4">
          <DialogHeader>
            <DialogTitle>Сэтгэгдлээ үлдээнэ үү 🥳</DialogTitle>
            <DialogDescription>
              <div className="mt-1">{name} оюутны бүтээл</div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <div className="md:text-[15px] text-[12px]">
              <div>Хэдэн одоор үнэлмээр байна?</div>
              <div
                className="mt-1"
                onChange={(e: any) => {
                  setRateValue(e.target.defaultValue);
                }}
              >
                <RatingSize value={rateValue} size="size-large" />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:text-[15px]  text-[12px]">
              <div>Сэтгэгдлээ үлдээнэ үү?</div>

              <Textarea
                placeholder="Сайхан бичээд өг."
                inputText={text}
                inputSetText={setText}
              />
            </div>
            <div
              className="flex justify-center mt-3"
              onClick={async () => {
                if (!uuid || !text || !rateValue) {
                  toast.error("Бүх талбараа бөглөнө үү");
                  return "";
                } else {
                  const res = await createComment(uuid, text, rateValue);
                  if (res === "success") toast.success("Баярлалаа");
                }
              }}
            >
              <button className="bg-[#00214D] py-2 px-4 text-white  text-sm rounded-md flex items-center gap-1 hover:bg-opacity-90">
                <div>Илгээх</div>
                <IoIosSend className="text-[1rem]" />
              </button>
            </div>
          </div>

          <DialogFooter className="sm:justify-end ">
            <div className="text-[12px] text-[#a4a3a3]">Powered by Оожоо</div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default CommentDialog;
