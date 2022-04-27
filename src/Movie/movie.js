import './movie.css'
import '../Common/style.css'
import userlogo from '../Common/user.png';
import template from '../Common/template.png'
import React, {useEffect, useState} from "react";
import {
    get_movie_by_id,
    get_movie_actors,
    get_comments
} from '../Common/api'
import {useNavigate, useParams} from "react-router-dom";

function Movie() {
    const navigator = useNavigate();
    const [movie, setMovie] = useState(null);
    const [comments, setComments] = useState([]);
    const [actors, setActors] = useState([]);

    const { id } = useParams();

    function getMovie() {
        get_movie_by_id(id).then(response => {
            setMovie(response.data)
        })
            .catch(e => {
                console.log(e)
                console.log(e.response)
            })
    }

    function getActors() {
        get_movie_actors(id).then(response => {
            setActors(response.data)
        })
            .catch(e => {
                console.log(e)
                console.log(e.response)
            })
    }
    function getComments() {
        get_comments(id).then(response => {
            setComments(response.data)
        })
            .catch(e => {
                console.log(e)
                console.log(e.response)
            })
    }

    useEffect(() => {
        getMovie()
        getActors()
        getComments()
    }, [])

    return (

        <div className="header_avatar" style={movie && {backgroundImage: `url(${movie.coverImage})` }}>
            <div className="center">

                <div className="transparent_row first">
                    <div className="column">
                        <div className="row">
                            <div className="column">
                                <img className="image movie" src={movie && movie.image} alt="movie"/>
                            </div>
                            <div className="column">
                                <button className="button add_to_watchlist">افزودن به لیست</button>
                            </div>
                        </div>
                    </div>
                    <div className="column">

                        <dl>
                            <dt dir="ltr">{movie && movie.name}</dt>
                            <dt dir="rtl">کارگردان: {movie && movie.director}</dt>
                            <dt dir="rtl">نویسنده: {movie && movie.writers.toString()}</dt>
                            <dt dir="rtl">مدت زمان: {movie.duration}</dt>
                            <dt dir="rtl">تاریخ انتشار: {movie && movie.releaseDate}</dt>
                            <hr>
                                <dt dir="rtl">movie && movie.summary</dt>
                            </hr>

                        </dl>

                    </div>

                    <div className="column">
                        <div className="rectangle">
                            <header>8.8</header>
                            <span className="fa fa-star checked"></span>
                            <p>امتیاز کاربران: 8.2</p>
                            <p dir="rtl">(23 رای)</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>

)
}
export default Movie;