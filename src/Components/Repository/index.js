import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { getRepo } from '../../Redux/actions'
import { Loading } from '../ExtraComponents/Loading'
import { PageNotFound } from '../ExtraComponents/PageNotFound'
import "./index.css"

export const Repository = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const { isLoading, repo, err } = useSelector(state => state.response)
    const history = useHistory()

    useEffect(() => {
        dispatch(getRepo(params.name, params.repo))
    }, [params, dispatch])

    const handleBack = () => {
        history.push(`/user/${params.name}`)
    }

    if (isLoading) return <Loading />

    if (err) return <PageNotFound />

    return (
        <>
            <div className="back">
                <button onClick={handleBack}>Back</button>
            </div>
            <div className="repo">
                <div>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1051/1051377.svg" alt="repositoryImage" width="200px" />
                </div>
                <div>
                    <small>Application</small>
                    <h1>{repo.name}</h1>
                    <p>{repo.description}</p>
                    <p>Create at : <b>{repo.created_at}</b></p>
                </div>
            </div>
        </>
    )
}
