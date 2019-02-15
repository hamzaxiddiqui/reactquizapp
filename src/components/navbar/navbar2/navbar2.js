import React,{Component}from 'react';
import logo from './logo/logo.svg';
import './navbar2.css'
import {BrowserRouter,NavLink} from 'react-router-dom';
import Router from '../../Router/router'
const userName= localStorage.getItem("Email");
class  Navbar2 extends Component{


    render(){
    return(
        <BrowserRouter>
          <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> React Quiz App </h1>
          
          <div className="head-btns">
          <h4 className="uname">Welcome, {userName}</h4>
          <NavLink to='/'> <button className="btn-login">Logout</button></NavLink>           
          </div>         
        </header>       
        <Router/>  
        </div>
          </BrowserRouter>
                
    )
}
}   

export default Navbar2;