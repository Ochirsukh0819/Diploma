import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectDemo {
  data: any;
  inputState: any;
  inputSetState: React.Dispatch<React.SetStateAction<any>>;
}

export default function SelectDemo({
  data,
  inputState,
  inputSetState,
}: SelectDemo) {
  const handleValueChange = (selectedValue: string | null) => {
    if (selectedValue === "all") {
      inputSetState(data);
      return "";
    }
    const filterData = inputState.filter((item: any) => {
      return item.data.keyword === selectedValue;
    });
    inputSetState(filterData);
  };
  return (
    <section>
      <Select onValueChange={handleValueChange}>
        <SelectTrigger className="w-[180px] text-black">
          <SelectValue placeholder="Түлхүүр үг" className="text-black" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Бүгд</SelectLabel>
            <SelectItem value="all">Бүгд</SelectItem>
            <SelectLabel>Хөгжүүлэлт</SelectLabel>
            <SelectItem value="Мобайл хөгжүүлэлт">Мобайл Хөгжүүлэлт</SelectItem>
            <SelectItem value="Веб хөгжүүлэлт">Веб Хөгжүүлэлт</SelectItem>

            <SelectLabel>Судалгааны ажил</SelectLabel>
            <SelectItem value="Судалгааны ажил">Судалгааны ажил</SelectItem>
            <SelectItem value="Машин сургалт">Машин сургалт</SelectItem>
            <SelectItem value="Системийн архитектур">
              Системийн архитектур
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
}
