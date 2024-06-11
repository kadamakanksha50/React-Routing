import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Dashboard(){
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem('token')
        navigate('/')
    }
    return(
        <div className='dash'>
            <div className='header'>
                <div className='title'>
                    <h2>Dashboard</h2>
                </div>
                <div className='nav'>
                    <NavLink to="/dashboard/home">Home</NavLink>
                    <NavLink to="/dashboard/about">About</NavLink>
                    <NavLink to="/dashboard/services">Services</NavLink>
                    <NavLink to="/dashboard/contact">Contact</NavLink>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;