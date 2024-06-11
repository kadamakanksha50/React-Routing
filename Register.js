import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Register(){
    const navigate=useNavigate();
    useEffect(()=>{
        const first = localStorage.getItem('token')
        if(first){
            navigate('/dashboard')
        }
    })
    const [token, setToken]=useState(null)
    const[loginForm, setLoginForm]=useState(
        {
            first:'',
            last:'',
            email:'',
            contact:'',
            gender:'',
            pwd:''
        }
    )
    const handleRegister=(e)=>{
        const {name,value}=e.target
        setLoginForm({...loginForm, [name]:value})
    }
    const onRegister=(e)=>{
        e.preventDefault()
            alert('Registration Successfull !!')
            let userToken='UserData1'
            setToken(userToken)
            localStorage.setItem('token',userToken)
            navigate('/dashboard')
    }
    return(
        <div className='register'>
            <div className='contain'>
                <div className='title'>
                    <h2>Register Here !!</h2>
                </div>
                <form onSubmit={onRegister}>
                    <input type='text' placeholder='First Name' name='first' value={loginForm.first} onChange={handleRegister}></input>
                    <input type='text' placeholder='Last Name' name='last' value={loginForm.last} onChange={handleRegister}></input>
                    <input type='email' placeholder='Email Address' name='email' value={loginForm.email} onChange={handleRegister}></input>
                    <input type='number' placeholder='Contact' name='contact' value={loginForm.contact} onChange={handleRegister}></input>
                    <select name="gender" value={loginForm.gender} onChange={handleRegister}>
                      <option value="select">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <input type='password'  placeholder='Password' name='pwd' value={loginForm.pwd} onChange={handleRegister}></input>
                    <input type='submit' value='Register'></input>
                    <div className='click'>
                        <Link to='/'>Go back to login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register;