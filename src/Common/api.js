import axios from "axios";
const server = "http://localhost:8080"

export const login_api = (data) => {
    return axios.post(`${server}/login`, {...data});
}

export const logout_api = () => {
    return axios.get(`${server}/logout`);
}

export const check_login_api = () => {
    return axios.get(`${server}/login/check`);
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
export const get_actor = (id) => {
    id = String(id)
    return axios.get(`${server}/actors/${id}`)
}

export const get_actor_movies = (id) => {
    id = String(id)
    return axios.get(`${server}/actors/${id}/movies`)
}

export const get_movie_by_id = (id) => {
    return axios.get(`${server}/movies/${id}`)
}

export const get_movie_actors = (id) => {
    return axios.get(`${server}/movies/${id}/actors`)
}

export const add_movie_to_watchlist = (id) => {
    return axios.get(`${server}/movies/${id}/add_to_watchlist`)
}

export const rate_movie = (id, rating) => {
    return axios.post(`${server}/movies/${id}/rate/${rating}`)
}

export const get_comments = (id) => {
    return axios.get(`${server}/movies/${id}/comments`)
}

export const comment_movie = (id, comment) => {
    return axios.post(`${server}/movies/${id}/comment/${comment}`)
}

export const like_comment = (id, comment_id) => {
    return axios.get(`${server}/movies/${id}/${comment_id}/like`)
}

export const dislike_comment = (id, comment_id) => {
    return axios.get(`${server}/movies/${id}/${comment_id}/dislike`)
}

export const get_watchlist = () => {
    return axios.get(`${server}/watchlist`)
}

export const get_recommendations = () => {
    return axios.get(`${server}/watchlist/recommendations`)
}

export const delete_movie = (id) => {
    return axios.post(`${server}/watchlist/${id}`)
}

export const send_code_to_backend = (code) => {
    return axios.get(`${server}/callback/${code}`)
}