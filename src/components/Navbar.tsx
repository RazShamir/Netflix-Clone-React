import { Result } from "../types";
import React, {FormEvent} from 'react'
import './navbar.css'
import * as z from 'zod'
import { useTitleSearch } from "../context/SearchContext";
import SearchIcon from '@mui/icons-material/Search';
const SearchForm = z.object({
    title: z.string().min(2, "Title must be atleast 2 characters long")
  })
  type SearchFormType = z.infer<typeof SearchForm>
  
export default function Navbar() {

    const { search } = useTitleSearch()

    async function submitSearch(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData.entries())
        try {
            const searchData = SearchForm.parse(data)
            search(searchData.title)
        } catch(e) {
          console.log(e)
        }
      }
    
    return <nav>
        <label className="logo">Netflix</label>
        <form onSubmit={submitSearch}>
        <input type="text" name="title" placeholder='enter title' />
        <button>
            <SearchIcon/>
        </button>
      </form>
    </nav>
}