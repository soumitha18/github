import React from 'react'
import { useHistory } from 'react-router'

export const PageNotFound = () => {

    const history = useHistory()

    const handleBack = () => {
        history.push("/")
    }
    return (
        <div style={{ textAlign: "center", margin: "5%" }}>
            <h1 style={{ color: "grey" }}>PageNotFound</h1>
            <button style={{ background: "grey", border: "1px solid grey", color: "white", padding: "5px 20px", borderRadius: "10px" }} onClick={handleBack}>Back</button>
        </div>
    )
}
