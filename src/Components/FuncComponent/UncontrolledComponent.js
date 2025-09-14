import { useRef } from "react";

function UncontrolledComponent() {
    let input1=useRef("");
    let input2=useRef("");
    function saveForm(e)
    {
        e.preventDefault();

        let input3=document.getElementById("input3").value
        console.log("First Input Value : "+input1.current.value);
        console.log("Second Input value : "+input2.current.value);
        console.log("Third Input Value"+input3);
    }
    return (
        <div>
            <h2>Uncontrolled Component : </h2>
            <span>Components Whose input field are not handle by states, its handled by using DOM methods or ref its known as <b>Uncontrolled Components</b></span>
            <br /><br />
            <form onSubmit={saveForm}>
                {/* Handling the input values via ref */}
                <input type="text" placeholder="input 1" ref={input1} />
                <br /><br />
                <input type="text" placeholder="input 2" ref={input2}/>
                <br /><br />
                {/* Handling the input values via DOM methods */}
                <input type="text" placeholder="input 3" id="input3" />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default UncontrolledComponent;