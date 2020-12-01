import { GET_FOLLOWERS_REQUEST, GET_FOLLOWERS_SUCCESS, GET_FOLLOWERS_FAILURE, GET_REPOSITORIES_REQUEST, GET_REPOSITORIES_SUCCESS, GET_REPOSITORIES_FAILURE, GET_REPO_REQUEST, GET_REPO_SUCCESS, GET_REPO_FAILURE } from "./actionTypes"
import axios from "axios"
import { loadData, saveData } from "./localStorage"

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
    let userData = loadData("users") || {}
    let result = userData[username]
    if (result) {
        dispatch(getRepositoriesSuccess(result))
    }
    else {
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then(res => {
                userData[username] = res.data
                saveData("users", userData)
                dispatch(getRepositoriesSuccess(res.data))
            })
            .catch(() => dispatch(getRepositoriesFailure()))
    }
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
    let userFollowers = loadData("followers") || {}
    let result = userFollowers[user]
    if (result) {
        dispatch(getFollowersSuccess(result))
    }
    else {
        axios.get(`https://api.github.com/users/${user}/followers`)
            .then(res => {
                userFollowers[user] = res.data
                saveData("followers", userFollowers)
                dispatch(getFollowersSuccess(res.data))
            })
            .catch(() => dispatch(getFollowersFailure()))
    }
}

//actions to get Individual Repository

export const getRepoRequest = () => ({
    type: GET_REPO_REQUEST
})

export const getRepoSuccess = (payload) => ({
    type: GET_REPO_SUCCESS,
    payload
})

export const getRepoFailure = () => ({
    type: GET_REPO_FAILURE
})

export const getRepo = (name, repo) => (dispatch) => {
    dispatch(getRepoRequest())
    let Repositories = loadData("Repositories") || {}
    let result = Repositories[`${name}/${repo}`]
    if (result) {
        dispatch(getRepoSuccess(result))
    }
    else {
        axios.get(`https://api.github.com/repos/${name}/${repo}`)
            .then(res => {
                Repositories[`${name}/${repo}`] = res.data
                saveData("Repositories", Repositories)
                dispatch(getRepoSuccess(res.data))
            })
            .catch(() => dispatch(getRepoFailure()))
    }
}