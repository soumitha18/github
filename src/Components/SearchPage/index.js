import React, { useState } from 'react'
import "./index.css"
import logo from "./github.jpg"
import { useHistory } from 'react-router'

export const SearchPage = () => {

    const [search, setSearch] = useState("")
    const history = useHistory()

    const handleSearchRepositories = () => {
        history.push(`/user/${search}`)
    }

    return (
        <div className="searchDiv">
            <h1>Search Your Repositories</h1>
            <div>
                <img src={logo} alt="Logo" width="500px" />
            </div>
            <div>
                <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search by your name" />
                <button onClick={handleSearchRepositories}>Search</button>
            </div>
        </div>
    )
}
