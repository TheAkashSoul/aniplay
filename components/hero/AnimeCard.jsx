import Image from "next/image";
import Link from "next/link";
import { LuDot } from "react-icons/lu";


export default function AnimeCard(){
    return(
        <Link href="">
            <div className="flex flex-col mx-4 mt-4 w-[200px] cursor-pointer">
                <div className="">
                    <Image src={"https://cdn.myanimelist.net/images/anime/4/19644l.jpg"} 
                    width={200}
                    height={400}
                    alt="image" 
                    objectFit="cover" 
                    objectPosition="center" />
                </div>
                <div className="mt-2">
                    <h3 className="font-bold text-md overflow-hidden whitespace-nowrap overflow-ellipsis">Anime title ucusuduvud uudu </h3>
                    <div className="flex flex-row items-center font-light text-sm gap-2 mt-1 text-[#A1A1A1]">
                        <p className="flex flex-row items-center gap-2">TV <span className="font-bold text-lg"><LuDot /></span></p>
                        <p>24m</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}