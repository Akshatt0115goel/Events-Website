import { SearchIcon } from "@heroicons/react/outline"
import { useState } from "react";
import {useRouter} from 'next/router'



const Search = () => {
    const [term, setTerm] = useState("");
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/events/search?term=${term}`)
        setTerm('')


    }
    return (
        
            <form onSubmit={handleSubmit}>
                <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <SearchIcon className="h-5"/>
                    </button>
                </span>
                <input type="text" name="q" value={term} onChange={(e) => setTerm(e.target.value)} className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." />
                </div>
            </form>
        
    )
}

export default Search
