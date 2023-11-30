import Link from "next/link";

export default function Logo(){
    return(
        <div>
            <Link href="/" >
                <h1 className="font-bold text-[35px]" >
                    <span className="text-[#FFDD95]">ani</span>play
                </h1>
            </Link>
        </div>
    )
}