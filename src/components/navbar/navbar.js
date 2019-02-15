import React,{Component}from 'react';
import logo from './logo/logo.svg';
import './navbar.css'
// import Signup from '../signupandlogin/signup'
import {BrowserRouter,NavLink} from 'react-router-dom';
import Router from '../Router/router'
const userName= localStorage.getItem("Email");
class  Navbar extends Component{
state={
  foruservalue:false

}
forUserInfo=()=>{
  let pName=window.location.pathname;
  
  if(pName!="/" && pName!="/signup" && pName!="/login"){
    console.log(pName)
    this.setState({foruservalue:true})
    return this.state.foruservalue;
  }
  else{
    return this.setState({foruservalue:false})
  }
}

forSLbtn=()=>{
  let pName2=window.location.pathname;
  if(pName2==="/" || pName2==="/signup" ||pName2==="/login" ||pName2==="/quizapp" ){
   console.log("2nd",pName2)
    return true;
  }
  else{
   return false
  }
}


    render(){
    return(
        <BrowserRouter>
          <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> React Quiz App </h1>
         { this.forSLbtn() && <div className="head-btns">
          <NavLink to='/signup'> <button className="btn">Sign Up</button></NavLink>
          <NavLink to='/login'> <button className="btn">Login</button> </NavLink>            
          </div>}
          
          {/* {this.forUserInfo &&  (<div className="user-info" >
          <h4 className="uname">Welcome, {userName}</h4>
          <NavLink to='/'> <button className="btn-login">Logout</button></NavLink>           
          </div>) }          */}
        </header>       
        <Router/>  
        </div>
          </BrowserRouter>
                
    )
}
}   

export default Navbar;