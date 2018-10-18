import { fetchData } from './apiFetching'
export const setAction = (actionName = '', payload = []) => {
    return {
        type: actionName,
        payload: payload
    };
};

export const setLogin = (data) => {
    return (dispatch) => {
        dispatch(setAction("LOGIN_LOADING"));
        getUserProfile(data)
            .then(result => {
                dispatch(setAction("LOGIN_SUCCESS", result));
            })
            .catch(error => {
                dispatch(setAction("LOGIN_FAILURE"))
            })
    }
}

export const getFetchData = () => {
    return (dispatch) => {
        dispatch(setAction("FETCH_LOADING"));
        fetchData()
            .then(result => {
                dispatch(setAction("FETCH_SUCCESS", result));
            })
            .catch(error => {
                dispatch(setAction("FETCH_FAILURE"))
            })
    }
}

export const updateUser = (data) => {
    return (dispatch) => {
        dispatch(setAction("LOGIN_UPDATE", data));
    }
}


export const getUserProfile = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(getUserProfileApi(data))
        }, 0)
    });
};

function getUserProfileApi(data) {
    if (data.username == "Auchaphon" && data.password == "P@ssw0rd") {
        return { username: "Auchaphon", email: 'auchaphon@gmail.com', telephone: "0982856576" }
    } else {
        return "";
    }
}

