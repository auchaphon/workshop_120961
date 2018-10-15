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


export const getUserProfile = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(getUserProfileApi(data))
        }, 0)
    });
};

function getUserProfileApi(data) {
    if (data.username == "Auchaphon" && data.password == "P@ssw0rd") {
        return { data: { username: "auchaphon", email: 'auchaphon@gmail.com', telephone: "0982856576" } }
    } else {
        return "";
    }
}

