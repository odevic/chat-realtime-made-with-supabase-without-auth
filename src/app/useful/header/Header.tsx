import { FaUser } from "react-icons/fa";

interface InterfaceHeader {
    channel: string,
}

export default function Header({ channel }: InterfaceHeader) {
    
    return (
        <header className="bg-[#2e2f38] flex items-center justify-between shadow-md h-12 max-h-12 px-2 z-20 w-full mb-5">
            <span className="text-base font-medium font-sans opacity-70">#{channel}</span>
            
            <div className="flex justify-center items-center gap-1">
            <span className="w-[1px] block flex-shrink-0 bg-[#464a53] h-4 self-center"/>
            <button className="inline-flex disabled:select-none items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#464a53] h-10 w-10 rounded-full relative">
                <FaUser color="#c7c8d1" size={17}/>
            </button>

            </div>
        </header>
    )
}