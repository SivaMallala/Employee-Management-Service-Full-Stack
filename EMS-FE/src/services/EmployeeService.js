import axios from "axios"

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listemployess = () => {
    return axios.get(REST_API_BASE_URL);
}

export const addemploye = (employee) => {
    return axios.post(REST_API_BASE_URL,employee);
}

export const getemployee = (emploteeid) => {
    return axios.get(REST_API_BASE_URL + '/' + emploteeid)
}

export const updatteemployee = (emploteeid , employee) => {
    return axios.put(REST_API_BASE_URL + '/' + emploteeid , employee)
}

export const deleteemployee = (emploteeid) => {
    return axios.delete(REST_API_BASE_URL + '/' + emploteeid)
}