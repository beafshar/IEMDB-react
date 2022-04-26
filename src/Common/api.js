import axios from "axios";

const server = "http://localhost:8080"

export const login_api = (data) => {
    return axios.post(`${server}/login`, {...data});
}

export const signup_api = (data) => {
    return axios.post(`${server}/signup`, {...data});
}

export const get_movies = () => {
    return axios.get(`${server}/movies`)
}