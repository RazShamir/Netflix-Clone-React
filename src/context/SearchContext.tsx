import { createContext,useState,useContext } from "react";
import { Result } from "../types";
import { MoviesAPI } from "../service";

interface ISearchContext {
    results: Result[],
    search: (q: string) => void
}


const SearchContext = createContext<ISearchContext | null>(null)

type ProviderProps = {
    children: React.ReactNode
}

export const SearchContextProvider = ({ children } : ProviderProps) => {

  const [results, setResults] = useState<Result[]>([])
    async function search(q: string) {
        try {
            const response = await MoviesAPI.search(q)
            console.log(response)
            setResults(response.results)
        } catch(e) {
            console.log(e)
        }
    }

    return <SearchContext.Provider value={{ search, results}}>
        {children}
    </SearchContext.Provider>

}

export const useTitleSearch = () => {
    const context = useContext(SearchContext)
    if(!context) {
        throw new Error("Search context not provided")
    }
    return context
}