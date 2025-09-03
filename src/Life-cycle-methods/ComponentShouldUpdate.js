// Purpose : Invoke the method while updating the state
import React from "react";
class ComponentShouldUpdate extends React.Component{
    constructor()
    {
        super();
        console.log("constructor called");
        this.state={
            count:0
        }
    }
// Only updating the state if return value is true other wise not updating the state
    shouldComponentUpdate(){
        console.log("componentShouldUpdate called", this.state.count);
        if(this.state.count > 5 && this.state.count <=9)
        {
            return true;
        }
        else{
            return false;
        }
    }
    render()
    {
        return(
            <div>
                ComponentShouldUpdate called {this.state.count}
                <br/><br/>
                <button onClick={()=>{this.setState({count : this.state.count + 1})}}>Update Count</button>
            </div>
        )
    }
}
export default ComponentShouldUpdate;