import axios from "axios";

const server = "http://localhost:8080"

export const login_api = ({username, password}) => {
    return axios.post(`${server}/login`, {username: username, password: password});
}