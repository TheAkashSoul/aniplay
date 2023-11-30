import AnimeCard from "./hero/AnimeCard";
import Title from "./hero/Title";

export default function Trending({title}){
    return(
        <section className="bg-[#242428] w-[100%] flex flex-col pb-6">
            
            <div className="flex flex-row items-start justify-between pt-2 ">
                 <Title title="Trending" />
            </div>

            <div className="flex flex-row overflow-x-auto no-scrollbar">
                <div className="flex flex-row space-x-4 ">
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                </div>
            </div>
            
        </section>
    )
}