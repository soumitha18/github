import React from 'react'

export const Repos = ({ item, handleChangeRepoPage }) => {
    return (
        <div>
            <div>
                <img src="https://www.flaticon.com/svg/static/icons/svg/1051/1051377.svg" alt="repoImage" width="75spx" />
            </div>
            <div>
                <h5 onClick={() => handleChangeRepoPage(item)}>{item.name}</h5>
                <small>{item.description}</small>
            </div>
        </div>
    )
}
