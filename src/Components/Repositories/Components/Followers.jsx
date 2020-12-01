import React from 'react'

export const Followers = ({ data, handleChangeUser }) => {
    console.log(data)
    return (
        <div className="followers">
            <div>
                <img src={data.avatar_url} alt="user" width="100px" />
            </div>
            <div>
                <h4 onClick={() => handleChangeUser(data.login)}>{data.login} <small>({data.type})</small></h4>
                <p>Id : <b>{data.id}</b></p>
            </div>
        </div>
    )
}
