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

export const getRepositoriesFailure = (payload) => ({
    type: GET_REPOSITORIES_FAILURE,
    payload
})

export const getRepositories = (username) => (dispatch) => {
    dispatch(getRepositoriesRequest(username))
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

//actions to get the followers list of the particular user
export const getFollowersRequest = () => ({
    type: GET_FOLLOWERS_REQUEST
})

export const getFollowersSuccess = (payload) => ({
    type: GET_FOLLOWERS_SUCCESS,
    payload
})

export const getFollowersFailure = (payload) => ({
    type: GET_FOLLOWERS_FAILURE,
    payload
})

export const getFollowers = (url) => (dispatch) => {
    dispatch(getRepositoriesRequest())
    axios.get(url)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}