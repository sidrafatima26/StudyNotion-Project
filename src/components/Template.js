import React from 'react'
import FrameImg from '../assets/frame.png'
import Signupform from './Signupform';
import Loginform from './Loginform';

const Template = ({title, desc1, desc2, imag, formtype, setLoggedin}) => {
    return(
        <div>
            <div> 
                <h1> {title} </h1>
                <p>  <span> {desc1} </span> <span> {desc2} </span> </p>
                {formtype === "signup"? (<Signupform></Signupform>) : (<Loginform></Loginform>)}
            <div></div>
            <div>OR</div>
            <div></div>
            <button> Sign Up with Google </button>
            </div>
            <div>
                <img width={558} height={504} loading="lazy" alt="Frame grid" src={FrameImg}></img>
                <img width={558} height={490} loading="lazy" alt="Frame grid" src={imag}></img>
            </div>
        </div>
    )
}
export default Template;