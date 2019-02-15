import React,{Component} from 'react';
import './quizapp.css'
import {NavLink} from 'react-router-dom';

class Quizapp extends Component{
state={
    quiztopic:[
               
        {topic:"HTML" ,
        route:"/html",
        flag:false,       
    onclickrender:  <ul> <li><NavLink to="/html/html1">html test1</NavLink></li> <li><NavLink to="/html/html2">html test2</NavLink></li></ul>
       },
        {topic:"CSS",
        route:"/css",
        flag:false,
        onclickrender: <div> <ul><li>css test1</li> </ul></div>
    },       
        {topic:"JAVASCRIPT",
        route:"/javascript",
        flag:false,
        onclickrender: <div> <ul><li>js test1</li> </ul></div>
    },
        {topic:"REACT",
        route:"/react",
        flag:false,
        onclickrender: <div> <ul><li>react test1</li> </ul></div>
    },
],
flag:false,
Auth:JSON.parse(localStorage.getItem("Auth"))
}   


onclick=()=>{
    !this.state.flag && this.setState({flag:true})
    this.state.flag && this.setState({flag:false})   
    
}

    render(){
        return(

              this.state.Auth ?<div className="quiz-main">  
                                 
                              <div className="quiz-content">   
                              
                         <ul>
                         <h1>Select your Course</h1>   
                 <div>
        {this.state.quiztopic.map((item,key)=>{return <div key={key}><li onClick={this.onclick}>{item.topic}</li>{this.state.flag && item.onclickrender}</div> })}
                </div>
             
              </ul> 
        </div>
        </div>   
       :<h1>login first</h1> 
        )
    }
}
export default Quizapp;