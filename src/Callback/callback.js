import '../Common/style.css'
import { useNavigate } from "react-router-dom";
import {send_code_to_backend} from "../Common/api";
import {useEffect} from "react";


function Callback(){
    const navigator = useNavigate();
    let parameters = new URLSearchParams(window.location.search);
    let code = parameters.get('code');

    useEffect(() => {
        console.log("aaa")
        send_code_to_backend(code).then(res => {
            console.log(res)
        })
    })


}
export default Callback;