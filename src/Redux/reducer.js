import { GET_FOLLOWERS_FAILURE, GET_FOLLOWERS_SUCCESS, GET_FOLLOWERS_REQUEST, GET_REPOSITORIES_FAILURE, GET_REPOSITORIES_SUCCESS, GET_REPOSITORIES_REQUEST, GET_REPO_REQUEST, GET_REPO_SUCCESS, GET_REPO_FAILURE } from "./actionTypes"

export const initState = {
    repositories: [],
    user: {},
    isLoading: false,
    err: false,
    followers: [],
    isLoadingFollowers: false,
    repo: {}
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_REPOSITORIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                err: false
            }
        case GET_REPOSITORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                repositories: action.payload,
                user: action.payload[0].owner
            }
        case GET_REPOSITORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                err: true
            }
        case GET_FOLLOWERS_REQUEST:
            return {
                ...state,
                isLoadingFollowers: true,
                err: false
            }
        case GET_FOLLOWERS_SUCCESS:
            return {
                ...state,
                isLoadingFollowers: false,
                followers: action.payload
            }
        case GET_FOLLOWERS_FAILURE:
            return {
                ...state,
                isLoadingFollowers: false,
                err: true
            }
        case GET_REPO_REQUEST:
            return {
                ...state,
                isLoading: true,
                err: false,
                repo: {}
            }
        case GET_REPO_SUCCESS:
            return {
                ...state,
                repo: action.payload,
                isLoading: false
            }
        case GET_REPO_FAILURE:
            return {
                ...state,
                isLoading: false,
                err: true
            }
        default:
            return state
    }
}

export default reducer;
