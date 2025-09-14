import { useState } from "react";

function ControlledComponent()
{
    let [name,setName] = useState("Name");

    return(
        <div>
            <h2>Controlled Components : </h2>
            <span>Those component whose using the state for input values for storing the values known as Controlled Components Eg. </span>
            <br></br>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <h5>Name : {name}</h5>
        </div>
    )
}
export default ControlledComponent;