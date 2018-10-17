const initialState = {
    data: [],
    isError: false,
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_LOADING":
            return { ...state, isLoading: true, data: [] };
        case "LOGIN_SUCCESS":
            return { ...state, isLoading: false, data: action.payload };
        case "LOGIN_FAILURE":
            return { ...state, isLoading: false, isError: true };
        case "LOGIN_UPDATE":
            return { ...state, isLoading: false, data: action.payload };
        default:
            return state
    }
}

