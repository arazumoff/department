import 'isomorphic-fetch'

const API_URL = 'http://localhost:8021/'

const callApi=(endpoint, params=null)=>{
    const fullUrl = (endpoint.indexOf(API_URL) === -1) ? API_URL + endpoint : endpoint;

    return fetch(fullUrl, params)
        .then(response =>
            response.json().then(json => ({ json, response }))
        ).then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            return json
        })
        .catch(error => {throw error});
}

export const fetchDepartments = () => callApi(`departments/`)
export const fetchEmployees = () => callApi(`employees/?_expand=department`)
export const updateDepartment = (item) => callApi(`departments/${item.id}/`, {
    method:'PUT',
    headers:{
       'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
})

export const updateEmployee = (item) => callApi(`employees/${item.id}/?_expand=department`, {
    method:'PUT',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
})