const initialState = {
    data: [],
    isError: false,
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_LOADING":
            return { ...state, isLoading: true, data: [] };
        case "FETCH_SUCCESS":
            return { ...state, isLoading: false, data: action.payload };
        case "FETCH_FAILURE":
            return { ...state, isLoading: false, isError: true };
        default:
            return state
    }
}

