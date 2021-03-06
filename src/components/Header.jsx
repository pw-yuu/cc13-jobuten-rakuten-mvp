import React from 'react';
import {useSelector} from "react-redux";

export default function Header(props) {
const loginName =  useSelector(state => state.loginName)
    console.log(props)

    return (
        <div className="App-header">
            <h1 className="App-logo">Jobu<span className="primary-color">Ten</span></h1>
            <ul>
                <li onClick={() => props.onClick(0)}>Home</li>
                <li onClick={() => props.onClick(1)}>Search Jobs</li>
                <li onClick={() => props.onClick(2)}>About</li>
            </ul>
            <div>
                {loginName !== "" ? <p>Welcome back, {loginName}!</p> : 
                <>
                <button className="signin-btn" onClick={()=>props.onClick(4)}>Sign In</button>
                <button className="signup-btn" onClick={()=>props.onClick(5)}>Sign Up</button></>}
            </div>
        </div>
    )
}