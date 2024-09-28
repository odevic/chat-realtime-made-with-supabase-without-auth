"use client"

import { useEffect, useRef, useState } from "react"
import Header from "../useful/header/Header"
import BoxInputMessage from "../useful/ui/BoxInputMessage"
import BoxMessage from "../useful/ui/message"
import insertTable, { fetchTable, fetchTableEq } from "../services/table/service-table";
import supabase from "../supabase/supabase"
import getAuth from "../services/auth/service-auth"

interface messageHistoryInterface {
    username: string,
    message: string,
    image: string,
    id: number,
    email: string,
    profile: string,
    created_at: string
}

export default function Page() {

    const [messageHistory,setMessageHistory]=useState<Array<messageHistoryInterface | any>>([]);
    
    const containerMessageBox = useRef<null | HTMLDivElement>(null);

    function viewFocusInContainerMessageBox() {
       if(containerMessageBox.current) {
        containerMessageBox.current.scrollIntoView({ behavior: 'smooth' });
       }
    }

    // Function to post message

    async function postMessage(value: string) {
            const formData = {
                profile: localStorage.getItem('profile'),
                username: localStorage.getItem('username'),
                message: value ? value : '',
                image: '',
            }

            setMessageHistory(messageHistory => [
                ...messageHistory,
                formData
            ]);

            const reply = insertTable({ table: 'messages', data: formData})

            viewFocusInContainerMessageBox();
    }

    useEffect(() => {

        const channel = supabase
        .channel('public:your_table')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
          console.log('Change received!', payload);

          if(payload.new.username !== localStorage.getItem('username')) {
            setMessageHistory(messageHistory => [
                ...messageHistory,
                payload.new
                ]);
            viewFocusInContainerMessageBox()
          }
        })
        .subscribe();
      

        async function getAllMessages() {
           const $validate = getAuth();
           if($validate) {
            const res = await fetchTable({table: 'messages'});
              //  console.log(res);
              setMessageHistory(Array.isArray(res) ? res : [])
           }else{
            window.location.href = '/register#'    
           }
        };

        getAllMessages()

        return () => {
            channel.unsubscribe();
        }
    }, [])
    
    function returnMapMessage()
    {
        return messageHistory?.map((item, index) => (
            <BoxMessage username={item.username} message={item.message} image={item.image} profile={item.profile} created_at={''}/>
        ))
    }
    return (
        <main className="bg-[#2e2f38] relative h-screen flex flex-col items-center justify-between  w-full">
            <div className="w-full">
            <Header channel="general"/>
            <div className="w-full items-start max-h-boxChat pb-3 scroll-smooth no-scrollbar justify-start gap-2 overflow-auto flex-col flex">
                {returnMapMessage()}
            </div>
            </div>

            <section ref={containerMessageBox} className="w-full pb-5 px-3">
            <BoxInputMessage trigger={postMessage} placeholder="Send a message" />
            </section>
        </main>
    )
}