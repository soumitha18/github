import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { getRepositories } from "../../Redux/actions"
import { Loading } from '../ExtraComponents/Loading'
import { PageNotFound } from '../ExtraComponents/PageNotFound'
import "./index.css"

export const Repositories = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const { user, repositories, isLoading, err } = useSelector(state => state.response)

    useEffect(() => {
        dispatch(getRepositories(params.name))
    }, [params, dispatch])

    const handleBack = () => {
        history.push("/")
    }

    const handleGetFollowers = () => {
        history.push(`/followers/${user.login}`)
    }

    const handleChangeRepoPage = (item) => {
        history.push(`/repo/${user.login}/${item.name}`)
    }

    if (isLoading) return <Loading />

    if (err) return <PageNotFound />

    return (
        <div className="repoDiv">
            <div className="back">
                <button onClick={handleBack}>Back</button>
            </div>
            <div className="user">
                <div>
                    <img src={user.avatar_url} alt="userImage" width="200px" />
                    <h2>{user.login}</h2>
                    <button onClick={handleGetFollowers}>Followers</button>
                </div>
                <div>
                    <h2>Repositories ({repositories.length})</h2>
                    <div className="repositories">
                        {
                            repositories && repositories.map((item, index) =>
                                <div key={index}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
