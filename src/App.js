import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import {Route, Routes} from 'react-router-dom';
import {useState} from 'react';
function App() {
  const [isLoggedin, setLoggedin] = useState(false);
  return(
    <div>
    <Navbar isLoggedin={isLoggedin} setLoggedin={setLoggedin}></Navbar> 
    <Routes>
      <Route path="/" element={<Home></Home>}  > </Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/Signup" element={<Signup></Signup>}></Route>
      <Route path="/Dashboard" element= {<Dashboard></Dashboard>}></Route>
    </Routes> 
    </div>
  );
}

export default App;
