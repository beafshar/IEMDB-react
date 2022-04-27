import './movies.css'
import '../Common/style.css'
// import '../Actor/actor'
import userlogo from '../Common/user.png';
import template from '../Common/template.png'
import React, {useEffect, useState} from "react";
import {
    filter_movies_by_date,
    filter_movies_by_genre,
    filter_movies_by_name,
    get_movies,
    get_movies_date,
    get_movies_imdb
} from '../Common/api'
import {useNavigate} from "react-router-dom";

function Movies() {
    const navigator = useNavigate();
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [searchBy, setSearchItem] = useState("1");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        get_movies()
            .then(res => {
                setMovies(res.data)
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    function sort_by_imdb() {
        setLoading(true);
        get_movies_imdb()
            .then(res => {
                setMovies(res.data)
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function sort_by_date() {
        setLoading(true);
        get_movies_date()
            .then(res => {
                setMovies(res.data)
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function set_search_name() {
        setSearchItem("1");
    }

    function set_search_genre() {
        setSearchItem("2");
    }

    function set_search_date() {
        setSearchItem("3");
    }

    function search() {
        if (searchKey === "") {
            get_movies()
                .then(res => {
                    setMovies(res.data)
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                });
            return;
        }
        if (searchBy === "1") {
            filter_movies_by_name(searchKey)
                .then(res => {
                    setMovies(res.data)
                    setSearchKey("")
                })
                .catch(err => {
                    console.log(err);
                });
        }
        if (searchBy === "2") {
            filter_movies_by_genre(searchKey)
                .then(res => {
                    setMovies(res.data)
                    setSearchKey("")
                })
                .catch(err => {
                    console.log(err);
                });
        }
        if (searchBy === "3") {
            console.log(searchKey);
            filter_movies_by_date(searchKey)
                .then(res => {
                    setMovies(res.data)
                    setSearchKey("")
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

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
                            <a onClick={() => navigator(`/login`)}>ورود</a>
                            <a onClick={() => navigator(`/signup`)}>ثبت‌نام</a>
                        </div>
                    </li>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="rightalign">
                            <div className="dropdown search">
                                <select className="search-type">
                                    <option onClick={() => set_search_name()}>نام</option>
                                    <option onClick={() => set_search_genre()}>ژانر</option>
                                    <option onClick={() => set_search_date()}>تاریخ تولید</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="searchBox">
                        <form>
                            <input className="searchInput" value={searchKey} type="text"
                                   onChange={e => setSearchKey(e.target.value)}/>
                        </form>
                        <button type="submit">
                            <i class="material-icons mag" onClick={() => search()}>search</i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    {loading ? <div class="spinner-border text-danger" role="status"/> :
                        <div className="cards">
                            <ul>{
                                movies.length > 0 ? movies.map((item, index) => (
                                    <li>
                                        <div className="container">
                                            <a onClick={() => navigator(`/movies/${item.id}`)}>
                                                <img className="image" src={item.image} alt="movie"
                                                     />
                                                <div className="overlay">{item.name}</div>
                                            </a>
                                        </div>
                                    </li>
                                )) : null}
                            </ul>
                        </div>
                    }
                </div>
                <div className="column side">
                    <header dir="rtl">رتبه‌بندی بر اساس:</header>
                    <div className="box">
                        <dl>
                            <dt>
                                <button className="button filter" dir="rtl"
                                        onClick={() => sort_by_date()}>تاریخ
                                </button>
                            </dt>
                            <dt>
                                <button className="button filter" dir="rtl"
                                        onClick={() => sort_by_imdb()}>امتیاز imdb
                                </button>
                            </dt>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies;