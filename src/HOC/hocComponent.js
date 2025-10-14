import { useState } from "react";

function HocComponent() {
   return(
    <div>
        <h2>HOC Component</h2>
        <span>Those Components whose are taking input as components and return the components that component we can say as <b>HOC Components</b></span>
        <br/><br/>
        <HocComponentWithRedColor cmp={Counter}/>
        <HocComponentWithBlueColor cmp={Counter}/>
    </div>
   ) 
}
export default HocComponent;

function Counter()
{
    let [count, setCount]=useState(0)
  return(
    <div>
        <h2>Counter called</h2> <br/><br/>
        <h5>Count Value : {count}</h5> <br/><br/>
        <button onClick={()=>{setCount(count+1)}}>Update</button>
    </div>
   ) 
}

function HocComponentWithRedColor(props)
{
    return(
        <div>
            <h2 style={{backgroundColor:'red', width:'35%'}}>Red <props.cmp/></h2>
        </div>
    )
}

function HocComponentWithBlueColor(props)
{
    return(
        <div>
            <h2 style={{backgroundColor:'Blue', width:'35%'}}>Blue <props.cmp/></h2>
        </div>
    )
}


