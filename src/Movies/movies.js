import './movies.css'
import '../Common/style'
import '../Actor/actor'
import userlogo from '../Common/user.png';
import template from '../Common/template.png'
import React, {useEffect, useState} from "react";
import {get_movies} from '../Common/api'
import {useNavigate} from "react-router-dom";

function Movies() {
    const navigator = useNavigate();
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [searchBy, setSearchItem] = useState("");
    const [sortBy, setSortByItem] = useState("");

    useEffect(() => {
        get_movies()
            .then(res => {
                console.log(res.data)
                setMovies(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    });

    return (
        <div>
            <div className="topnav">
                <a href="#" className="align-left"><img className="align-left" src={template}
                                                        alt="logo"/></a>
                <div className="align-right">
                    <li className="dropdown">
                        <a href="#" className="align-right"><img className="align-left" src={userlogo}
                                                                 alt="user"/></a>
                        <div className="dropdown-content nav">
                            <a href="login.html">ورود</a>
                            <a href="signup.html">ثبت‌نام</a>
                        </div>
                    </li>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="rightalign">
                            <div className="dropdown search">
                                <div className="search-type">جستجو بر اساس
                                    <i className="fa">&#xf0d7;</i>
                                </div>
                                <div className="dropdown-content search">
                                    <a href="#">نام</a>
                                    <a href="#">ژانر</a>
                                    <a href="#">تاریخ تولید</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="searchBox">
                        <input class="searchInput" type="text"/>
                        <button class="searchButton">
                            <i class="material-icons mag">search</i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="column">
                    <div className="cards">
                        <ul>{
                            movies.length > 0 ? movies.map((item, index) => (
                                <li>
                                    <div className="container">
                                        <a href="movie.html">
                                            <img className="image" src={item.coverImage} alt="movie"
                                                 onClick={e => navigator(`/movies/${item.id}`)}/>
                                            <div className="overlay">{item.name}</div>
                                        </a>
                                    </div>
                                </li>
                            )) : null}


                        </ul>
                    </div>
                </div>
                <div className="column side">
                    <header dir="rtl">رتبه‌بندی بر اساس:</header>
                    <div className="box">
                        <dl>
                            <dt>
                                <button className="button filter" dir="rtl">تاریخ</button>
                            </dt>
                            <dt>
                                <button className="button filter" dir="rtl">امتیاز imdb</button>
                            </dt>


                        </dl>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Movies;