import { useState } from "react";

function Form_validation()
{
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [usernameErr, setUsernameErr]=useState(false)
    function getSignup(e)
    {
        e.preventDefault();
    }
    function userNameValidate(e)
    {
        let item=e.target.value;
        if(item.length< 3 )
        {
            setUsernameErr(true);
        }
        else{
            setUsernameErr(false);
        }
    }   
    return (
        <div>
           <form onSubmit={getSignup}  className="formContainer">
                <div className="heading">Sign Up</div>
                <div className="nameContainer">
                    <input type="email" placeholder="Username or Email" name="username" onChange={userNameValidate} />
                    {usernameErr ? <span style={{color:"red"}}> * Invalid Username</span> : ""}
                </div>
                <div className="password">
                    <input type="password" placeholder="Password" name="password" />
                </div>
                <div className="confirmPassword">
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" />
                </div>
                <div className="actionButton">
                    <div className="saveButton">
                        <button>Signup</button>
                    </div>
                </div>
           </form>
        </div>
    )
}
export default Form_validation;