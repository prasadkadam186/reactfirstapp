
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
                <h7>{this.state.data}</h7>
            </div>
        )
    }
}
export default ConstructorClass;