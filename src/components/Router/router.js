import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Signup from '../signup/signup'
import Login from '../login/login'
import Quizapp from '../quizapp/quizapp'
import {Key,Questions} from '../quizapp/quiz'
import Home from '../home/home';

class Router extends Component{
    render(){
    return (
       
       <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/signup" component={Signup} />
           <Route exact path="/login" component={Login}/>
           <Route exact path="/html/html1" component={Key}/>
           <Route exact path="/html/html2" component={html1}/>
           <Route exact path="/quizapp" component={Quizapp}/>
           <Route exact path="/html/html1/start" component={Questions}  />
       </Switch>       
       

    )
}
}

let html1=()=>{return <h1>hello </h1>}
export default Router;