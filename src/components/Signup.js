import React from 'react'
import Template from './Template';
import Signupform from './Signupform';

const Signup = () => {
    return(
        <div>
            <div className='text-black text-5xl text-center m-10 p-10'>
                You are inside Signup Page.
                <Template></Template>
                <Signupform></Signupform>
            </div>

        </div>
    )
}

export default Signup;