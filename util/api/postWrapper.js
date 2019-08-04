export const POST = (url, data ,headers ) => {
    return fetch(url, {
        method: "POST", 
        headers: headers,
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
}

export const GET = (url, headers) => {
    return fetch(url, {
        method: "GET",
        headers: headers
    })
}