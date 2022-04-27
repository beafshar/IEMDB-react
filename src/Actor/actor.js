import './actor.css'
import '../Common/style.css'
import React, {useEffect, useLayoutEffect, useState} from "react";
import {
    get_actor, get_actor_movies
} from '../Common/api'
import {useNavigate, useParams} from "react-router-dom";

function Actor() {
    const navigator = useNavigate();
    const [movies, setMovies] = useState([]);
    const [actor, setActor] = useState(null);

    let {id} = useParams();

    function getActor() {
        get_actor(id)
            .then(res => {
                setActor(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        get_actor_movies(id)
            .then(res => {
                setMovies(res.data);
                console.log()
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="row">
            <div>{getActor()}</div>
            <div className="column side">
                <img src={actor && actor.image} alt="logo"/>
            </div>
            <div className="column middle">
                <div className="row top">
                    <header className="text-center" dir="rtl"> مشخصات بازیگر</header>
                </div>

                <div className="row right">
                    <dl>
                        <dt dir="rtl">نام:{actor && actor.name}</dt>
                        <dt dir="rtl">تاریخ تولد: {actor && actor.birthDate}</dt>
                        <dt dir="rtl">ملیت: {actor && actor.nationality}</dt>
                        <dt dir="rtl">تعداد فیلم: {actor && actor.numberOfMovies}</dt>
                    </dl>
                </div>
                <div className="center">
                    <div className="movie_list item">
                        <div className="title">
                            <h2>فیلم‌ها</h2>
                        </div>
                        <div className="transparent_row seccond">
                            <div className="movie_list">
                                {movies.length > 0 ? movies.map((item, index) => (
                                    <div className="container">
                                        <a onClick={() => navigator(`/movies/${item.id}`)}>
                                            <img className="image" src={item.image} alt="movie"/>
                                            <div className="overlay">{item.name}</div>
                                        </a>
                                    </div>
                                )) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Actor;