export const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(fetchDataApi())
        }, 2000)
    });
}


async function fetchDataApi() {
    let url = "https://api.github.com/repositories"
    const result  = fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(function (response) {
        return response.json()
    }).then(function (responeJson) {
        return responeJson
    })
        .catch((error) => {
            return error
        });
    return result
}