import React,{useState} from "react";
import {Link} from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

const Loginform = () => {
    const [formData, setformData] = useState( { email:"", pswd:"" } );

    const [showPswd, setPswd] = useState(false);

    function handleSubmit(){
        console.log(formData)
    }

    

    function handleLform(event){
        setformData( (prevformData) => {
            return{
                ...prevformData,
                [event.target.name] : event.target.value
            } }  ) }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input required type="email" id="email" placeholder="Enter email address" name="email" value={formData.email} onChange={handleLform}></input>
                <label htmlFor="pass">Password</label>
                <input required type={showPswd? ("text") : ("password")} id="pass" placeholder="Enter password" name="pswd" value={formData.pswd} onChange={handleLform}></input>
                <span onClick={ ()=> setPswd((prev) => !prev) }> {showPswd ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) } </span>
                <Link to="#"> <p>Forgot Password</p> </Link>
                <button>Sign in</button>
            </form>

        </div>
    )
}
export default Loginform;