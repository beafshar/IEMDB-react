import userlogo from './user.png';
import './style.css';
import template from './template.png'


function NavBar() {
    return (
        <div className="topnav">
            <a href="#" className="align-left"><img className="align-left" src={template} alt="logo"/></a>
            <div className="align-right">
                <li className="dropdown">
                    <a href="#" className="align-right"><img className="align-left" src={userlogo} alt="user"/></a>
                    <div className="dropdown-content nav">
                        <a href="login.html">ورود</a>
                        <a href="signup.html">ثبت‌نام</a>
                    </div>
                </li>
            </div>
        </div>
    );
}

export default NavBar;