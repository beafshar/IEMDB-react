import './movies.css'
import '../Common/style'
import '../Actor/actor'
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
                                        <div className="overlay">item.id</div>
                                    </a>
                                </div>
                            </li>
                            )) : null}


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies;