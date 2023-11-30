import Link from "next/link";
import ProfileBtn from "../navbar/ProfileBtn";

export default function CommentsCard(){
    return(
        
        <Link href="">
            <div className="bg-[#424245] rounded-lg p-4 overflow-hidden w-[300px] h-[250px]">

                <div className="flex flex-row gap-3">

                    <div>
                        <ProfileBtn />
                    </div>

                    <div className="flex flex-col">

                        <div className="text-sm">Name</div>
                        
                        <div className="text-[#888888] font-light text-xs"> - 4 minutes ago</div>

                    </div>

                </div>

                <div className="overflow-hidden h-[150px]">
                    <p className="h-auto line-clamp-6 text-[#F4F4F4] font-light text-base mt-2 px-2">Comments are available here cbubue huhnein eininnu euifnn ijijiejij vdveuunu uu breigejj jorgrkb ki9i98h9r rgkrigirkj 999r9j99 9 iit9iie00i 9r909ju 9ur9u9u9uj rnvnrijr jjf9j 99rjjr9 9j9br9j9jj 99rkwk9jb9u9</p>
                </div>

                <div className="mt-2 px-4 text-lg mb-2 font-bold text-[#FFDD95] overflow-hidden whitespace-nowrap overflow-ellipsis">
                    anime title vedijvjd kkvkk9 9kvjij
                </div>

            </div>
        </Link>
    )
}