"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import React, { useState, useEffect } from "react";
import { getStudentCreation } from "@/api";
import { useRequest } from "ahooks";
import Link from "next/link";
import { truncateText } from "@/lib/utils";

export function CommandDemo() {
  const [creationData, setCreationData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getStudentCreation();
        setCreationData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const filteredPeople =
    query === ""
      ? []
      : creationData.filter((item: any) => {
          return item.data.studentName
            .toLowerCase()
            .includes(query.toLowerCase());
        });
  const filteredId =
    query === ""
      ? []
      : creationData.filter((item: any) => {
          if (item.data.key !== undefined)
            return item.data.key.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput
        placeholder=" Бүтээлийн нэр / Оюутны нэрээр хайх"
        onChangeCapture={(e: any) => {
          setQuery(e.target.value);
        }}
      />
      <CommandList>
        <CommandEmpty>Хайлт олдсонгүй</CommandEmpty>
        <CommandGroup heading="Оюутны нэр">
          {filteredPeople.length > 0 ? (
            filteredPeople.map((item: any) => (
              <Link href={`/user/${item.id}`} key={item.id}>
                <CommandItem className="cursor-pointer px-4 py-2">
                  {item.data.studentName}
                </CommandItem>
              </Link>
            ))
          ) : (
            <p></p>
          )}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Бүтээлийн нэр">
          {filteredId.length > 0 ? (
            filteredId.map((item: any) => (
              <Link href={`/user/${item.id}`} key={item.id}>
                <CommandItem className="cursor-pointer px-4 py-2">
                  {truncateText(item.data.key, 25)}
                </CommandItem>
              </Link>
            ))
          ) : (
            <p></p>
          )}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
