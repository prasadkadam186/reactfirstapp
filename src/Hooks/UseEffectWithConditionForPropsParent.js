import React, { useState } from "react";
import UseEffectWithConditionForPropsChild from './UseEffectWithConditionForPropsChild'
import './UseEffectWithConditionForPropsParent.css';
function UseEffectWithConditionForPropsParent()
{
    const [count,setCount]=useState(100);
    const [data, setData]=useState(200);
    return(
        <div className="success">
            <UseEffectWithConditionForPropsChild count={count} data={data}/>
            <br/><br/>
            <h5>Count = {count} & Data = {data}</h5>
            <button className="button-sucess" onClick={()=>{setCount(count+1)}}>Update Count</button> 

            <button className="button-cancel" onClick={()=>{setData(data+1)}}>Update Data</button>
        </div>
    )
}
export default UseEffectWithConditionForPropsParent;