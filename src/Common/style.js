import userlogo from './user.png';
import './style.css';
import template from './template.png'
import React, {useEffect, useState} from "react";
import {check_login_api} from "./api";
import {useNavigate} from "react-router-dom";

function NavBar() {
    const navigator = useNavigate();
    const [user, setUser] = useState(false);

    useEffect(() => {
        check_login_api().then(res => {
            setUser(res.data)
            console.log(res.data);
            console.log(user)
        })
            .catch(err => {
                console.log(err);
            });
    }, [user]);

    return (
        <div className="topnav">
            <a href="#" className="align-left"><img className="align-left" src={template} alt="logo"/></a>
            <div className="align-right">
                <li className="dropdown">
                    <a href="#" className="align-right"><img className="align-left" src={userlogo} alt="user"/></a>
                    <div className="dropdown-content nav">
                        {user ? (<a onClick={() => navigator(`/watchlist`)}>فیلم‌های من</a>) : (<a onClick={() => navigator(`/login`)}>ورود</a>)}
                        {user ? (<a onClick={() => navigator(`/logout`)}>خروج</a>) : (<a onClick={() => navigator(`/signup`)}>ثبت‌نام</a>)}
                    </div>
                </li>
            </div>
        </div>
    );
}

export default NavBar;