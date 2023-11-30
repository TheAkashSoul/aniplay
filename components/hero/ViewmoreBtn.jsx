import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";


export default function ViewmoreBtn(){
    return(
        <Link href="" 
        className="flex flex-row items-center font-light text-sm text-[#adadaf] mx-4"> View more <span><FaAngleRight /></span></Link>
    )
}