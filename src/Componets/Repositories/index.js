import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { getRepositories } from "../../Redux/actions"

export const Repositories = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const { user, repositories, isLoading, err } = useSelector(state => state.response)
    console.log(user, repositories, isLoading, err)

    useEffect(() => {
        dispatch(getRepositories(params.name))
    }, [])

    return (
        <div>

        </div>
    )
}
