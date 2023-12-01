import TitleList from "../components/TitleList";
import { useTitleSearch } from "../context/SearchContext";
import { Result } from "../types";
import React from 'react'

export default function Home() {

    const {results} = useTitleSearch()

    return <div>
        <TitleList titles={results} listTitle="Random"/>
        <TitleList titles={results} listTitle="Comedy"/>
    </div>
}