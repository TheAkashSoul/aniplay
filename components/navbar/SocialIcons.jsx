import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function SocialIcons(){
    return(
        <div className="flex gap-1 mx-4">
            <Link href="">
                <div 
                className="bg-[#6F85D5] h-[35px] w-[35px] rounded-full flex items-center justify-center text-lg">
                    <FaDiscord />
                </div>
            </Link>

            <Link href="">
                <div className="bg-[#0088CC] h-[35px] w-[35px] rounded-full flex items-center justify-center text-lg">
                    <FaTelegramPlane />
                </div>
            </Link>

            <Link href="">
                <div className="bg-[#FF3C1F] h-[35px] w-[35px] rounded-full flex items-center justify-center text-lg">
                    <FaRedditAlien />
                </div>
            </Link>

            <Link href="">
                <div className="bg-[#1D9BF0] h-[35px] w-[35px] rounded-full flex items-center justify-center text-lg">
                    <FaTwitter />
                </div>
            </Link>
        </div>
    )
}