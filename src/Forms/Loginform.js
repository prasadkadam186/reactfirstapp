import { useState } from "react";

function Loginform() {
    // Decleration of state as per input fields
    let [name, setName]=useState("");
    let [role, setRole]=useState("")
    let [tac, setTac]=useState("false");
    function submitForm(e)
    {
        console.log(name, role, tac);
        // Below line avoide the refreshing of page on the click of submit button
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <div className="formContainer" style={{backgroundColor:"##fff6f6",borderRadius:"20px", margin: "4% 30% 1% 30%" }}>
                    <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} style={{backgroundColor:"#d9ebeb",margin: "2%",height: "2rem",width: "60%",border: "black",borderRadius:"7px"}}/>
                    <br /><br />
                    <select name="type" id="" onChange={(e)=>setRole(e.target.value)} placeholder="role" style={{backgroundColor:"#d9ebeb",height: "2rem",width: "60%",border: "none",borderRadius:"7px"}}>
                        <option value="" ></option>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                        <option value="Other">Other</option>
                    </select>
                    <br /><br />
                    <input type="checkbox" onChange={(e)=>setTac(e.target.checked)} /> <span>Terms and Conditons</span>
                    <br /><br />
                    <button style={{backgroundColor:"green", border: "none", borderRadius: "7px", width: "25%" , height: "2rem"}}>Submit</button>
                </div>
            </form>
        </div>
    );
}
export default Loginform;