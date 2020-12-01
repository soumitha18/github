import { GET_FOLLOWERS_REQUEST, GET_FOLLOWERS_SUCCESS, GET_FOLLOWERS_FAILURE, GET_REPOSITORIES_REQUEST, GET_REPOSITORIES_SUCCESS, GET_REPOSITORIES_FAILURE } from "./actionTypes"
import axios from "axios"

//actions to get the repositories of particular user name
export const getRepositoriesRequest = (payload) => ({
    type: GET_REPOSITORIES_REQUEST,
    payload
})

export const getRepositoriesSuccess = (payload) => ({
    type: GET_REPOSITORIES_SUCCESS,
    payload
})

export const getRepositoriesFailure = () => ({
    type: GET_REPOSITORIES_FAILURE
})

export const getRepositories = (username) => (dispatch) => {
    dispatch(getRepositoriesRequest(username))
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(res => dispatch(getRepositoriesSuccess(res.data)))
        .catch(() => dispatch(getRepositoriesFailure()))
}

//actions to get the followers list of the particular user
export const getFollowersRequest = () => ({
    type: GET_FOLLOWERS_REQUEST
})

export const getFollowersSuccess = (payload) => ({
    type: GET_FOLLOWERS_SUCCESS,
    payload
})

export const getFollowersFailure = () => ({
    type: GET_FOLLOWERS_FAILURE
})

export const getFollowers = (user) => (dispatch) => {
    dispatch(getFollowersRequest())
    axios.get(`https://api.github.com/users/${user}/followers`)
        .then(res => dispatch(getFollowersSuccess(res.data)))
        .catch(() => dispatch(getFollowersFailure()))
}