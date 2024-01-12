import React,{useState} from "react";

const Signupform = () => {

    const [formData, setformData] = useState( { firstName:"", lastName:"", email:"", pswd:"", cpswd:""} )

    function handleChange(event){
        setformData( (prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        } )
    }

    return(
        <div>
            <div>
                <button>student</button>
                <button>instructor</button>
            </div>
            <form>
                <label>
                    <p>First Name <sub>*</sub></p>
                    <input required type="text" name="firstname" onClick={handleChange} placeholder="Enter First Name" value={formData.firstName}></input>
                </label>
                <label>
                    <p>Last Name <sub>*</sub></p>
                    <input required type="text" name="lastname" onClick={handleChange} placeholder="Enter Last Name" value={formData.lastName}></input>
                </label>                <label>
                    <p> Email <sub>*</sub></p>
                    <input required type="email" name="email" onClick={handleChange} placeholder="Email" value={formData.email}></input>
                </label>                <label>
                    <p> Password <sub>*</sub></p>
                    <input required type="password" name="pswd" onClick={handleChange} placeholder="Password" value={formData.pswd}></input>
                </label>                <label>
                    <p> Confirm Password<sub>*</sub></p>
                    <input required type="password" name="cpswd" onClick={handleChange} placeholder="Confirm Password" value={formData.cpswd}></input>
                </label>
            </form>

        </div>
    )
}
export default Signupform;