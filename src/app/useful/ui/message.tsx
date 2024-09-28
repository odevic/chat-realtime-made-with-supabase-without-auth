import ProfileImage from "./profile";


interface BoxMessageInterface {
    username: string,
    message: string,
    image: string,
    profile: string,
    created_at: string,
}

export default function BoxMessage({ username, message, image, profile, created_at }: BoxMessageInterface) {
    return (
        <section className="flex cursor-pointer gap-2 p-1 w-full hover:bg-[#32333b]">
            <div className="w-fit h-fit">
                <ProfileImage url={profile} size="30px"/>
            </div>

            <div className="flex-col flex items-start justify-center">
            <span className="font-medium opacity-90 font-sans text-base">{username}</span>
            <span className="font-sans opacity-80 text-base">{message}</span>
            
            {/* */}
            {image.includes('data:') && <div className="rounded-xl bg-cover bg-center bg-no-repeat w-full h-[280px]" style={{backgroundImage: `url(${image})`}}/>}
            {/* */}
            </div>
        </section>
    )
}