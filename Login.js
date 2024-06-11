import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login(){
    const [errorText, setErrorText]=useState('')
    const navigate=useNavigate();
    useEffect(()=>{
        const user = localStorage.getItem('token')
        if(user){
            navigate('/dashboard')
        }
    })
    const [token, setToken]=useState(null)
    const[loginForm, setLoginForm]=useState(
        {
            user:'',
            pwd:''
        }
    )
    const handleLogin=(e)=>{
        const {name,value}=e.target
        setLoginForm({...loginForm, [name]:value})
    }
    const onLogin=(e)=>{
        e.preventDefault()
        if(loginForm.user=='AK@mail.com' && loginForm.pwd=='AK@123'){
            alert('Login Successfull !!')
            let userToken='UserData'
            setToken(userToken)
            localStorage.setItem('token',userToken)
            navigate('/dashboard')
        }
        else{
            if(loginForm.user!='AK@mail.com' && loginForm.pwd!='AK@123'){
                setErrorText('Wrong Credentials !!')
                setLoginForm({
                    user:'',
                    pwd:''
                })
            }
            else if(loginForm.user=='AK@mail.com' && loginForm.pwd!='AK@123'){
                setErrorText('Wrong Password !!')
                setLoginForm({
                    pwd:''
                })
            }
            else if(loginForm.user!='AK@mail.com' && loginForm.pwd=='AK@123'){
                setErrorText('Wrong Username !!')
                setLoginForm({
                    user:''
                })
            }
            setTimeout(()=>{
                setErrorText('')
            },3000)
        }
    }
    return(
        <div className='container'>
            <div className='login'>
                <div className='title'>
                    <h2>Login Here!!</h2>
                </div>
                <form onSubmit={onLogin}>
                    <div className='input-field'> 
                        <i class="fa-solid fa-user"></i>
                        <input type='email' placeholder='Username' name='user' value={loginForm.user} onChange={handleLogin}></input>
                    </div>
                    <div className='input-field'>
                        <i class="fa-solid fa-key"></i>
                        <input type='password'  placeholder='Password' name='pwd' value={loginForm.pwd} onChange={handleLogin}></input>
                    </div>
                    <input type='submit' value='Login'></input>
                    <div className='error'>
                        <p>{errorText}</p>
                    </div>
                </form>
                <div className='click'>
                    <Link to='/forgotpassword'>Forgot Password?</Link>
                    <Link to='/register'>Don't have an account?</Link>
                </div>
            </div>
        </div>
    )
}
export default Login;