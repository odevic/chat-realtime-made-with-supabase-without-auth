"use client";

import { ComponentProps } from "react";

export default function Input({ toExcecute, ...rest }: ComponentProps<"input"> & { toExcecute?: any }) {
  return (
    <input
      type={rest?.type}
      minLength={rest?.minLength}
      maxLength={rest?.maxLength}
      value={rest?.value}
      placeholder={rest?.placeholder}
      onChange={(e) => {
        if (toExcecute) {
            toExcecute(e.target.value);
        }
      }}
      required={rest?.required}
      className={`${rest?.className} border-none outline-none focus:ring-4 flex h-10 w-full rounded-md bg-[#121216] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground ease transition-all ring-slate-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
    />
  );
}
    