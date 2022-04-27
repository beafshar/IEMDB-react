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
    // useEffect(() => {
    //     get_actor(id)
    //         .then(actor => {
    //             setActor(actor);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);

    useEffect(() => {
        console.log("here")
        // setLoading(true);
        get_actor(id)
            .then(res => {
                setActor(actor);
                // setMovies(res.data)
                // setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="row">
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
                        <dt dir="rtl">تاریخ تولد: {actor && actor.birthdate}</dt>
                        <dt dir="rtl">ملیت: {actor && actor.nationality}</dt>
                        <dt dir="rtl">تعداد فیلم: {actor && movies.length}</dt>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Actor;