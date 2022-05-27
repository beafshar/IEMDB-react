import css from './movie.css'
import '../Common/style.css'
import React, {useEffect, useState} from "react";
import {
    add_movie_to_watchlist, check_login_api,
    comment_movie,
    dislike_comment,
    get_comments,
    get_movie_actors,
    get_movie_by_id, get_movies,
    like_comment, rate_movie
} from '../Common/api'
import {useNavigate, useParams} from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Movie() {
    const navigator = useNavigate();
    const [movie, setMovie] = useState(null);
    const [comments, setComments] = useState([]);
    const [actors, setActors] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);
    const [rateValue, setRateValue] = useState(0);

    useEffect(() => {
        check_login_api().then(res => {
            setUser(res.data)
            console.log(user)
        })
            .catch(err => {
                console.log(err);
            });
    }, [user]);

    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        getData();
        setLoading(false);
    }, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function getData() {
        get_movie_by_id(id)
            .then(res => {
                setMovie(res.data)
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

    function setNewCommentValue(e) {
        setNewComment(e.target.value)
    }

    function addComment(e) {
        e.preventDefault();
        comment_movie(id, newComment)
            .then(r => {
                setNewComment('')
                var f = document.forms.myForm;
                f.reset();
                getData()
            });
    }

    function likeComment(e) {
        like_comment(id, e)
            .then(r => {
                getData()
            });
    }

    function dislikeComment(e) {
        dislike_comment(id, e)
            .then(r => {
                getData()
            });
    }

    function rateMovie(value) {
        rate_movie(id, value)
            .then(r => {
                getData()
            });
    }

    return (
        <div>
            {loading ? (<div className="loader"></div>) :
                (<div>
                    <div className="header_avatar" style={movie && {backgroundImage: `url(${movie.coverImage})`}}>
                        <div className="center">
                            <div className="transparent_row first">
                                <div className={css.column}>
                                    <div className={css.row}>
                                        <div className={css.column}>
                                            <img className="image movie" src={movie && movie.image} alt="movie"/>
                                        </div>
                                        <div className={css.column}>
                                            { user &&
                                            <button className="button add_to_watchlist"
                                                    onClick={e => add_movie_to_watchlist(movie.id) && navigator("/watchlist")}>افزودن
                                                به لیست
                                            </button>}
                                        </div>
                                    </div>
                                </div>
                                <div className={css.column}>
                                    <dl>
                                        <dt dir="ltr">{movie && movie.name}</dt>
                                        <dt dir="rtl">کارگردان: {movie && movie.director}</dt>
                                        <dt dir="rtl">نویسنده: {movie && movie.writers.toString()}</dt>
                                        <dt dir="rtl">مدت زمان: {movie && movie.duration}</dt>
                                        <dt dir="rtl">تاریخ انتشار: {movie && movie.releaseDate}</dt>
                                        <dt dir="rtl">{movie && movie.summary}</dt>
                                    </dl>
                                </div>
                                <div className={css.column}>
                                    <div className="rectangle">
                                        <div className="textitle">{movie.imdbRate}</div>
                                        <br/>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating" defaultValue={movie && movie.rating} precision={0.5}
                                                    onChange={(e,newValue) => rateMovie(newValue)}/>
                                        </Stack>
                                        <div className="textin">امتیاز کاربران: {movie.rating}</div>
                                        <div className="textin"> ({movie.ratingCount} رای)</div>
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
                                {user &&
                                <div className="comment">
                                    <dl>
                                        <dt dir="rtl">دیدگاه خود را اضافه کنید.</dt>
                                        <form name="myForm">
                                            <input className="comment-text" type="text" id="comm"
                                                   onChange={e => setNewCommentValue(e)}/>
                                            <button className="button submit" onClick={e => addComment(e)}>ثبت</button>
                                        </form>
                                        <dt dir="rtl"/>
                                    </dl>
                                </div>}
                                {comments.length > 0 ? comments.map((item, index) => (
                                    <div className="comment">
                                        <dl>
                                            <dt dir="ltr">{item.userEmail}</dt>
                                            <dt dir="rtl">{item.text}</dt>
                                            <table>
                                                <tr>
                                                    <th>
                                                        <button className="like" onClick={e => likeComment(item.id)}>
                                                            <i className="fa fa-thumbs-o-up" aria-hidden="true"/>
                                                        </button>
                                                    </th>
                                                    <th>
                                                        <button className="dislike"
                                                                onClick={e => dislikeComment(item.id)}>
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
                </div>)}
        </div>
    )
}

export default Movie;