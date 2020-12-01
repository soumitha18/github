import { GET_FOLLOWERS_FAILURE, GET_FOLLOWERS_SUCCESS, GET_FOLLOWERS_REQUEST, GET_REPOSITORIES_FAILURE, GET_REPOSITORIES_SUCCESS, GET_REPOSITORIES_REQUEST } from "./actionTypes"

export const initState = {
    repositories: [],
    user: {},
    isLoading: false,
    err: "",
    followers: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_REPOSITORIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                err: ""
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
                err: action.payload
            }
        case GET_FOLLOWERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                err: ""
            }
        case GET_FOLLOWERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                followers: action.payload
            }
        case GET_FOLLOWERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        default:
            return state
    }
}

export default reducer;
