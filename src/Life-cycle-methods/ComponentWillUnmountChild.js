
import React from "react";
class ComponentWillUnmountChild extends React.Component{
    componentWillUnmount()
    {
        alert("ComponentWillUnmountChild called") 
    }
    render()
    {
        return(
            <div> ComponentWillUnmountChild called</div>
        )
    }
}
export default ComponentWillUnmountChild;