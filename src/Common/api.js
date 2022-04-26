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

export const get_movies_imdb = () => {
    return axios.get(`${server}/movies/imdb`)
}

export const get_movies_date = () => {
    return axios.get(`${server}/movies/date`)
}

export const filter_movies_by_name = (name) => {
    return axios.get(`${server}/movies/filter_by_name/${name}`)
}

export const filter_movies_by_genre = (genre) => {
    return axios.get(`${server}/movies/filter_by_genre/${genre}`)
}

export const filter_movies_by_date = (date) => {
    date = String(date)
    return axios.get(`${server}/movies/filter_by_date/${date}`)
}