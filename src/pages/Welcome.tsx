import { Link } from "react-router-dom";
import { Result } from "../types";
import React from 'react'
import './welcome.css'

export default function Welcome() {
    return <div className="welcome">
            <Link to={"/home"}>Explore</Link>
    </div>
}