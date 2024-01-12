import React from 'react'
import Template from './Template';
import Loginform from './Loginform';

const Login = () => {
    return(
        <div >
            <div className=''>
                You are inside Login Page.
                <Template></Template>
                <Loginform></Loginform>
            </div>
        </div>
    )
}

export default Login;