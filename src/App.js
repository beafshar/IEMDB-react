import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login/Login'
import NavBar from './Common/style'
import React from "react";
import Signup from './Signup/signup'
import Movies from './Movies/movies'
function App() {
  return (


      <Router>
          <Routes>

              <Route path="/" element={
                  <div>
                  <NavBar></NavBar><Login></Login>
                  </div>}></Route>
              <Route path="/login" element={
                  <div>
                    <NavBar></NavBar><Login></Login>
                  </div>
                  }></Route>

              {/*<Route path="/signup" element={<Signup></Signup>}></Route>*/}

              <Route path="/movies" element={
                  <div>
                      <Movies></Movies>
                  </div>
              }></Route>


              {/*<Route path='/movies/:id' element={<Moive></Moive>}></Route>*/}

              {/*<Route path='/actors/:id' element={<Actor></Actor>}></Route>*/}
              {/*<Route path="/watchlist" element={<Watchlist></Watchlist>}></Route>*/}

              {/*<Route path="*" element={<NotFound></NotFound>}></Route>*/}
          </Routes>
      </Router>

  );
}

export default App;
