import { Result } from "../types";
import React from 'react'
import './title-list.css'

const toArray = (a: React.ReactNode[]) => React.Children.toArray(a)


type TitleListProps = {
    listTitle:string
    titles:  Result[]
}
export default function TitleList({ titles, listTitle} : TitleListProps) {

    return <div className="title-list-container">
        <h3>{listTitle}</h3>
        <div className="title-list">
        {toArray(titles.filter(title => title.primaryImage?.url).map(title => <div>
            {/*<p>{title.titleText.text}</p>*/}
            <img src={title.primaryImage?.url} className="title-list-image" />
        </div>))}
    </div>
    </div>
}