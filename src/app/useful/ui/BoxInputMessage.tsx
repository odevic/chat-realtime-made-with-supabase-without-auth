"use client";

import { useRef, useState } from "react"
import { FaRegImages } from "react-icons/fa"
import { IoSendSharp } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md"

interface BoxInput{
    placeholder: string,
    trigger: any,
    value?: string,
}

export default function BoxInputMessage({ value, trigger, placeholder }: BoxInput) {

    const valueRef = useRef<HTMLTextAreaElement | null>(null);

    return (
            <div className="bg-[#404048] flex justify-between items-center rounded-lg h-fit w-full">
                <div className="flex items-center justify-start w-full">
                    <label className="ml-2 opacity-60 text-sm font-sans">&gt;</label>
                    <textarea ref={valueRef} maxLength={2000} rows={1} className="resize-none bg-transparent w-full max-h-28 px-1 py-3 lg:max-h-96 h-[44px] border-none outline-none text-sm font-sans opacity-80" onChange={(e) => {
                }} placeholder={placeholder}/>
                </div>

                <div className="flex gap-3 mr-2">
                <button className="w-fit cursor-pointer flex-shrink-0 mx-2">
                <FaRegImages size={19} color="#c7c8d1"/>
                </button>

                <button onClick={() => {trigger(valueRef.current?.value)}} >
                <IoSendSharp size={19} color="#c7c8d1"/>
                </button>
                </div>
                
            </div>
    )
}