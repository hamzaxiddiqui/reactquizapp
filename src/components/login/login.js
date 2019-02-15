import React,{Component} from 'react';
import "./signup.css"
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            userEmail:"",
            userPass:""
        }
    }
    
onchange=(event)=>{
    let {name,value}=event.target;
    this.setState({[name]:value}) 
}
onloginsubmitbtn=(event)=>{
    event.preventDefault()
    let{userEmail,userPass}=this.state
    let email=localStorage.getItem("Email"),Pass=localStorage.getItem("Pass");
    if(userEmail && userPass){
        if(email===userEmail && Pass===userPass){
        this.props.history.push("/quizapp")
        localStorage.setItem("Auth","true");
     }
         
     else{
         alert("please enter correct value")
         }
        }
    else{
        alert("Enter Email or Pass");
    }
    
}
    render(){
        return(
            <div className="signup-main">
            
            <div className="signup-inner">
            
                
                <form onSubmit={this.onloginsubmitbtn}>
                    <table>
                        <tbody>
                        <tr>
                            <td><label className="from-lab" >Email:</label></td>
                            <td><input type="Email" className="inputs" name="userEmail"  onChange={this.onchange}/></td>
                        </tr>
                        <tr>
                            <td><label className="from-lab" >Password:</label></td>
                            <td><input type="password" className="inputs" name="userPass"  onChange={this.onchange}/></td>
                        </tr>
                        
                         <tr>
                            <td></td>
                            <td><button className="btn" >
                                                Login
                            </button></td>
                            
                        </tr>                  
                        </tbody>
                    </table>
                    </form>
            </div>
            </div>)      
        }
    }
export default Login;