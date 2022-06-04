import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from './Login/Login'
import NavBar from './Common/style'
import React, {useEffect} from "react";
import Movies from './Movies/movies'
import Actor from './Actor/actor'
import Movie from './Movie/movie'
import Watchlist from "./Watchlist/watchlist";
import Logout from "./Logout/Logout";
import Signup from "./Signup/signup";
import Callback from "./Callback/callback";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<div><NavBar></NavBar><Login></Login></div>}></Route>
                <Route path="/login" element={<div><NavBar></NavBar><Login></Login></div>}></Route>
                <Route path="/signup" element={<div><NavBar></NavBar><Signup></Signup></div>}></Route>
                <Route path="/movies" element={<div><Movies></Movies></div>}></Route>
                <Route path='/movies/:id' element={<div><NavBar></NavBar><Movie></Movie></div>}></Route>
                <Route path='/actors/:id' element={<div><NavBar></NavBar><Actor></Actor></div>}></Route>
                <Route path="/watchlist" element={<div><NavBar></NavBar><Watchlist></Watchlist></div>}></Route>
                <Route path="/logout" element={<div><NavBar></NavBar><Logout></Logout></div>}></Route>
                <Route path="/callback" exact element={<Callback />}></Route>
                <Route path="*" element={<div><NavBar></NavBar><Login></Login></div>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
