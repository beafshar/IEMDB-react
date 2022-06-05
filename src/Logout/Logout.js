import {useEffect} from "react";
import {logout_api} from "../Common/api";
import {useNavigate} from "react-router-dom";

function Logout() {
    const navigator = useNavigate();

   useEffect(() => {
       logout_api()
           .then(() => {
               localStorage.setItem("token", null);
               navigator("/login");
           })
           .catch(() => {
               navigator("/login");
           });
   }, []);
}


export default Logout;