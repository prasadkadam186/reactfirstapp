
import React from "react";

class ConstructorClass extends React.Component{
    constructor()
    {
        super();
        this.state={
            data:"Prasad"
        };
    }
    render()
    {
        return(
            <div>
                This is ConstructorClass based components
                <br/><br/>
                <h2>{this.state.data}</h2>
            </div>
        )
    }
}
export default ConstructorClass;