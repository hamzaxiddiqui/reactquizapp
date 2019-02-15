import React,{Component} from 'react';
import "./quiz.css"

let inc=0;
class Key extends Component{
    state={
        html1key:"html1test",
        html2key:"html2test",
        js1key:"js1test",
        js2key:"js2test",
        react1key:"r1key",
        react2key:"r2key",
        inputkey:"",
    }
oninputchange=(event)=>{
let value=event.target.value;
this.setState({inputkey:value});
console.log(this.state.inputkey)
}   
onsubmitbtn=(event)=>{
event.preventDefault();
    let pathName=window.location.pathname;
    if(this.state.inputkey){       
        if(pathName==="/html/html1" && this.state.inputkey===this.state.html1key ){
            console.log("matched")
            this.props.history.push("/html/html1/start") 
       }
       else{
        
        alert("not matched")
    }
   
    }
   else{
       console.log("not matched")
       alert("please enter key!")
   }
  
}

render(){
    return (
         <div className="main-div"> 
                    <div className="content-div">
                        <form onSubmit={this.onsubmitbtn}>
                                <h1>     Enter Key    </h1>                               
                                <input type="password" className="key-input" onChange={this.oninputchange}/> 
                                <input type="submit" value="Submit" name="inputkey" className="key-btn" />
                        </form>
                    </div>
      </div>  
    )
}
}
class Questions extends Component{
state={
    questions:[
    {
    ques:"Q:HTML Stand for?",
    opt1:"Hyper Type Markup Language",
    opt2:"High Text Markup Language",
    opt3:"Hyper Text Markup Language",
    correct:3},

    {   
    ques:"Q:Which tag is use for table ",
    opt1:"<tr>",
    opt2:"<table/>",
    opt3:"<table> </table>",
    correct:3},

    {   
    ques:"Q:Where does the title tag define",
    opt1:"in head tag",
    opt2:"in body tag",
    opt3:"in html tag",
    correct:1
    }
],
inc:0,
}

increament=(event)=>{
    event.preventDefault();
    console.log(event)
    
    if(inc<=this.state.questions.length-1){
        inc++;
        console.log(document.querySelector("input[name = 'option']:checked").value)
        console.log(inc,this.state.questions.length)
        
        this.setState({inc:inc})
        
        
        console.log("incre",inc)
    }

}

render(){
    return (
        <div>
            <div className="test-cont">
            <div className="test-item">
            <form onSubmit={this.increament}>
               <h2>{this.state.questions[inc].ques}</h2>
               <h4><input type="radio" value= "1" name="option" />{this.state.questions[inc].opt1}</h4>
               <h4><input type="radio" value= "2" name="option" />{this.state.questions[inc].opt2}</h4>
               <h4><input type="radio" value= "3" name="option" />{this.state.questions[inc].opt3}</h4>
               <input type="submit" value="Next"/>
               </form>
            </div>
            </div>
        </div>
    )
}
}

export {Key,Questions};
