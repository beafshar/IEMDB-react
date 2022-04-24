import { useState } from "react";
// import { Redirect } from "react-router";
// import { userExists } from "../services/SessionUtils";
import template from '../Common/template.png'
import './login.css'


function Login(props) {
    function submitName(e) {
        e.preventDefault();
        localStorage.setItem('username', name);
        console.log(name);
    }

    const [name, setName] = useState();

    // if (userExists())
    //     return <Redirect to='/home' />

    return (

        <div className="wrapper">
            <div className="logo"><img src={template} alt="logo"/></div>
            <div className="name"> IEMDB</div>
            <form>
                <div className="form-field d-flex"><span className="far fa-user"></span> <input onChange={e => setName(e.target.value)}
                                                                                                type="text"
                                                                                                name="userName"
                                                                                                id="userName"
                                                                                                placeholder="ایمیل"/>
                </div>
                <div className="form-field d-flex"><span className="fas fa-key"></span> <input type="password"
                                                                                               name="password" id="pwd"
                                                                                               placeholder="رمز عبور"/>
                </div>
                <button className="btn mt-3" onClick={e => submitName(e)}>ورود</button>
            </form>
        </div>
    )
}



export default Login; 