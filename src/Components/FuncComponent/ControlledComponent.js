import { useState, } from "react";
import {useNavigate } from "react-router-dom";
function ControlledComponent()
{
    // Purpose of useNavigate : To navigate programatically
    const navigate = useNavigate();
    let [name,setName] = useState("Name");
    return(
        <div>
            <h2>Controlled Components : </h2>
            <span>Those component whose using the state for input values for storing the values known as Controlled Components Eg. </span>
            <br></br>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <h5>Name : {name}</h5>
            <br/>
            {/* Nevigating the another page by passing data in url */}
            <button onClick={()=>navigate(`/UncontrolledComponent?name=${name}`)}>Go to Uncontrolled Component</button>
        </div>
    )
}
export default ControlledComponent;