// Ref Use : to use the dom elements and do actions forcefully.
// Only use in class component
import { Component, createRef } from "react";
class RefComponents extends Component{
    constructor()
    {
        super();
        this.inputRef=createRef();
    }
    getData() {
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color="red"
    }
    render()
    {
        return(
            <div>
                <h2>RefComponents called</h2>
                <input placeholder="name" ref={this.inputRef}/>
                <br></br>
                <button onClick={()=>{this.getData()}}>Update value</button>
            </div>
        )
    }
}
export default RefComponents;