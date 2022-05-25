import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from './Login/Login'
import NavBar from './Common/style'
import React from "react";
import Movies from './Movies/movies'
import Actor from './Actor/actor'
import Movie from './Movie/movie'
import Watchlist from "./Watchlist/watchlist";
import Logout from "./Logout/Logout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div><NavBar></NavBar><Login></Login></div>}></Route>
                <Route path="/login" element={<div><NavBar></NavBar><Login></Login></div>}></Route>
                {/*<Route path="/signup" element={<Signup></Signup>}></Route>*/}
                <Route path="/movies" element={<div><Movies></Movies></div>}></Route>
                <Route path='/movies/:id' element={<div><NavBar></NavBar><Movie></Movie></div>}></Route>
                <Route path='/actors/:id' element={<div><NavBar></NavBar><Actor></Actor></div>}></Route>
                <Route path="/watchlist" element={<div><NavBar></NavBar><Watchlist></Watchlist></div>}></Route>
                <Route path="/logout" element={<div><NavBar></NavBar><Logout></Logout></div>}></Route>
                {/*<Route path="*" element={<NotFound></NotFound>}></Route>*/}
            </Routes>
        </Router>
    );
}

export default App;
