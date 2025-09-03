// ComponentDidUpdate method : Invoke this method after the state or props updated
import React from "react";
class ComponentDidUpdate extends React.Component{
    constructor()
    {
        super();
        console.log("Super method invoked");
        this.state={
            id:0, 
            name : "Prasad"
        }
    }
    componentDidUpdate(preProps, preState, snapshot)
    {
        console.log("componentDidUpdate method invoked");
        console.log("Current ID : ",this.state.id,"Previous ID : ",preState.id);
        // If we want to update the state in componentDidUpdate then the condition should mandatory else its will goes into infinity loop. 
        if(this.state.id < 10)
        {
            this.setState({id:this.state.id+1})
        }
    }
    render()
    {
        return(
            <div>
                <h4>hey {this.state.id}</h4>
                ComponentDidUpdate called 
                <br/><br/>
                <button onClick={()=>{this.setState({id:1})}}>Update User</button>
            </div>
        )
    }
}
export default ComponentDidUpdate;