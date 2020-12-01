import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { getFollowers, getRepositories } from "../../Redux/actions"
import { Loading } from '../ExtraComponents/Loading'
import { PageNotFound } from '../ExtraComponents/PageNotFound'
import { Followers } from './Components/Followers'
import { Repos } from './Components/Repos'
import "./index.css"

export const Repositories = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const [followersState, setFollowersState] = useState(false)

    const { user, repositories, isLoading, err, followers, isLoadingFollowers } = useSelector(state => state.response)

    useEffect(() => {
        dispatch(getRepositories(params.name))
    }, [params, dispatch])

    const handleBack = () => {
        history.push("/")
    }

    const handleChangeUser = (user) => {
        history.push(`/user/${user}`)
        setFollowersState(false)
    }

    const handleGetFollowers = () => {
        if (!followersState)
            dispatch(getFollowers(params.name))
        setFollowersState(!followersState)
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
                    <button onClick={handleGetFollowers}>{followersState ? "Repositories" : "Followers"}</button>
                </div>
                <div>
                    {
                        followersState ?
                            <>
                                {
                                    isLoadingFollowers ? <Loading />
                                        :
                                        <>
                                            <h2>Followers ({followers.length})</h2>
                                            <div>
                                                {
                                                    followers && followers.map((item, index) => <Followers key={index} data={item} handleChangeUser={handleChangeUser} />)
                                                }
                                            </div>
                                        </>
                                }
                            </>
                            :
                            <>
                                <h2>Repositories ({repositories.length})</h2>
                                <div className="repositories">
                                    {
                                        repositories && repositories.map((item, index) => <Repos key={index} item={item} handleChangeRepoPage={handleChangeRepoPage} />)
                                    }
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}
