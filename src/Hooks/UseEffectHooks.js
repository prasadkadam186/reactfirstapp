// Hooks : If we want to use special feature of class components like state, lifecycle methods or pure 
//         in function based component then we have to used the hooks. 
//  useEffect() (in function Comp) = ComponentDidMount(),ComponentDidUpdate(), ComponentWillUnmount()
import React, {useEffect, useState} from "react";
function UserEffectHook()
{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        alert("useEffect called", count)
    })
    return(
        <div>
            UserEffectHook component called <h5>{count}</h5>
            <br/><br/>
            <button onClick={()=>{setCount(count+1)}}>Update Count </button>
        </div>
    )
    
}
export default UserEffectHook;