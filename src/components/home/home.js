import React,{Component} from "react";
import logo from './logo/logo.svg';
import  './home.css';
class Home extends Component{
    render() {
        return (
        <div className="main-div"> 
           <div className="content-div">
                    <h1>
                        Welcome To QuizApp!
                    </h1>
                    <img src={logo} className="logo" alt="logo" />
                    <h5>Please login to Start your Quiz</h5>
           </div>
        </div>     
        );
    }
}
export default Home