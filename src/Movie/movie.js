import './movie.css'
import '../Common/style.css'
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

    const {id} = useParams();

    function getData() {
        get_movie_by_id(id)
            .then(res => {
                setMovie(res.data)
                console.log(movie)
            })
            .catch(e => {
                console.log(e)
            })
        get_movie_actors(id)
            .then(response => {
                setActors(response.data)
            })
            .catch(e => {
                console.log(e)
                console.log(e.response)
            })
        get_comments(id)
            .then(response => {
                setComments(response.data)
            })
            .catch(e => {
                console.log(e)
                console.log(e.response)
            })
    }

    return (
        <div>
            <div>{getData()}</div>
            <div className="header_avatar" style={movie && {backgroundImage: `url(${movie.coverImage})`}}>
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
                                <dt dir="rtl">مدت زمان: {movie && movie.duration}</dt>
                                <dt dir="rtl">تاریخ انتشار: {movie && movie.releaseDate}</dt>
                                <dt dir="rtl">{movie && movie.summary}</dt>
                            </dl>
                        </div>
                        <div className="column">
                            <div className="rectangle">
                                <header>8.8</header>
                                <span className="fa fa-star checked"/>
                                <p>امتیاز کاربران: 8.2</p>
                                <p dir="rtl">(23 رای)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="center">
                <div className="movie_list item">
                    <div className="title">
                        <h2>بازیگران</h2>
                    </div>
                    <div className="movie_list actor">
                        {actors.length > 0 ? actors.map((item, index) => (
                            <div className="container">
                                <a onClick={() => navigator(`/actors/${item.id}`)}>
                                    <img className="image actor" src={item.image} alt="actor"/>
                                    <div className="overlay actor">{item.name}</div>
                                </a>
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>

            <div className="center">
                <div className="movie_list item">
                    <div className="title">
                        <h2>دیدگاه‌ها</h2>
                    </div>
                    <div className="transparent_row seccond">
                        <div className="comment">
                            <dl>
                                <dt dir="rtl">دیدگاه خود را اضافه کنید.</dt>
                                    <form>
                                        <input className="comment-text" type="text"/>
                                        <button className="button submit">ثبت</button>
                                    </form>
                                    <dt dir="rtl"/>
                            </dl>
                        </div>
                        {comments.length > 0 ? comments.map((item, index) => (
                            <div className="comment">
                                <dl>
                                    <dt dir="ltr">{item.userEmail}</dt>
                                        <dt dir="rtl">{item.text}</dt>
                                        <table>
                                            <tr>
                                                <th>
                                                    <button className="like">
                                                        <i className="fa fa-thumbs-o-up" aria-hidden="true"/>
                                                    </button>
                                                </th>
                                                <th>
                                                    <button className="dislike">
                                                        <i className="fa fa-thumbs-o-down" aria-hidden="true"/>
                                                    </button>
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>{item.likes}</td>
                                                <td>{item.dislikes}</td>
                                            </tr>
                                        </table>
                                </dl>
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;