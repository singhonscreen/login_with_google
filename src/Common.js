import React from 'react'
import { NavLink } from 'react-router-dom'
import history from './history'

const Common = () => {
    const goBack = ()=>{
        history.push('/')
    }
    return (
        <>
        
        <div className = "dashboard">
        <div className="dash_container">
        <div ><button className="btn2" onClick={goBack}>Logout</button></div>
        <div className="mr">
        <NavLink className="nav" to ="/manager/home">Manager </NavLink>
        </div>
        <div className="mr">
        <NavLink className="nav" to ="/hr/home" >Hr </NavLink>
        </div>
        </div>
    </div>
        </>
    )
}

export default Common
