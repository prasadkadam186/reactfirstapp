import React from "react";

class RenderMethodClass extends React.Component{
    constructor()
    {
        super();
        this.state={
            email : "test@yopmail.com"
        }
    }
    render()
    {
        console.log("Render Method Called", this.props.name);
        console.log("Render Method Called", this.state.email);
        return (
            <div>
                <h1>Hey this is RenderMethodClass</h1>
            </div>
        )
    }
}
export default RenderMethodClass;