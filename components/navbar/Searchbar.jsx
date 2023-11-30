"use client"

import { useState } from "react"
import { IoSearch } from "react-icons/io5";

export default function Searchbar(){
    const [search, setSearch] = useState("");

    const searchAnime = (e) => {
        e.preventDefault()
        // console.log(search)
    }

    return(
        <form
        onSubmit={searchAnime}
        className="flex mx-6 items-center relative">
            <input 
            className="px-4 pr-9 h-10 max-w-xl text-black outline-none relative"
            type="text" placeholder="Search anime..." value={search} onChange={e => setSearch(e.target.value)} />
            <button className="text-black font-bold text-[23px] absolute right-2" type="submit"><IoSearch /></button>

        </form>
    )
}