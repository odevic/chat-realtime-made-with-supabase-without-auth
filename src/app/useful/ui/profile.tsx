
interface ProfileInterface {
    size: string,
    url: string,
    classname?: string
}

export default function ProfileImage({ size, url, classname }: ProfileInterface) {

    return (
        <div className={` ${classname} flex-shrink-0 bg-cover bg-center bg-no-repeat rounded-full`} style={{height: size, width: size, backgroundImage: `url(${url})`}}/>
    )
}