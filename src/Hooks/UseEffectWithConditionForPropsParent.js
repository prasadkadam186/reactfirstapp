import React, { useState } from "react";
import UseEffectWithConditionForPropsChild from './UseEffectWithConditionForPropsChild'
function UseEffectWithConditionForPropsParent()
{
    const [count,setCount]=useState(100);
    const [data, setData]=useState(200);
    return(
        <div>
            <UseEffectWithConditionForPropsChild count={count} data={data}/>
            <br/><br/>
            <h5>Count = {count} & Data = {data}</h5>
            <button onClick={()=>{setCount(count+1)}}>Update Count</button> 
            <br/><br/>
            <button onClick={()=>{setData(data+1)}}>Update Data</button>
        </div>
    )
}
export default UseEffectWithConditionForPropsParent;