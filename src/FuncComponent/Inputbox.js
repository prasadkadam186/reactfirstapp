import { useState } from "react";

function Inputbox()
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
            <button onClick={()=>setPrint(true)}>Print Data</button>
        </div>
    )
}
export default Inputbox;