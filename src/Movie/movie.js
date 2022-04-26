import './movie.css'
import '../Common/style.css'
import userlogo from '../Common/user.png';
import template from '../Common/template.png'
import React, {useEffect, useState} from "react";
import {
    get_movies_by_id
} from '../Common/api'
import {useNavigate, useParams} from "react-router-dom";

function Movie() {

    const { id } = useParams()

}
export default Movie;