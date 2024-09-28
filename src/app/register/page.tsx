"use client";

import Link from "next/link";
import Button from "../useful/buttons/Button";
import Input from "../useful/Input/Input";
import { FormEvent, useRef, useState } from "react";
import supabase from "../supabase/supabase";
import insertTable from "../services/table/service-table";
import ProfileImage from "../useful/ui/profile";
import ConvertImage64 from "../services/client/client";


export default function Page() {

    const [username,setusername]=useState('');
    const [profile, setprofile]=useState('https://avatars.githubusercontent.com/u/214020?s=40&v=4')

    const [loading,setloading]=useState(false);
    
    const inputRef = useRef<null | HTMLInputElement>(null)

    // Función para pasar de imagen a base64
    async function changeProfile(event: React.ChangeEvent<HTMLInputElement>){
        const res = await ConvertImage64(event);

        setprofile(res.src ? res.src : '');
    }

    // Función para entrar a cuenta
    async function handleForm(e: FormEvent) {
        e.preventDefault();

        if(username.length > 1 && profile !== '') {
            setloading(true);

            localStorage.setItem('profile', profile);
            localStorage.setItem('username', username);
            
            window.location.href = '/#'
            
            setloading(false)
            
        }
    }


    return (
        <section className="flex items-center justify-center bg-[#2e2f38] left-0 fixed top-0 w-full h-full">
            <form onSubmit={(e) => {handleForm(e)}} className="bg-[#22232a] sm:w-full sm:h-fit shadow-sm w-screen p-4 rounded-xl h-screen sm:max-w-[28rem]">
            <div className="flex flex-col py-1 pl-0 px-2 gap-1.5">
            <h2 className="self-center font-sans text-2xl font-semibold sm:self-start">Welcome Back!</h2>
            <p className="text-center text-sm font-sans opacity-80 sm:text-start">Create account and start chatting with strangers!</p>
            </div>

            <section className="space-y-4">

           <div className="space-y-2 flex-col flex items-center justify-center">

            {/* Input Image */}
            <div className="mt-2 -mb-3 w-[65px] overflow-hidden relative rounded-full h-[65px]">
            
            <button onClick={() => {inputRef.current?.click()}} className="opacity-0 hover:opacity-100 ease cursor-pointer absolute flex items-center justify-center text-xs font-sans left-0 top-0 w-full h-full bg-black/40">
            Upload
            <input onChange={(e) => changeProfile(e)} hidden ref={inputRef} type="file" accept="image/jpeg image/jpg image/png image/gif"/>
            </button>
            <ProfileImage url={profile} size="65px"/>
            </div>
            {/* Input Image */}
            
             {/* Inputs */}
             <div className="w-full">
                <label htmlFor="" className="opacity-80 font-sans text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Username</label>
                <Input value={username ? username : ''} toExcecute={setusername} className="!mt-0" placeholder="Username" minLength={2} type="text" required={true}/>
            </div>
             {/* Inputs */}
           </div>

            <Button disabled={loading}>
                Get Started
            </Button>

            </section>

            {/* <span className="text-xs mt-1 opacity-90">
            Already have an account?
                <Link href={'/login'} className="ml-1 text-[#a9a9ff]">
                Login!
                </Link>
            </span> */}
            </form>

        </section>
    )
}