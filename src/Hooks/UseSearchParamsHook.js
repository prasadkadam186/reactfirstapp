import { useState } from "react";
import { useSearchParams } from "react-router-dom";
function UseSearchParamsHook()
{
    // we can use the useSearchParams 
    const [searchParams, SetSearchParams]=useSearchParams();
    // Storing the default vaules i.e values coming from navbar will stored in this varible. 
    const name=searchParams.get('name') || "";
    const age=searchParams.get('age') || "";

    // Storing the latest updated values
    const [updatedName, setupdatedName]=useState("");
    const [updatedAge, setUpdatedAge]=useState();
    // To update the values on click on button.
    const updateParams=()=>{
        SetSearchParams({name:updatedName, age:updatedAge})
    }
    return(
        <div>
            <h2>useSearchParams Hook</h2>
            <h6>QuaryParams Name : {name}</h6>
            <h6>QuaryParams Age : {age}</h6>
            <input type="text" onChange={(e)=>setupdatedName(e.target.value)} placeholder="Enter the name"/>
            <br/> <br/> 
            <input type="text" onChange={(e)=>setUpdatedAge(e.target.value)} placeholder="Enter age"/>
            <br/> <br/> 
            <button onClick={updateParams}>Update Quary Params </button>
        </div>
    )
}
export default UseSearchParamsHook;