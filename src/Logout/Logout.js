import {useEffect, useState} from "react";
import {login_api, logout_api} from "../Common/api";
import {useNavigate} from "react-router-dom";


function Logout() {
    const navigator = useNavigate();

   useEffect(() => {
       logout_api()
           .then(() => {
               navigator("/login");
           })
           .catch(() => {
               navigator("/login");
           });
   }, []);
}


export default Logout;