import "./watchlist.css"
import "../Common/style.css"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import template from "../Common/template.png";
import userlogo from "../Common/user.png";
import {get_recommendations, get_watchlist} from "../Common/api";

function Watchlist() {
    const navigator = useNavigate();
    const [movies, setMovies] = useState([]);
    const [recommended_movies, setRecommendedMovies] = useState([]);

    function getData() {
        get_watchlist()
            .then(res => {
                setMovies(res.data)
            })
            .catch(e => {
                console.log(e)
            })
        get_recommendations()
            .then(res => {
                setRecommendedMovies(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <div>
            <div>{getData()}</div>
            <div className="topnav">
                <a href="#" className="align-left"><img className="align-left" src={template} alt="logo"/></a>
                <div className="align-right">
                    <li className="dropdown">
                        <a href="#" className="align-right"><img className="align-left" src={userlogo} alt="user"/></a>
                        <div className="dropdown-content nav">
                            <a onClick={() => navigator(`/login`)}>ورود</a>
                            <a onClick={() => navigator(`/signup`)}>ثبت‌نام</a>
                        </div>
                    </li>
                </div>
            </div>
            <div className="column">{
                movies.length > 0 ? movies.map((item, index) => (
                    <div className="row">
                        <div className="column side">
                            <div className="container">
                                <a onClick={() => navigator(`/movies/${item.id}`)}>
                                    <img className="image" src={item.image} alt="movie"/>
                                    <div className="overlay">{item.name}</div>
                                </a>
                            </div>
                        </div>
                        <div className="column">
                            {item.name}
                            <div className="row right">
                                <dl>
                                    <dt dir="rtl">امتیاز IMDB: {item.imdbRate}</dt>
                                    <dt dir="rtl">امتیاز کاربران: {item.rating}</dt>
                                </dl>
                            </div>
                        </div>
                        <div className="column">
                            <div className="align-right">
                                <a className="align-right"> <i className="gg-trash fa-10x"></i></a>
                            </div>
                            <div className="row right">
                                <dl>
                                    <dl>
                                        <dt dir="rtl">کارگردان: {item.director}</dt>
                                        <dt dir="rtl">ژانر: {item.genres}</dt>
                                        <dt dir="rtl">تاریخ انتشار: {item.releaseDate}</dt>
                                        <dt dir="rtl">مدت زمان: {item.duration} دقیقه</dt>
                                    </dl>
                                </dl>
                            </div>
                        </div>
                    </div>
                )) : null}
            </div>
            <div className="center">{
                recommended_movies.length > 0 ? recommended_movies.map((item, index) => (
                    <div className="movie_list item">
                        <div className="title">
                            <h2>فیلم‌های پیشنهادی</h2>
                        </div>
                        <div className="movie_list">
                            <div className="container">
                                <a onClick={() => navigator(`/movies/${item.id}`)}>
                                    <img className="image" src={item.image} alt="movie"/>
                                    <div className="overlay">{item.name}</div>
                                </a>
                            </div>
                        </div>
                    </div>
                )) : null}
            </div>
        </div>
    );
}

export default Watchlist;