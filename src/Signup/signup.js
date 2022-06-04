import '../Common/style.css'
import {useState} from "react";
import template from '../Common/template.png'
import {signup_api} from "../Common/api";
import {useNavigate} from "react-router-dom";

function Signup(){
    const navigator = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [nickname, setNickname] = useState("")
    const [name, setName] = useState("")
    const [birthdate, setBirthdate] = useState("")

    function submitData(e) {
        console.log(username)
        console.log(password)
        e.preventDefault();
        signup_api({username, password, nickname, name, birthdate})
            .then(res => {
                console.log(res);
                navigator("/movies")
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (

        <div className="wrapper">
            <div className="logo"><div className="logo"><img src={template} alt="logo"/></div></div>
            <div className="name"> IEMDB</div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex"><input onChange={e => setUsername(e.target.value)}
                                                                                                type="text" name="email"
                                                                                                id="userName"
                                                                                                placeholder="ایمیل"/>
                </div>
                <div className="form-field d-flex"><input onChange={e => setPassword(e.target.value)}
                                                                                                type="password"
                                                                                                name="password" id="pwd"
                                                                                                placeholder="رمز عبور"/>
                </div>
                <div className="form-field d-flex"><input onChange={e => setName(e.target.value)}
                                                                                                type="text" name="name"
                                                                                                id="Name"
                                                                                                placeholder="نام"/></div>
                <div className="form-field d-flex"><input onChange={e => setNickname(e.target.value)}
                                                                                                type="text"
                                                                                                name="nickName"
                                                                                                id="nickName"
                                                                                                placeholder="نام کاربری"/>
                </div>
                <div className="form-field d-flex"><input onChange={e => setBirthdate(e.target.value)}
                                                                                                type="date"
                                                                                                name="birthdate"
                                                                                                id="birthdate"
                                                                                                placeholder="تاریخ تولد"/>
                </div>
                <button className="btn mt-3" onClick={e => submitData(e)}>ثبت نام</button>
                <span className="btn span-btn mt-3"><a href={"https://github.com/login/oauth/authorize?client_id=f6eb4e409157aef614cd&scope=user"}>Signup with github</a></span>
            </form>
        </div>

    )
}
export default Signup;