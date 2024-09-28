import { ComponentProps } from "react";

export default function Button({ children, ...rest }: ComponentProps<"button">) {

    return (
        <button disabled={rest.disabled} className={`${rest.className} inline-flex disabled:select-none font-sans items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#654ab5] text-[#654ab5]-foreground hover:bg-[#654ab5]/90 h-10 px-4 py-2 w-full`}>
            {children}
        </button>
    )
}