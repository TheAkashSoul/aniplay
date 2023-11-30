import Image from "next/image";
import CommentsBtn from "./hero/CommentsBtn";
import CommentsCard from "./hero/CommentsCard";

export default function Comments({commentTitle}){
    return(
        <section className="bg-[#2F2F33] flex flex-col w-[100%] overflow-hidden pb-6">
           
                <div className="flex flex-row gap-8 mt-8 mb-8 mx-4">
                    <CommentsBtn commentTitle="Newest Comments" />
                    {/* <CommentsBtn commentTitle="Top Comments" /> */}
                </div>

                <div className="flex flex-row overflow-x-auto no-scrollbar">
                <div className="flex flex-row mx-8 gap-6 ">
                    <CommentsCard />
                    <CommentsCard />
                    <CommentsCard />
                    <CommentsCard />
                    <CommentsCard />
                    <CommentsCard />
                    <CommentsCard />
                </div>
                </div>
           

        </section>
    )
}