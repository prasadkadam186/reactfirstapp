import React,{useEffect, useState} from "react";
function UseEffectWithConditionOnState()
{
    const [count, setCount]=useState(100);
    const [data, setData]=useState(200);
    // Calling useEffect only when updating of data state i.e on click of Update Data button
    useEffect(()=>{
        alert("calling useEffect")
    },[data])
    return(
        <div>
            UseEffectWithConditionOnState loaded
            <br/><br/>
            <h5>Count = {count} & Data = {data}</h5>
            <button onClick={()=>{setCount(count+1)}}>Update Count</button> 
            <br/><br/>
            <button onClick={()=>{setData(data+1)}}>Update Data</button>
        </div>
    )
}
export default UseEffectWithConditionOnState;