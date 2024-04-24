import { InputType } from "@/type";
import React, { useState } from "react";
import { teacherjson } from "@/lib/utils";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function Input({
  labelName,
  type,
  inputState,
  inputSetState,
  isImage,
  command,
}: InputType) {
  const [query, setQuery] = useState("");
  const [ischeck, setIsCheck] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const filteredPeople =
    query === ""
      ? []
      : teacherjson.filter((person: any) => {
          return person.Багш_ажилтны_нэр
            .toLowerCase()
            .includes(query.toLowerCase());
        });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section>
      <div>
        <label className="block text-sm font-medium leading-6 text-black">
          {labelName}
        </label>
        <div className="">
          {type === "file" ? (
            <input
              onChange={(e: any) => {
                inputSetState(e.target.files![0]);
              }}
              name="recfile"
              type={type}
              accept={`${isImage === true ? "image/*" : "application/pdf"}`}
              className=" w-full p-3 cursor-pointer "
            />
          ) : command !== true ? (
            <section className="relative">
              <input
                onChange={(e) => {
                  inputSetState(e.target.value);
                }}
                value={inputState}
                id={labelName}
                name={labelName}
                type={
                  type === "password"
                    ? showPassword
                      ? "text"
                      : "password"
                    : type
                }
                autoComplete={labelName}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {type === "password" && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}{" "}
                </button>
              )}
            </section>
          ) : (
            <section>
              <input
                onChange={(e) => {
                  inputSetState(e.target.value);
                  setQuery(e.target.value);
                  setIsCheck(true);
                }}
                value={inputState}
                id={labelName}
                name={labelName}
                type={type}
                autoComplete={labelName}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {filteredPeople.length > 0 && (
                <div className="max-h-[120px] scroll-py-2 overflow-y-auto py-2 text-sm text-[#34444B] shadow-lg ">
                  {filteredPeople.length > 0 && ischeck ? (
                    filteredPeople.map((person: any) => (
                      <div
                        key={person.Багш_ажилтны_хувийн_дугаар}
                        className="cursor-pointer px-4 py-2 hover:text-white hover:bg-gray-800"
                        onClick={() => {
                          inputSetState(
                            `${person.Багш_ажилтны_овог.charAt(0)}.${
                              person.Багш_ажилтны_нэр
                            }`
                          );
                          setIsCheck(false);
                        }}
                      >
                        {`${person.Багш_ажилтны_овог.charAt(0)}.${
                          person.Багш_ажилтны_нэр
                        }`}
                      </div>
                    ))
                  ) : (
                    <p></p>
                  )}
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
