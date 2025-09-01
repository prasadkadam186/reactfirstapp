import { useState } from "react";

function Inputbox(props)
{
    const [data, setData]=useState("")
    const [print, setPrint]=useState(false)
    function getData(val)
    {
        console.log(val.target.value);
        setData(val.target.value)
    }
    return(
        <div>
            {
                print ? <h2>{data}</h2> : null
            }
            <input type="text" onChange={getData}/>
            <br/><br/>
            <button onClick={()=>setPrint(true)}>Print Data</button>
            <br/><br/>
            <button onClick={props.data}>call passFunctionAsProps</button>
        </div>
    )
}
export default Inputbox;