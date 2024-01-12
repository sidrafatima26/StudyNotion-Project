import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast"

const Navbar = (props) => {
    const isLoggedin=props.isLoggedin;
    const setLoggedin = props.setLoggedin;
    return(
        <div className='flex gap-3 justify-evenly text-2xl m-4'>
            <Link to="/"> <img alt="Not Found" src={logo} width={160} height={32} loading="lazy"></img> </Link>
            <nav >
                <ul className='flex gap-3'>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/About">About</Link> </li>
                    <li> <Link to="/Contactus">Contact Us</Link> </li>
                </ul>
            </nav>
            <div className='flex gap-3 ml-3'>
                { !isLoggedin && <Link to='/Login'> <button > Login </button> </Link>}
                { !isLoggedin && <Link to='/Signup'> <button> Sign Up </button> </Link>}
                {  isLoggedin && <Link to='/'> <button onClick= { () => { setLoggedin(false); toast.success("Logged out");  } }> Log out </button> </Link>}
                {  isLoggedin && <Link to='/Dashboard'> <button> Dashboard </button> </Link>}
            </div>
        </div>
    )
}

export default Navbar;