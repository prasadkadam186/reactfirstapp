import React from "react";
import ComponentWillUnmountChild from './ComponentWillUnmountChild'
class ComponentWillUnmountParent extends React.Component{
    constructor()
    {
        super();
        this.state={
            show : true
        }
    }
    render()
    {
        return(
            <div>
                ComponentWillUnmountParent called
                {
                    this.state.show ? <ComponentWillUnmountChild/> : <h4>child Component removed</h4>
                }
                <button onClick={()=>this.setState({show : !this.state.show})}>Hide ComponentWillUnmountChild</button>
            </div>
        )
    }
}
export default ComponentWillUnmountParent;