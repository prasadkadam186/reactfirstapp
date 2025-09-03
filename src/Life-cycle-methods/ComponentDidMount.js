// componentDidMount Use : 1. Called once the html/css pages ready
//                         2. Called only one time i.e after component created

import React from "react";
class ComponentDidMount extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:"prasad"
        }
        console.log("Constructor called"); 
    }
    componentDidMount()
    {
        console.log("componentDidMount called");
    }
    render()
    {
        console.log("render called ");
        console.log(this.state.name);
        return(
            <div>
                ComponentDidMount Called
                <br/><br/>
                <button onClick={()=>this.setState({name:"Prasad Kadam"})}>Update State</button>
            </div>
        )
    }
}
export default ComponentDidMount;