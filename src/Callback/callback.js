import '../Common/style.css';
import {send_code_to_backend} from "../Common/api";
import {useEffect} from "react";


function Callback(){
    let parameters = new URLSearchParams(window.location.search);
    let code = parameters.get('code');

    useEffect(() => {
        send_code_to_backend(code).then(res => {
            if(res.status === 200){
                localStorage.setItem("token", res.data);
                window.location.href = '/movies';
            }
        })
    })

}
export default Callback;