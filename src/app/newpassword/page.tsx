"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUser } from "../../context/testContext";
import Input from "@/components/Input";
import Button from "@/components/Button";

import Link from "next/link";
import { changePassword, registerUser } from "@/api";

function NewPassword() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <>
        <div className="flex  min-h-screen flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
          <div className=" sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className=" px-6 py-12 shadow sm:rounded-lg sm:px-12 border">
              <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10">
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Нууц үгээ солих хэсэг
                </h2>
                <p className="mt-3">Бүртгэлтэй имайлаа оруулна уу?</p>
              </div>
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const res = await changePassword({ email });

                  if (res === "success") {
                    toast.success("Амжилттай имайлаа шалгана уу");
                    router.push("/login");
                  } else {
                    toast.error("Хэрэглэгчийн имайл буруу байна");
                  }
                }}
              >
                <Input
                  labelName="И-мэйл"
                  type="email"
                  inputState={email}
                  inputSetState={setEmail}
                />

                <Button
                  buttonType="submit"
                  buttonName="Илгээх"
                  loading={isLoading}
                />
              </form>
              <div className="flex gap-2 items-center mt-4 justify-center">
                <p className="text-[#484b4f] text-sm">Бүртгэлтэй юу?</p>
                <Link href="/login">
                  <div className="text-indigo-600">Нэвтрэх</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default NewPassword;
