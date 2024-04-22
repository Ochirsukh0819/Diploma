import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputText: string;
  inputSetText: React.Dispatch<React.SetStateAction<any>>;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, inputText, inputSetText, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] text-[13px] w-full rounded-md border border-input bg-background px-3 py-2  ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
        onChange={(event: any) => {
          inputSetText(event.target.value);
        }}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
