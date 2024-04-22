"use client";
import React from "react";
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
import Search from "../Search";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { CommandDemo } from "../Command";

function SearchDialog() {
  return (
    <section>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            {/* {children} */}
            <Search />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div>
            {" "}
            <CommandDemo />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default SearchDialog;
