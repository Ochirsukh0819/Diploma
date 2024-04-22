import { SelectInputType } from "@/type";
import React, { ChangeEvent } from "react";

function SelectInput({
  labelName,
  options,
  inputState,
  inputSetState,
}: SelectInputType) {
  return (
    <section>
      <label className="mt-3 block text-sm font-medium leading-6 ]">
        {labelName}
      </label>
      <div className="mt-2">
        {" "}
        <select
          value={inputState}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const newValue = e.target.value;
            inputSetState(newValue);
          }}
          className="block w-full rounded-md border-0 py-2.5 px-1 text-[#8a91a0] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default SelectInput;
